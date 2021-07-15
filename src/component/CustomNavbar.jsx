import { Component } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { FaSearch, FaBell, FaSortDown } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { withRouter, Link } from "react-router-dom";

class CustomNavbar extends Component {
  state = {
    isSearch: false,
    hideSearch: true,
  };

  displaySearch = () => {
    this.setState({
      isSearch: true,
      hideSearch: false,
    });
  };

  searchMovies = (message) => {
    this.props.searchMovies(message)
   }

  render() {
    return (
        <Navbar variant="dark" className="sticky-top bg-color">
          <Navbar.Brand href="#home">
            <img
              src="./assets/netflix_logo.png"
              className="img-logo"
              alt=""
            ></img>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Nav.Link href="#features">TV Shows</Nav.Link>
            <Nav.Link href="#pricing">Movies</Nav.Link>
            <Nav.Link href="#added">Recently Added</Nav.Link>
            <Nav.Link href="#list">My List</Nav.Link>
            <Link to="/register" className="nav-link">Register</Link>
          </Nav>
          <Form inline>
            {this.state.isSearch && <SearchBar searchMovies={this.searchMovies}/>}
            {this.state.hideSearch && (
              <FaSearch
                className="mr-3 nav-icons search-nav"
                onClick={this.displaySearch}
              />
            )}
            <p className="pt-3 mr-3 text-white">KIDS</p>
            <FaBell className="mr-3 nav-icons" />
            <img src="./assets/kidssecond.png" className="mr-1" alt=""></img>
            <FaSortDown className="nav-icons" />
          </Form>
        </Navbar>
    );
  }
}

export default withRouter(CustomNavbar);
