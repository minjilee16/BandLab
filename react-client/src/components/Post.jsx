import React from 'react';

var Post = ({id, title, body}) => (
  <div className="box">
    <div className="id">
      <b>ID:</b> {id}<br/>
    </div>
    <div className="title">
    <b>Title:</b> {title}<br/>
    </div>
    <div className="text-body">
      <b>Body:</b> {body}
    </div>
  </div>
);


export default Post;