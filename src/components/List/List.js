import React, { useState, Fragment } from 'react';
import './List.scss';

import AddCommentForm from '../AddCommentForm/AddCommentForm';

import ListItem from '../Styled/ListItem';
import ListItemComment from '../Styled/ListItemComment';
import Button from '../Styled/Button';

import moment from 'moment';

function List(props = { data: [] }) {
  const [ showAddCommentForm, setShowAddCommentForm ] = useState({});

  const renderItems = () => {
    return props.data.map((item, ind) => {
      return (
        <ListItem key={ ind }>
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
            setShowAddCommentForm(false);
            }} post={ item } /> : <Fragment /> }

          { renderComments(item.comments) }
        </ListItem>
      );
    });
  };

  const renderComments = (comments = []) => {
    return comments.map((comment, ind) => {
      return (
        <ListItemComment key={ ind }>
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
