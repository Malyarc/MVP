const express = require('express');
const userdb = require('../database/index')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const key = require('../key.js');

var aws = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');
var s3 = new aws.S3()
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));
var counter = 0;
aws.config.update({
  secretAccessKey: key.skey,
  accessKeyId: key.key,
  region: 'us-west-1'
});
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'malyarctest',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING META DATA'});
    },
    key: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
})
const singleUpload = upload.single('image');
app.post('/image-upload', function(req, res) {
  //console.log(singleUpload);
  //console.log(req)
  //userdb.User.update({'email': })
  singleUpload(req, res, function (err) {
    //console.log(req.file)
    return res.json({'imageUrl': req.file.location});
  })
})

// app.get('/getFiles', (req,res) => {
//   console.log('user email', req.body)
//   // userdb.User.findOne({ email: req.body.email })
// })

app.post("/addFile", (req, res) => {
  console.log('email', req.body.email);
  console.log('imageurl', req.body.image);
  userdb.User.update(
    { 'email': req.body.email},
    { $push: { 'files': req.body.image } }, () => {res.send(200);}
    )

});


app.post("/register", (req, res) => {

  console.log(req.body);
  userdb.save(req.body);
  res.send(200);


});

app.post("/login", (req, res) => {
  userdb.User.findOne({ email: req.body.email }, (err, user) => {
      if (!user) {
        console.log("Account does not exist!")
        return res.send(400)
      }

      if (user.password === req.body.password) {
        console.log("Password Matches!")
        res.send(user)
      } else {
        console.log('password doesnt match')
        res.send(400)
      }


  });
});


/// FILE STORAGE



let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});