import './App.css';
import CarouselMovie from './component/CarouselMovie';
import { Row, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="text-white mt-4 mb-3 categories">Horror</Row>
       <CarouselMovie category="horror"/>
       <Row className="text-white mt-4 mb-3 categories">Drama</Row>
       <CarouselMovie category="drama"/>
       <Row className="text-white mt-4 mb-3 categories">Romance</Row>
       <CarouselMovie category="romance"/>
       <Row className="text-white mt-4 mb-3 categories">Comedy</Row>
       <CarouselMovie category="comedy"/>
       <Row className="text-white mt-4 mb-3 categories">Action</Row>
       <CarouselMovie category="action"/>
      </Container>
    </div>
  );
}

export default App;
