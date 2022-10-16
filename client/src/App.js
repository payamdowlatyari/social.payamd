import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
// import Dashboard from './components/Dashboard/Dashboard';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
// import Posts from './components/Posts/Posts';
import PostDetails from './components/Posts/PostDetails/PostDetails';
import CreatorOrTag from './components/CreateOrTag';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Auth from './components/Auth/Auth';

const App = () => {

    // const isAuthenticated = useSelector((state) => state.auth);
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user);
    const handleLogout = () => {
      localStorage.removeItem('token');
    };

return (
      <BrowserRouter>
        <Header />
          <Routes>
            {/* <Route exact path="/" element={() => <Navigate to="/posts"/>} /> */}
            <Route exact path="/" element={<Landing/>}/>
            <Route exact path="/posts" element={<Landing/>}/>
            <Route exact path="/posts/search" element={<Landing/>}/>
            <Route exact path="/posts/:id" element={<PostDetails/>} />
            <Route exact path="/tags/:name" element={<CreatorOrTag/>} />
            <Route exact path="/creators/:name" element={<CreatorOrTag/>} />
            {/* <Route path="/dashboard" element={isAuthenticated && <Dashboard/>} /> */}
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/logout" onClick={handleLogout} element={<Login/>}/>
            {/* <Route exact path="/auth" element={() => (!user ? <Auth /> : <Navigate to="/posts" />)} /> */}

          </Routes>
          <Footer/>
      </BrowserRouter>
  );
};

export default App;
