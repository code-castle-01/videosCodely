import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from '../components/List';
import Detail from '../components/Detail';
import About from '../components/About';

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component ={List}/>
      <Route exact path="/:id" component ={Detail}/>
      <Route path="/about" component ={About}/>
    </div>
  </Router>
);

export default Root;
