const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/commerceUser', { useUnifiedTopology: true, useNewUrlParser: true }).then(() => console.log('db connected'));


let userSchema = mongoose.Schema({
  firstname: {
      type:String,
      maxlength:50
  },
  lastname: {
      type:String,
      maxlength: 50
  },
  email: {
      type:String,
      trim:true,
      unique: 1
  },
  password: {
      type: String,
      minglength: 5
  },
  files: {
    type: Array
  }

})

const User = mongoose.model('User', userSchema);

const save = (data) => {
  var user = new User({
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    password: data.password
  })
  user.save((err, result) => {
    if (err) {
      return (err, null);
    }
    return (null, result);
  });
};

module.exports = { User, save }

