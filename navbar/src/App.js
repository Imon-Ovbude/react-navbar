import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import KeyFeatures from './components/pages/KeyFeature';
import Pricing from './components/pages/Pricing';
import Testimonials from './components/pages/Testimonials';
import Demo from './components/pages/Demo';
import Navbar from './components/navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/features' component={KeyFeatures} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/testimonials' component={Testimonials} />
          <Route path='/demo' component={Demo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
