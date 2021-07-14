import "./App.css";
import CarouselMovie from "./component/CarouselMovie";
import { Row, Container } from "react-bootstrap";
import CustomFooter from "./component/CustomFooter";
import CustomNavbar from "./component/CustomNavbar";
import SectionTitle from "./component/SectionTitle";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";

class App extends Component {
  state = {
    search: "spider",
  };

  searchMovies = (message) => {
    console.log(message);
    this.setState({
      search: message,
    });
  };

  render() {
    return (
      <div className="App">
          <CustomNavbar searchMovies={this.searchMovies} />
        <Router>
          <Route path="/" exact render={(routerProps) => {
          <Home />
          }} />
        </Router>
          <CustomFooter />
      </div>
    );
  }
}

export default App;
