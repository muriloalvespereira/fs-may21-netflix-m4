import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().min(2, 'Must be at least 3 characters').required('Name is required'),
  surname: Yup.string().min(3, 'Must be at least 3 characters').required('Surname is required'),
  email: Yup.string().email('Email should contain @').required('Email is required'),
  password: Yup.string().min(8).required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm your password'),
});


