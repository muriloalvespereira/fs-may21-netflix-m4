import './App.css';
import Carousel from './component/Carousel';

function App() {
  return (
    <div className="App">
     <Carousel category="horror"/>
     <Carousel category="drama"/>
     <Carousel category="romance"/>
    </div>
  );
}

export default App;
