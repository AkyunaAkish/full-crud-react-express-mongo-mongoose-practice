import React, { useState } from 'react';
import axios from 'axios';
import './AddCommentForm.scss';

import Input from '../Styled/Input';
import Button from '../Styled/Button';

function AddCommentForm(props) {
  const [ formValues, setFormValues ] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('props', props);
    if(formValues.author && formValues.author.trim().length &&
       formValues.content && formValues.content.trim().length) {
      axios.post(`/api/posts/${props.post._id}/comments`, formValues)
           .then(() => {
            props.fetchPosts(true);
           })
           .catch((e) => {
             console.log('error adding comment form', e);
             alert('Failed to add comment');
           });
    } else {
      alert('All values must be filled in');
    }
  };

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form className='add-comment-form' 
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
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  );
}

export default AddCommentForm;