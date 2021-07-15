import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Register = () => {
  const [name, setName] = useState(false);
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const validation = (e) => {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    regex.test(String(e)) && handleInputs("password", e);
  };

  let inputs = {};
  const handleInputs = (key, e) => {
    inputs = { ...inputs, [key]: e };
    console.log(inputs);
    console.log(inputs.name.length > 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    inputs.name.length > 1 && setName(true);
    inputs.surname.length > 2 && setSurname(true);
    inputs.email.includes("@") && setEmail(true);
    inputs.password.length > 8 && setPassword(true);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col className="text-center d-flex justify-content-center">
          <Form className="form-border text-center" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label className="mt-4">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) =>
                  e.target.value.length > 1 &&
                  handleInputs("name", e.target.value)
                }
                required
              />
              {name && <p className="validation">Looks good!</p>}
            </Form.Group>
            <Form.Group controlId="formBasicSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter surname"
                onChange={(e) =>
                  e.target.value.length > 2 &&
                  handleInputs("surname", e.target.value)
                }
                required
              />
              {surname && <p className="validation">Looks good!</p>}
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) =>
                  e.target.value.includes("@") &&
                  handleInputs("email", e.target.value)
                }
                required
              />
              {email && <p className="validation">Looks good!</p>}
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => validation(e.target.value)}
                required
              />
              {password && <p className="validation">Looks good!</p>}
            </Form.Group>
            <Button className="mb-4" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
