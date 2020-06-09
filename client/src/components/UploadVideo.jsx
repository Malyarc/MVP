import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import FileUrls from './FileUrls.jsx';



class UploadVideo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        file: null,
        filesList: []

      }

      this.fileSelector = this.fileSelector.bind(this)
      this.handleFile = this.handleFile.bind(this)
      // this.handleImageUpload = this.handleImageUpload.bind(this)

    }

    componentDidMount() {
      //this.findUserFiles();
      this.updateFilesList();
      this.setState({
        filesList : this.props.links
      })
      console.log('inside', this.props.links)
      console.log('hi', this.state.filesList)
    }


    updateFilesList () {
      this.setState({
        filesList: this.props.links
      })
    }



    fileSelector (event)  {

      console.log(event.target.files[0]);
      this.setState({
        file: event.target.files[0]
      }, () => console.log(this.state.file))

      //console.log(this.state.file)
    }



    handleFile(event) {
      this.props.uploadFile(this.state.file)
    }

    render() {
        return(
        <div>
          <div>
            <h1>Upload Files</h1>
          </div>

          <div>
            <input type="file" onChange = {this.fileSelector}/>
            <button onClick = {this.handleFile}> Upload </button>

          </div>

          <div>
             {this.props.links.map((link) => <FileUrls link ={link} />)}
          </div>


        </div>



        );
    }


};

export default UploadVideo;