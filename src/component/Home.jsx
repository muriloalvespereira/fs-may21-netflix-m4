import SectionTitle from "./SectionTitle";
import { Container, Row } from "react-bootstrap";
import CarouselMovie from "./CarouselMovie";

const Home = (props) => {
  return (
      <>
      {console.log(props)}
      <SectionTitle />
      <Container fluid>
        <Row className="text-white mt-4 mb-2 categories">
          <h5>Searched</h5>
        </Row>
        <CarouselMovie category={props.category} history={props.history} location={props.location} math={props.math} />

        <Row className="text-white mt-4 mb-2 categories">
          <h5>Horror</h5>
        </Row>
        <CarouselMovie category="horror" history={props.history} location={props.location} math={props.math} />
        <Row className="text-white mt-4 mb-2 categories">
          <h5>Drama</h5>
        </Row>
        <CarouselMovie category="drama" history={props.history} location={props.location} math={props.math} />
        <Row className="text-white mt-4 mb-2 categories">
          <h5>Romance</h5>
        </Row>
        <CarouselMovie category="romance" history={props.history} location={props.location} math={props.math} />
        <Row className="text-white mt-4 mb-2 categories">
          <h5>Comedy</h5>
        </Row>
        <CarouselMovie category="comedy" history={props.history} location={props.location} math={props.math} />
        <Row className="text-white mt-4 mb-2 categories">
          <h5>Action</h5>
        </Row>
        <CarouselMovie category="action" history={props.history} location={props.location} math={props.math} />
      </Container>
    </>
  );
};

export default Home
