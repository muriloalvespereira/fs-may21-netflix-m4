import { Component } from "react";
import { FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

class SearchBar extends Component {

    searchMovies = (e) => {
        this.props.searchMovies(e.target.value)
    }
  render() {
    return (
       
            <div className="position-relative">
                <FormControl type="text" placeholder="Titles, people, genres" className="pl-4 mr-sm-2" onKeyUp={(e) => this.searchMovies(e)}/>
                <FaSearch className="mr-3 nav-icons search-nav search-bar" />
            </div>
       
    );
  }
}

export default SearchBar;
