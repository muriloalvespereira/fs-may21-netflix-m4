import { Component } from "react";
import { Carousel } from "react-bootstrap";
import Section from "./Section";
import './App.css';

class CustomCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
         <Section category={this.props.category}/>

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
        <Section category={this.props.category}/>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Section category={this.props.category}/>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CustomCarousel;
