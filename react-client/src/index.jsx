import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Posts from './components/Posts.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: null,
      showAudios: false
    }
  }

  getData() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      this.setState({
        data: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  showSampleAudios() {
    this.setState({
      showSampleAudios: true
    })
  }

  render () {
    const audios =  
    <div className="audios"> 
      <audio controls autoPlay>
        <source src="https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg" type="audio/ogg" />
      </audio><br/>
      <audio controls>
        <source src="https://static.bandlab.com/soundbanks/previews/synth-organ.ogg" type="audio/ogg" />
      </audio><br/>
      <audio controls>
        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/equalizer.mp3" type="audio/mpeg"/>
      </audio><br/>
    </div>
    return (
    <div className="main">
      <input type="button" onClick={this.showSampleAudios.bind(this)} className="audios-button" value="See some sample of audios"/><br/> 
      { this.state.showSampleAudios ? audios : null }
      <input type="button" onClick={this.getData.bind(this)} className="getdata-button" value="Click here to see all posts"/><br/> 
      { this.state.data !== null ? <Posts passData={this.state.data}/> : null }
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));