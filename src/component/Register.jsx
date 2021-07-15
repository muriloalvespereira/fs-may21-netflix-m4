import { Formik, Field, Form, ErrorMessage } from "formik";
import Schema from "./Schema";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Result from "./Result";

const Register = () => {
  const [data, setData] = useState(false);

  function onSubmit(values, actions) {
    setData(values)
  }

  return (
    <Formik
      validationSchema={Schema}
      onSubmit={onSubmit}
      validateOnMount
      initialValues={{
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
    >
      {(props) => (
        <Container>
          <Row className="justify-content-center mt-3"  >
            <Col className="text-center d-flex justify-content-center" md={8}>
              <Form className="mt-5 div-form w-100">
                {console.log(props)}
                <div className="errors mt-3">
                  <label>Nome</label>
                  <Field name="name" className="form-control" type="text" />
                  <ErrorMessage name="name" />
                </div>
                <div className="errors mt-3">
                  <label>Surname</label>
                  <Field name="surname" className="form-control" type="text" />
                  <ErrorMessage name="surname" />
                </div>
                <div className="errors mt-3">
                  <label>Email</label>
                  <Field name="email" className="form-control" type="email" />
                  <ErrorMessage name="email" />
                </div>
                <div className="errors mt-3">
                  <label>Password</label>
                  <Field
                    name="password"
                    className="form-control"
                    type="password"
                  />
                  <ErrorMessage name="password" />
                </div>
                <div className="errors mb-4 mt-3">
                  <label>Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    className="form-control"
                    type="password"
                  />
                  <ErrorMessage name="confirmPassword" />
                </div>
                <button
                  className="btn btn-primary mb-3"
                  disabled={!props.isValid}
                  type="submit"
                >
                  Enviar
                </button>
                <button
                  className="btn btn-primary mb-3 ml-3"
                  type="button"
                  onClick={() => setData(false)}
                >
                  Reset
                </button>
              </Form>
            </Col>
            {
            data &&
            <Result data={data}/>
            }
          </Row>
        </Container>
      )}
    </Formik>
  );
};

export default Register;
