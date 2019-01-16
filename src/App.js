import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom'; 
import Navigaton from './components/Navigation'


const App = () => (
  <div className="App">
   <Navigation />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />

  </div>
);

export default App;
