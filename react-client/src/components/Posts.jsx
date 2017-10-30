import React from 'react';
import Post from './Post.jsx'

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      data: null,
      group: null
    }
  }

  sortByTitle() {
    let data = this.props.passData;
    data.sort(function(a, b){
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    });
    this.setState({
      data: data
    })
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

  selectGroup (e) {
    this.setState({
      group: e.target.value
    })
  }

  groupByUserId() {
    const selectedGroup = [];
    this.props.passData.map( data => { 
      Number(this.state.group) === data.userId ? selectedGroup.push(data) : null 
    });
    this.setState({
      data:selectedGroup
    })
  }

  render () {
    let posts = null;
    if(this.state.data === null) {
      posts = this.props.passData.map( (data, index) => 
          <Post key={index} id={data.id} title={data.title} body={data.body} userId={data.userId} />
      )
    } else if (this.state.data !== null) {
      posts = this.state.data.map( (data, index) => 
          <Post key={index} id={data.id} title={data.title} body={data.body} userId={data.userId} />
      )
    }
    let userId = [];
    this.props.passData.map((data) => userId.push(data.userId) );
    let deletedDuplicateId = userId.filter( (ele, index, self) => { return index === self.indexOf(ele) });
    return (
      <div>
        <div className="select-group"> 
          <span className="group-text">Group by userId </span>
          <select className="options" onChange={this.selectGroup.bind(this)}> 
          { 
            deletedDuplicateId.map((num, index) => 
            <option key={index} value={num}>{num}</option>)
          }
          </select>
          <input className="group-serachbutton" type="button" value="Search!" onClick={this.groupByUserId.bind(this)}/>
        </div>
        <div className="sort-buttons">
          <input type="button" className="sort" value="Sort by Title" onClick={this.sortByTitle.bind(this)}/>
          <input type="button" className="sort" value="Sort by ID" onClick={this.sortById.bind(this)}/>
          <input type="button" className="sort" value="Sort by Body" onClick={this.sortByBody.bind(this)}/>
        </div>
        {posts}
      </div>
    )
  }
}


export default Posts;