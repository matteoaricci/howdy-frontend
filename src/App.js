import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Login from './components/User-Components/Login'
import Registration from './components/User-Components/Registration'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/registration' component={Registration}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App