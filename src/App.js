import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import home from './components/pages/Home';
import about from './components/pages/About';
import blog from './components/pages/Blog';
import contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route path='/' exact component={home}/>
      <Route path='/about' component={about}/>
      <Route path='/blog' component={blog}/>
      <Route path='/contact' component={contact}/>
    </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
