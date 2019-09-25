import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import './Home.scss';

import List from '../List/List';
import AddPostForm from '../AddPostForm/AddPostForm';

import Header from '../Styled/Header';
import Button from '../Styled/Button';

function Home() {
  const [ posts, setPosts ] = useState([]);
  const [ showAddPostForm, setShowAddPostForm ] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async (hideAddPostForm = false) => {
    const posts = await axios.get('/api/posts').catch(console.error);
    setPosts(posts.data.posts);

    if(hideAddPostForm) {
      setShowAddPostForm(false);
    }
  };
  
  return (
    <div className='home'>
      <header className='home-header'>
        <Header>
          Posts and Comments!
        </Header>

        <Button onClick={ () => setShowAddPostForm(!showAddPostForm) }>
          { !showAddPostForm ? 'Add Post' : 'Cancel' }
        </Button>

        { showAddPostForm ? <AddPostForm fetchPosts={ fetchPosts } /> : <Fragment /> }

        <List data={ posts }
              fetchPosts={ fetchPosts } />
      </header>
    </div>
  );
}

export default Home;
