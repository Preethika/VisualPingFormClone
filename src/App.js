import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Form from './Components/Form'; 

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/Form' component={Form} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;