import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Home from "./Components/Home";
import Work from "./Components/Work";
import About from "./Components/About";
import Post from "./Components/Post";
import Footer from "./Components/Footer";

class App extends Component {

  render() {
    return (
      <container>
        <Router>
          <container>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand href="/">Ciarán Coady</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/blog">Blog</Nav.Link>
                  <Nav.Link href="/work">Work</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
            <Route path="/blog">
                <Post />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/work">
                <Work />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </container>
        </Router>
        <Footer />
      </container>
    );
  }
}

export default App;
