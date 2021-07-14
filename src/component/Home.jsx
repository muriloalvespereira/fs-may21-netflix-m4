import SectionTitle from "./SectionTitle";
import { Container, Row } from "react-bootstrap";
import CarouselMovie from "./CarouselMovie";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home
