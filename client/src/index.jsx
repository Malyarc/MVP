import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SignUp from './components/SignUp.jsx';
import Welcome from './components/Welcome.jsx';
import Login from './components/Login.jsx';
import UploadVideo from './components/UploadVideo.jsx';



class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null,
        isLoggedIn: false
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
          isLoggedIn: true
        })
        //console.log(this.state.user.files)

      }).catch((err) => {
        console.log('caught err');
        console.log(err);
      });
    }



    // findUserFiles() {
    //   console.log('client email',this.state.user.email)
    //   var info = {"email": this.state.user.email}
    //   $.ajax({
    //     type: 'GET',
    //     url: '/getFiles',
    //     data: info
    //   }).done((data) => {
    //     this.setState({
    //       filesList : data
    //     })
    //     //console.log(this.state.filesList)
    //   })
    // }



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
          isLoggedIn: true
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
        })
    }

    render () {

      if (this.state.isLoggedIn) {
        var intro = <Welcome user = {this.state.user} />
        //this.findUserFiles();
        var intro2 = <UploadVideo uploadFile={this.handleImageUpload.bind(this)} links = {this.state.user.files}/>;
      } else {
         var intro = <Login login = {this.login.bind(this)}/>
         var intro2 = <SignUp sendRegistration={this.sendRegistration.bind(this)}/>
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