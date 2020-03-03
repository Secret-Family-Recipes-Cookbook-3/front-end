import React, {useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const FormForUser = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState({});
    useEffect(() => {
        status && setUsers(status);
    }, [status]);

    return (
        <div className='container-signup'>
            <div className = 'signup'>
                <Form>
                    <Field type='text' name='name' placeholder ='Name:' />
                    {touched.name && errors.name && (
                        <p className='errors'>{errors.name}</p>
                    )}
                      <Field type='text' name='email' placeholder ='Email:' />
                    {touched.email && errors.email && (
                        <p className='errors'>{errors.email}</p>
                    )}
                      <Field type='text' name='password' placeholder ='Password:' />
                    {touched.password && errors.password && (
                        <p className='errors'>{errors.password}</p>
                    )}
                    <button type='submit' disabled={values.isSubmitting}>
                        {values.isSubmitting ? 'Submitting' : 'Submit'}
                    </button>
                </Form>
            </div>
            <div className='Sign-form'>
                <h3>Welcome, {users.name}.</h3>
                { <ul key={users.id}>
                    <li>Name: {users.name}</li>
                    <li>Email: {users.email}</li>
                    </ul>
                    }
            </div>
        </div>
    );
};

export default withFormik({
    mapPropsToValues: props => ({
        name: '',
        email: '',
        password: ''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is Required'),
        email: Yup.string().required('Email is Required.'),
        password: Yup.string().required('Password is Required')
    }),
    handleSubmit: (values, { resetForm, setStatus }) => {
        axios.post('https://reqres.in/api/users/', values)
        .then(response => {
            resetForm();
            setStatus(response.data);
        })
        .catch(err => console.log(err.response));
    }
})(FormForUser);