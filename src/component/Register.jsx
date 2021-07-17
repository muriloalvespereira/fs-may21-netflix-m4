import { Formik, Field, Form } from "formik";
import Schema from "./Schema";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Result from "./Result";
import { BsEyeSlashFill } from "react-icons/bs";

const Register = () => {
  const [data, setData] = useState(false);
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setConfirmShowPassword] = useState(false)
  const [checkMarkName, setCheckMarkName] = useState(null)
  const [checkMarkSurname, setCheckMarkSurname] = useState(null)
  const [checkMarkEmail, setCheckMarkEmail] = useState(null)
  const [checkMarkPass, setCheckMarkPass] = useState(null)
  const [checkMarkConfirmPass, setCheckMarkConfirmPass] = useState(null)


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
                      else(
                        setCheckMarkName(false)
                      )
                      }} name="name" className={checkMarkName ? "form-control form-control-green" : "form-control"} type="text" />
                  { checkMarkName === false && <div>{props.errors.name}</div>}
                </div>
                <div className="errors mt-3">
                  <label>Surname</label>
                  <Field onBlur={() => {
                      if(!props.errors.surname)(
                          setCheckMarkSurname(true)
                      ) 
                      else(
                        setCheckMarkSurname(false)
                      )
                      }} name="surname" className={checkMarkSurname ? "form-control form-control-green" : "form-control"} type="text" />
                  { checkMarkSurname === false && <div>{props.errors.surname}</div>}
                </div>
                <div className="errors mt-3">
                  <label>Email</label>
                  <Field onBlur={() => {
                      if(!props.errors.email)(
                          setCheckMarkEmail(true)
                      )
                      else(
                        setCheckMarkEmail(false)
                      )
                      }} name="email" className={checkMarkEmail ? "form-control form-control-green" : "form-control"} type="email" />
                  { checkMarkEmail === false && <div>{props.errors.email}</div>}
                </div>
                <div className="errors mt-3 position-relative">
                  <label>Password</label>
                  <Field onBlur={() => {
                      if(!props.errors.password)(
                          setCheckMarkPass(true)
                      )
                      else(
                        setCheckMarkPass(false)
                      )
                      }}
                    name="password"
                    className={checkMarkPass ? "form-control form-control-green" : "form-control"}
                    type={showPassword ? 'text' : 'password'}
                  ></Field>
                  <span className="position-relative eyes text-white"><BsEyeSlashFill onClick={() => hidePassword()} /></span>
                  { checkMarkPass === false && <div className="position-relative error-msg">{props.errors.password}</div>}
                </div>
                <div className="errors mb-4 position-relative">
                  <label>Confirm Password</label>
                  <Field onBlur={() => {
                      if(!props.errors.confirmPassword)(
                          setCheckMarkConfirmPass(true)
                      )
                      else(
                        setCheckMarkConfirmPass(false)
                      )
                      }}
                    name="confirmPassword"
                    className={checkMarkConfirmPass ? "form-control form-control-green" : "form-control"}
                    type={showConfirmPassword ? 'text' : 'password'}
                  />
                  <span className="position-relative eyesConfirm text-white"><BsEyeSlashFill onClick={() => hideConfirmPassword()} /></span>
                  { checkMarkConfirmPass === false && <div className="position-relative error-msg">{props.errors.confirmPassword}</div>}
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
