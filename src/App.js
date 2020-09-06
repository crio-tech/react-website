import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import home from './components/pages/Home/home';
import about from './components/pages/About/about';
import blog from './components/pages/Blog/blog';
import contact from './components/pages/Contact/contact';

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
    <Navbar/>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
