import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostDetails from './components/Posts/PostDetails/PostDetails';
import Header from './components/Header/Header';
import CreatorOrTag from './components/CreateOrTag';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Auth from './components/Auth/Auth';

const App = () => {

    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user);

return (
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={(user ? <Landing /> :<Auth/>)} >
              <Route exact path="/auth" element={<Auth/>}/>
              <Route index path="/posts" element={<Landing/>}/>
              <Route path="/posts/search" element={<Landing/>}/>
              <Route path="/posts/:id" element={<PostDetails/>} />
              <Route path="/tags/:name" element={<CreatorOrTag/>} />
              <Route path="/creators/:name" element={<CreatorOrTag/>} />
            </Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
};

export default App;
