import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Title from './common/Title';
import NavBar from './common/NavBar';
import Footer from './common/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Visual from './pages/Vis';
import './App.scss';

import VisualRenderer from './visual/VisualRenderer'

function App() {
  return (
    <Router>
      
      <Title />
      <NavBar />
      
      <div className="container">
        <Switch>
          <Route exact path="/" render={Home} />
          <Route exact path="/about" render={About} />
          <Route exact path="/visual" render={Visual} />
          <Route exact path="/visual/:vis_name" render={VisualRenderer}/>
          <Redirect to="/" />
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}

export default App;