import React, { useState } from 'react';
import axios from 'axios';
import './EditCommentForm.scss';

import Input from '../Styled/Input';
import Button from '../Styled/Button';

function EditCommentForm(props) {
  const [ formValues, setFormValues ] = useState({
    author: props.comment.author,
    content: props.comment.content,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(formValues.author && formValues.author.trim().length &&
       formValues.content && formValues.content.trim().length) {
      axios.put(`/api/posts/${props.post._id}/comments/${props.comment._id}`, formValues)
           .then(() => {
            props.fetchPosts(true);
           })
           .catch((e) => {
             console.log('error editing comment form', e);
             alert('Failed to edit comment');
           });
    } else {
      alert('All values must be filled in');
    }
  };

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form className='edit-comment-form' 
          onSubmit={ handleSubmit }>
      <Input placeholder='Author'
             value={ formValues.author || '' } 
             onChange={ (e) => {
              handleChange('author', e.target.value);
             }} />

      <Input placeholder='Content'
             value={ formValues.content || '' } 
             onChange={ (e) => {
              handleChange('content', e.target.value);
             }} />

      <div>
        <Button type='submit' bgColor='rgb(149,149,149)'>Submit</Button>
      </div>
    </form>
  );
}

export default EditCommentForm;