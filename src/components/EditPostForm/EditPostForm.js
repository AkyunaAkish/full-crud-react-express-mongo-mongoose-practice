import React, { useState } from 'react';
import axios from 'axios';
import './EditPostForm.scss';

import Input from '../Styled/Input';
import Button from '../Styled/Button';

function EditPostForm(props) {
  const [ formValues, setFormValues ] = useState({
    title: props.post.title,
    author: props.post.author,
    content: props.post.content,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(formValues.title && formValues.title.trim().length &&
       formValues.author && formValues.author.trim().length &&
       formValues.content && formValues.content.trim().length) {
      axios.put(`/api/posts/${props.post._id}`, formValues)
           .then(() => {
            props.fetchPosts(true);
           })
           .catch((e) => {
             console.log('error editing post form', e);
             alert('Failed to edit post');
           });
    } else {
      alert('All values must be filled in');
    }
  };

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form className='edit-post-form' 
          onSubmit={ handleSubmit }>
      <Input placeholder='Title'
             value={ formValues.title || '' }
             onChange={ (e) => {
              handleChange('title', e.target.value);
             }} />

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

export default EditPostForm;