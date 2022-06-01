import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';


function App() {
  return (
<div className="App">
    <Routes>
    <Route path="/" element={ <Header />} />
    <Route path="/nav" element={ <Nav />} />
    <Route path="/home" element={ <Home />}/>
    <Route path="/newpost" element={ <NewPost />} />
    <Route path="/postpage" element={ <PostPage />} />
    <Route path="/about" element={ <About />} />
    <Route path="/missing" element={ <Missing />} />
    <Route path="/footer" element={ <Footer />} />
    </Routes>
  </div>
  
  );
}

export default App;
