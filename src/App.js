import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import home from './components/pages/home';
import about from './components/pages/about';
import services from './components/pages/services';
import contact from './components/pages/contact';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact component={home}/>
      <Route path='/about' component={about}/>
      <Route path='/services' component={services}/>
      <Route path='/contact' component={contact}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
