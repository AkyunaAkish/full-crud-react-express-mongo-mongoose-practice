import React, { useState, Fragment } from 'react';
import axios from 'axios';
import './List.scss';

import AddCommentForm from '../AddCommentForm/AddCommentForm';

import ListItem from '../Styled/ListItem';
import ListItemComment from '../Styled/ListItemComment';
import Button from '../Styled/Button';

import moment from 'moment';

function List(props = { data: [] }) {
  const [ showAddCommentForm, setShowAddCommentForm ] = useState({});

  const handleDeletePost = async (post) => {
    await axios.delete(`/api/posts/${post._id}`).catch((e) => console.error('failed to delete post', e));
    props.fetchPosts();
  };
  
  const handleDeleteComment = async (post, comment, ind) => {
    await axios.delete(`/api/posts/${post._id}/comments/${comment._id}`).catch((e) => console.error('failed to delete post', e));
    props.fetchPosts();
    setShowAddCommentForm({ ...showAddCommentForm, [ind]: false });
  };

  const renderItems = () => {
    return props.data.map((item, ind) => {
      return (
        <ListItem key={ ind }>
          <Button onClick={ () => handleDeletePost(item, ind) }
                  bgColor='rgb(217, 31, 22)'>
            Delete Post
          </Button>

          <div>
            Title: { item.title }
          </div>
          <div>
            Author: { item.author }
          </div>
          <div>
            Content: { item.content }
          </div>
          <div>
            Date: { moment(item.date).format('MM-YYYY') }
          </div>

          <hr />

          <Button onClick={ () => setShowAddCommentForm({ ...showAddCommentForm, [ind]: !showAddCommentForm[ind] }) }>
            { !showAddCommentForm[ind] ? 'Add Comment' : 'Cancel' }
          </Button>

          { showAddCommentForm[ind] ? <AddCommentForm fetchPosts={ () => {
            props.fetchPosts();
            setShowAddCommentForm({ ...showAddCommentForm, [ind]: !showAddCommentForm[ind] });
            }} post={ item } /> : <Fragment /> }

          { renderComments(item, item.comments) }
        </ListItem>
      );
    });
  };

  const renderComments = (post, comments = []) => {
    return comments.map((comment, ind) => {
      return (
        <ListItemComment key={ ind }>
          <Button onClick={ () => handleDeleteComment(post, comment, ind) }
                  bgColor='rgb(217, 31, 22)'>
            Delete Comment
          </Button>

          <div>
            Author: { comment.author }
          </div>          
          <div>
            Content: { comment.content }
          </div>          
          <div>
            Date: { moment(comment.date).format('MM-DD-YYYY') }
          </div>          
        </ListItemComment>
      );
    });
  };

  return (
    <div className='list'>
      { renderItems() }
    </div>
  );
}

export default List;
