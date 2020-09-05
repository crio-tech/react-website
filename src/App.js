import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import home from './components/pages/Home/home';
import about from './components/pages/About/about';
import services from './components/pages/Services/services';
import contact from './components/pages/Contact/contact';

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route path='/' exact component={home}/>
      <Route path='/about' component={about}/>
      <Route path='/services' component={services}/>
      <Route path='/contact' component={contact}/>
    </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
