// import React, {useState, useEffect } from 'react';
// import { withFormik, Form, Field } from 'formik';
// import { Link } from 'react-router-dom';

// import * as Yup from 'yup';
// import axios from 'axios';
// import styled from "styled-components";

// const SubmitButton = styled.button `
//     background-color: #BE6360;
//     color: #4A3731;
//     border-color: #9C8D84;
//     font-weight: bold;
//     margin: 0.5rem 0 0 0;
//     padding: 0.1rem 1.2rem 0.1rem 1.2rem;
//     &:hover {
//         background-color: #d97471;
//     }
// `;

// const UserLogin = ({ values, errors, touched, status }) => {
//     const [Users, setUsers] = useState({});
//     useEffect(() => {
//         status && setUsers(status);
//     }, [status]);

//     return (
//         <div className='container-signup'>
//             <div className = 'signup'>
//                 <Form>
//                       <Field type='text' name='email' placeholder ='Email:' />
//                     {touched.email && errors.email && (
//                         <p className='errors'>{errors.email}</p>
//                     )}
//                       <Field type='text' name='password' placeholder ='Password:' />
//                     {touched.password && errors.password && (
//                         <p className='errors'>{errors.password}</p>
//                     )}
//                     <SubmitButton type='submit' disabled={values.isSubmitting}>
//                         {values.isSubmitting ? 'Submitting' : 'Submit'}
//                     </SubmitButton>
//                 </Form>
//             </div>
//             <Link to='/'>
//                 <h4>dont have an account?</h4>
//             </Link>
//         </div>
//     );
// };

// export default withFormik({
//     mapPropsToValues: props => ({
//         email: '',
//         password: ''
//     }),
//     validationSchema: Yup.object().shape({
//         email: Yup.string().required('Email is Required.'),
//         password: Yup.string().required('Password is Required')
//     }),
//     handleSubmit: (values, { resetForm, setStatus }) => {
//         axios.post('https://reqres.in/api/https://family-recipes-backend-proj.herokuapp.com/', values)
//         .then(response => {
//             console.log(response);
//             resetForm();
//             setStatus(response.data);
//         })
//         .catch(err => console.log(err.response));
//     }
// })(UserLogin);
