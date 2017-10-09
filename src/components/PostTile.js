import React from 'react';
import LikeButton from './LikeButton';

const PostTile = ({ post }) =>
  <div id={post.id} className="jumbotron">
    <h1 className="title">{post.title}</h1>
    <p className="paragraph">{post.content}</p>
    <LikeButton post={post} />
  </div>

export default PostTile;
