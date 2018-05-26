import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './components/Home';
import Todo from './components/todoapp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar/>

            <Route exact path="/" component={Home}/>
            <Route path="/todo" component={Todo} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
