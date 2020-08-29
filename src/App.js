import React, { Component} from 'react';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Post from './components/Post'
import { BrowserRouter, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/:post_id" component={Post}/>
            </div>
        </BrowserRouter>
      
      );
  }
}

export default App;
