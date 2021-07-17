import { Formik, Field, Form, ErrorMessage } from "formik";
import Schema from "./Schema";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Result from "./Result";
import { BsEyeSlashFill } from "react-icons/bs";

const Register = () => {
  const [data, setData] = useState(false);
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setConfirmShowPassword] = useState(false)
  const [checkMarkName, setCheckMarkName] = useState(false)
  const [checkMarkSurname, setCheckMarkSurname] = useState(false)
  const [checkMarkEmail, setCheckMarkEmail] = useState(false)
  const [checkMarkPass, setCheckMarkPass] = useState(false)
  const [checkMarkConfirmPass, setCheckMarkConfirmPass] = useState(false)


  const hidePassword = () => {
      setShowPassword(!showPassword)
  }

  const hideConfirmPassword = () => {
    setConfirmShowPassword(!showConfirmPassword)
}

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
                  <Field onBlur={() => {
                      if(!props.errors.name)(
                          setCheckMarkName(true)
                      )
                      }} name="name" className={checkMarkName ? "form-control form-control-green" : "form-control"} type="text" />
                  <div><ErrorMessage name="name" /></div>
                </div>
                <div className="errors mt-3">
                  <label>Surname</label>
                  <Field onBlur={() => {
                      if(!props.errors.surname)(
                          setCheckMarkSurname(true)
                      )
                      }} name="surname" className={checkMarkSurname ? "form-control form-control-green" : "form-control"} type="text" />
                  <div><ErrorMessage name="surname" /></div>
                </div>
                <div className="errors mt-3">
                  <label>Email</label>
                  <Field onBlur={() => {
                      if(!props.errors.email)(
                          setCheckMarkEmail(true)
                      )
                      }} name="email" className={checkMarkEmail ? "form-control form-control-green" : "form-control"} type="email" />
                  <div><ErrorMessage name="email" /></div>
                </div>
                <div className="errors mt-3 position-relative">
                  <label>Password</label>
                  <Field onBlur={() => {
                      if(!props.errors.password)(
                          setCheckMarkPass(true)
                      )
                      }}
                    name="password"
                    className={checkMarkPass ? "form-control form-control-green" : "form-control"}
                    type={showPassword ? 'text' : 'password'}
                  ></Field>
                  <span className="position-relative eyes text-white"><BsEyeSlashFill onClick={() => hidePassword()} /></span>
                  <div className="position-relative error-msg"><ErrorMessage name="password" /></div>
                </div>
                <div className="errors mb-4 position-relative">
                  <label>Confirm Password</label>
                  <Field onBlur={() => {
                      if(!props.errors.confirmPassword)(
                          setCheckMarkConfirmPass(true)
                      )
                      }}
                    name="confirmPassword"
                    className={checkMarkConfirmPass ? "form-control form-control-green" : "form-control"}
                    type={showConfirmPassword ? 'text' : 'password'}
                  />
                  <span className="position-relative eyesConfirm text-white"><BsEyeSlashFill onClick={() => hideConfirmPassword()} /></span>
                  <div className="position-relative error-msg"><ErrorMessage name="confirmPassword" /></div>
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
