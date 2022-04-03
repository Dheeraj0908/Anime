import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import FeaturedAnime from './components/FeaturedAnime';



function Mainpage (){
  return (
    <Routes>
      <Route exact path='/' component={App}></Route>
      <Route exact path='/signup' component={FeaturedAnime}></Route>
    </Routes>
  );
}

export default Mainpage;