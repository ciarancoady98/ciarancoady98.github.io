import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: {}
    };
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "/data.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ pageData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.pageData.main} />
        {/* <About data={this.state.pageData.main} /> */}
        <Work data={this.state.pageData.resume} />
        {/* <Contact data={this.state.pageData.main} /> */}
        <Footer data={this.state.pageData.main} />
      </div>
    );
  }
}

export default App;
