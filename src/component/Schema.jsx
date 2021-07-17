import * as Yup from "yup";

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const specialRegex = /(?=.*[@!#$%^+&*()/\\])/;

export default Yup.object().shape({
  name: Yup.string()
    .min(2, "Must be at least 3 characters")
    .required("Name is required"),
  surname: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Surname is required"),
  email: Yup.string()
    .email("Email should be valid and contain @")
    .required("Email is required"),
  password: Yup.string()
    .matches(lowercaseRegex, "Must be at least 1 lowercase")
    .matches(uppercaseRegex, "Must be at least 1 uppercase")
    .matches(numericRegex, "Must be at least 1 number")
    .matches(numericRegex, "Must be at least 1 number")
    .matches(specialRegex, "Must be at least 1 special character")
    .min(8)
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm your password"),
});
