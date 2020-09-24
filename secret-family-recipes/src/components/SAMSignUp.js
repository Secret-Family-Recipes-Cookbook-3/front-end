// import React, {useState, useEffect } from 'react';
// import { withFormik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// // import { axiosWithAuth } from '../utils/axiosWithAuth'
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

// const UserSignupForm = ({ values, errors, touched, status }) => {
    // const [users, setUsers] = useState({});
    // useEffect(() => {
    //     status && setUsers(status);
    // }, [status]);

//     return (
//         <div className='container-signup'>
//             <div className = 'signup'>
//                 <Form>
//                     <Field type='text' name='username' placeholder ='Username:' />
//                     {touched.username && errors.username && (
//                         <p className='errors'>{errors.username}</p>
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
//             <div className='Sign-form'>
//                 <h3>Welcome, {users.username}.</h3>
//                 { <dl key={users.id}>
//                     <dt>Name: {users.username}</dt>
//                     </dl>
//                     }
//             </div>
//         </div>
//     );
// };

// export default withFormik({
//     mapPropsToValues: props => ({
//         username: '',
//         password: ''
//     }),
//     validationSchema: Yup.object().shape({
//         username: Yup.string().required('Name is Required'),
//         password: Yup.string().required('Password is Required')
//     }),
//     handleSubmit: (values, { resetForm, setStatus }) => {
//         axios.post('https://reqres.in/api/https://family-recipes-backend-proj.herokuapp.com/', values)
//         .then(response => {
//             console.log('value', values);
//             resetForm();
//             setStatus(response.data);
//         })
//         .catch(err => console.log(err.response));
//     }
// })(UserSignupForm);