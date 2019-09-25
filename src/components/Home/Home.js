import React, { useState }from 'react';
import './Home.scss';

import Header from '../Styled/Header';
import Button from '../Styled/Button';

function Home() {
  const [ posts, setPosts ] = useState([]);

  return (
    <div className='Home'>
      <header className='Home-header'>
        <Header>
          Posts and Comments!
        </Header>

        <Button>Add Post</Button>
      </header>
    </div>
  );
}

export default Home;
