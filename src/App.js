import './App.css';
import CarouselMovie from './component/CarouselMovie';
import { Row, Container } from 'react-bootstrap';
import CustomNavbar from './component/CustomNavbar';
import SectionTitle from './component/SectionTitle';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <SectionTitle />
      <Container fluid>
        <Row className="text-white mt-4 mb-2 categories"><h5>Horror</h5></Row>
       <CarouselMovie category="horror"/>
       <Row className="text-white mt-4 mb-2 categories"><h5>Drama</h5></Row>
       <CarouselMovie category="drama"/>
       <Row className="text-white mt-4 mb-2 categories"><h5>Romance</h5></Row>
       <CarouselMovie category="romance"/>
       <Row className="text-white mt-4 mb-2 categories"><h5>Comedy</h5></Row>
       <CarouselMovie category="comedy"/>
       <Row className="text-white mt-4 mb-2 categories"><h5>Action</h5></Row>
       <CarouselMovie category="action"/>
      </Container>
    </div>
  );
}

export default App;
