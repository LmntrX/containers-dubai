import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomeScreen, GalleryScreen, FourNaughtFourScreen } from "screens";
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
              <Route exact path="/gallery" component={GalleryScreen} />
              <Route exact path="/" component={HomeScreen} />
              <Route component={FourNaughtFourScreen} />
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
