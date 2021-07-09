import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SingleCard from "./SingleCard";

class Section extends Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=a6236011&s=" + this.props.category
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
                <SingleCard imgPoster={movie.Poster} />
              </Col>
            ))
            .slice(0, 6)}
        </Row>
      </>
    );
  }
}

export default Section;
