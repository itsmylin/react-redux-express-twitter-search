import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import TweetResult from "./components/search/TweetResult";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/search" component={TweetResult} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
