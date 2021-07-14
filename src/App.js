import "./App.css";
import CustomFooter from "./component/CustomFooter";
import CustomNavbar from "./component/CustomNavbar";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import ShowDetail from "./component/ShowDetail";

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
        <Router>
          <CustomNavbar searchMovies={this.searchMovies} />
          <Route
            path="/"
            exact
            render={(routerProps) => (
              <Home category={this.state.search} {...routerProps} />
            )}
          />
          <Route path="/details/:id" exact component={ShowDetail} />
          <CustomFooter />
        </Router>
      </div>
    );
  }
}

export default App;
