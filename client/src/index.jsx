import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SignUp from './components/SignUp.jsx';
import Welcome from './components/Welcome.jsx';
import Login from './components/Login.jsx';
import UploadVideo from './components/UploadVideo.jsx';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null,
        isLoggedIn: false,
        links: [],
        alreadyUser: false
      }
      this.addFileToUser = this.addFileToUser.bind(this)
     // this.findUserFiles = this.findUserFiles.bind(this)

    }

    componentDidMount() {
      //this.findUserFiles()
    }



    login(event) {
      event.preventDefault();

      var loggingIn = {
        email: event.target[0].value,
        password: event.target[1].value,
      }

      $.ajax({
        type: 'POST',
        url: '/login',
        data: loggingIn

      }).done((data) => {
        this.setState({
          user: data,
          isLoggedIn: true,
          links: data.files
        })
        //console.log(this.state.user.files)

      }).catch((err) => {
        console.log('caught err');
        console.log(err);
      });
    }


    sendRegistration(event) {
      event.preventDefault();

      var newUser = {
        firstname: event.target[0].value,
        lastname: event.target[1].value,
        password: event.target[3].value,
        email: event.target[2].value,
      }

      $.ajax({
        type: 'POST',
        url: '/register',
        data: newUser

      }).then(() => {
        console.log('then');
        this.setState({
          user: newUser,
          isLoggedIn: true,
        })

      }).catch((err) => {
        console.log('caught err');
        console.log(err);
      });
    }

    addFileToUser (link) {

      $.ajax({
        type: 'POST',
        url: '/addFile',
        data: link
      })

    }




     handleImageUpload (image) {
      //event.preventDefault();
      //var file = {'image': event};
      var file = new FormData();
      //console.log(image);
      file.append('image', image)
      //file.append('username', this.state.user.email)
      $.ajax({
        type: 'POST',
        url: '/image-upload',
        data: file,
        contentType: false,
        processData:false
      }).then((data) => {
        var stuff = {
          "email" : this.state.user.email,
          "image" : data.imageUrl
        }
        //console.log('data', data.imageUrl);
        this.addFileToUser(stuff)
        if (!this.state.user.files) {
          this.state.user.files = []
        }
        var storage = this.state.user.files;
        storage.push(data.imageUrl)
        this.setState({
          links: storage
        })

        })
    }



    changeToLogin() {
      this.setState({
        alreadyUser: true
      })
    }

    render () {
      var intro2;
      if (this.state.isLoggedIn) {
        var intro = <Welcome user = {this.state.user} />
        var intro2 = <UploadVideo uploadFile={this.handleImageUpload.bind(this)} links = {this.state.links}/>;
      } else {
         //var intro2 = <Login login = {this.login.bind(this)}/>
         if (this.state.alreadyUser) {
           var intro = <Login login = {this.login.bind(this)}/>

         } else {
          var intro = <SignUp sendRegistration={this.sendRegistration.bind(this)} logIn={this.changeToLogin.bind(this)}/>

         }

        // var intro1 = <SignUp sendRegistration={this.sendRegistration.bind(this)}/>

      }
      return (
      <div>
        {intro}
        <br></br>
        {intro2}
      </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));