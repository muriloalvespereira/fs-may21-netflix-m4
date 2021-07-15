import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleCard extends Component {
  render() {
    return (

          <Card onClick={() => this.props.history.push('/details/' + this.props.cardId)} style={{border: "none"}} className="cardEffect">
            <Card.Img variant="top" src={this.props.imgPoster} style={{height: "132px", width: "330px"}} className="img-fluid cover-img"/>
          </Card>
    );
  }
}

export default SingleCard;
