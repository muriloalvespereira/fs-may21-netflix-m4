import { Component } from "react";
import { Col } from "react-bootstrap";

class Result extends Component {

    componentWillUnmount = () => {
        console.log("Bye Bye")
    }

  render() {
    return (
      <>
          <Col md={4} className="mt-5 text-left pl-5">
            <p>
              Name: <span className="span-results">{this.props.data.name}</span>
            </p>
            <p>
              Surname: <span className="span-results">{this.props.data.surname}</span>
            </p>
            <p>
              Email: <span className="span-results">{this.props.data.email}</span>
            </p>
            <p>
              Password: <span className="span-results">{this.props.data.password}</span>
            </p>
          </Col>
      </>

    );
  }
}

export default Result;
