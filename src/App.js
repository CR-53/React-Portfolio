import React from 'react';
/*import logo from './logo.svg';*/
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Wrapper>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/React-Portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
  </Router>
  )
}

export default App;
