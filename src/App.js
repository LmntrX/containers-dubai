import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Gallery, FourNaughtFour } from "screens";
import Header from "components/Header";
import Footer from "components/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Header />
            <Switch>
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/" component={Home} />
              <Route component={FourNaughtFour} />
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
