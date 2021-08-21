import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SingleCard from "./SingleCard";

class Section extends Component {
  state = {
    // searchedMovies: false,
    movies: [],
    category: this.props.category,
  };

  componentDidUpdate = async (previousProps, previousState) => {
    try {
      if (
        this.props.category !== previousState.category &&
        this.props.category.length > 2
      ) {
        this.setState({
          category: this.props.category,
        });
        let response = await fetch(
          '${process.env.REACT_APP_BE_PROD_URL}media?s=' + this.state.category
        );
        let data = await response.json();
        let films = data.Search.filter((film) => film.Poster.length > 5);
        this.setState({
          movies: films,
          //   searchedMovies: true
        });
      }
    } catch (err) {
      console.log("cai no catch", err);
    }
  };

  componentDidMount = async () => {
    let response = await fetch(
      `${process.env.REACT_APP_BE_PROD_URL}media?s=` + this.props.category
    );
    let data = await response.json();
    this.setState({
      movies: data.Search,
    });
  };

  render() {
    return (
      <>
        <Row style={{ display: "flex" }} className="mb-3 pl-3">
          {this.state.movies
            .map((movie) => (
              <Col key={movie.imdbID} className="pr-0">
                {/* {this.state.searchedMovies && <SingleCard imgPoster={movie.album.cover_medium} />} */}
                <SingleCard imgPoster={movie.Poster} cardId={movie.imdbID} history={this.props.history} location={this.props.location} math={this.props.math} />
              </Col>
            ))
            .slice(0, 6)}
        </Row>
      </>
    );
  }
}

export default Section;
