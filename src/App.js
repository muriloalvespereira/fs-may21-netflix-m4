import "./App.css";
import CarouselMovie from "./component/CarouselMovie";
import { Row, Container } from "react-bootstrap";
import CustomFooter from "./component/CustomFooter";
import CustomNavbar from "./component/CustomNavbar";
import SectionTitle from "./component/SectionTitle";
import { Component } from "react";

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
        <SectionTitle />
        <Container fluid>
          <Row className="text-white mt-4 mb-2 categories">
            <h5>Searched</h5>
          </Row>
          <CarouselMovie category={this.state.search} />

          <Row className="text-white mt-4 mb-2 categories">
            <h5>Horror</h5>
          </Row>
          <CarouselMovie category="horror" />
          <Row className="text-white mt-4 mb-2 categories">
            <h5>Drama</h5>
          </Row>
          <CarouselMovie category="drama" />
          <Row className="text-white mt-4 mb-2 categories">
            <h5>Romance</h5>
          </Row>
          <CarouselMovie category="romance" />
          <Row className="text-white mt-4 mb-2 categories">
            <h5>Comedy</h5>
          </Row>
          <CarouselMovie category="comedy" />
          <Row className="text-white mt-4 mb-2 categories">
            <h5>Action</h5>
          </Row>
          <CarouselMovie category="action" />
        </Container>
        <CustomFooter />
      </div>
    );
  }
}

export default App;
