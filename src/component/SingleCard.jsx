import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleCard extends Component {
  render() {
    return (

          <Card style={{border: "none"}} className="cardEffect">
            <Card.Img variant="top" src={this.props.imgPoster} style={{height: "142px", width: "270px"}} className="img-fluid cover-img"/>
          </Card>
    );
  }
}

export default SingleCard;
