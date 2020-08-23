import React, { Component} from 'react';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import { BrowserRouter, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Route exact path="/" component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/about" component={About}/>
            </div>
        </BrowserRouter>
      
      );
  }
}

export default App;
