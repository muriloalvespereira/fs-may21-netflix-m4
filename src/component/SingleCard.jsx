import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleCard extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
    );
  }
}

export default SingleCard;
