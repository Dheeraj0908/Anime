import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import FeaturedAnime from './components/FeaturedAnime';



function Pages (){
  return (
    <Switch>
      <Route exact path='/' component={App}></Route>
      <Route exact path='/signup' component={FeaturedAnime}></Route>
    </Switch>
  );
}

export default Pages;