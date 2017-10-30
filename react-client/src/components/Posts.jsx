import React from 'react';
import Post from './Post.jsx'

var Posts = ({passData}) => (
  <div>
  {passData.map( (data, index) => 
    <Post key={index} id={data.id} title={data.title} body={data.body} />
  )}
  </div>
);


export default Posts;