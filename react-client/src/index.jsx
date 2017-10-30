import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: null
    }
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      this.setState({
        data: response.data
      })
      // console.log('data', response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }


  render () {
    return (
    <div>
    
      <input type="button" className="getdata-button" value="Click here to see all posts"/> 
      {console.log('state:', this.state.data)}
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));


