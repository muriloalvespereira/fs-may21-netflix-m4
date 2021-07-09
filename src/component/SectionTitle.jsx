import { Component } from "react";
import { Row, Container, Dropdown, DropdownButton } from "react-bootstrap";
import { FaStream } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";

class SectionTitle extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-between">
          <div className="d-flex">
              <h2 className="text-white mt-3 section-title">TV Shows</h2>
              <DropdownButton
                id="dropdown-basic-button"
                variant="outline-light"
                title="Genres"
                className="mt-4 ml-5 p-0"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
          </div>
          <div className="pr-0 d-flex mr-3 mt-4">
            <div className="border-icons">
              <FaStream className="div-icons" />
            </div>
            <div className="border-icons">
              <BsFillGridFill className="div-icons" />
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default SectionTitle;
