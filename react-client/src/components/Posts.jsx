import React from 'react';
import Post from './Post.jsx'

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      // sortById: true,
      // sort: false,
      // sortByTitle: null,
      data: null
    }
  }

  componentDidmount() {
    console.log('checking')
    console.log('datat::', this.props.passData);
    this.setState({
      data:this.props.passData
    })
  }

  sortByTitle() {
    // console.log('checking', this.props.passData[0])

    // let titleStorage =[];
    let data = this.props.passData;


    data.sort(function(a, b){
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    });

    this.setState({
      data: data
    })
    // console.log('data??', data);
  }

  sortById() {
    let data = this.props.passData;
    data.sort(function(a, b){
      if(a.id < b.id) return -1;
      if(a.id > b.id) return 1;
      return 0;
    });
   this.setState({
      data:data
    })
  }

  sortByBody() {
    let data = this.props.passData;
    data.sort(function(a, b){
      if(a.body < b.body) return -1;
      if(a.body > b.body) return 1;
      return 0;
    });
    this.setState({
      data:data
    })
  }

  render () {
    return (
      <div>
       <input type="button" className="sort" value="Sort by Title" onClick={this.sortByTitle.bind(this)}/>
       <input type="button" className="sort" value="Sort by ID" onClick={this.sortById.bind(this)}/>
       <input type="button" className="sort" value="Sort by Body" onClick={this.sortByBody.bind(this)}/>
        {this.props.passData.map( (data, index) => 
          <Post key={index} id={data.id} title={data.title} body={data.body} />
        )}
      </div>
    )
  }
}


export default Posts;