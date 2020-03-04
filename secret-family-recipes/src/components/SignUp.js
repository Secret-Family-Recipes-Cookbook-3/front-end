import React, {useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from "styled-components";

const SubmitButton = styled.button `
    background-color: #BE6360;
    color: #4A3731;
    border-color: #9C8D84;
    font-weight: bold;
    margin: 0.5rem 0 0 0;
    padding: 0.1rem 1.2rem 0.1rem 1.2rem;
    &:hover {
        background-color: #d97471;
    }
`;

const UserSignupForm = ({ values, errors, touched, status }) => {
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
                      <Field type='text' name='password' placeholder ='Password:' />
                    {touched.password && errors.password && (
                        <p className='errors'>{errors.password}</p>
                    )}
                    <SubmitButton type='submit' disabled={values.isSubmitting}>
                        {values.isSubmitting ? 'Submitting' : 'Submit'}
                    </SubmitButton>
                </Form>
            </div>
            <div className='Sign-form'>
                <h3>Welcome, {users.name}.</h3>
                { <dl key={users.id}>
                    <dt>Name: {users.name}</dt>
                    </dl>
                    }
            </div>
        </div>
    );
};

export default withFormik({
    mapPropsToValues: props => ({
        name: '',
        password: ''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is Required'),
        password: Yup.string().required('Password is Required')
    }),
    handleSubmit: (values, { resetForm, setStatus }) => {
        const sendValues = JSON.stringify(values)     
        axios.post('https://secret-family-recipes-cookbook.herokuapp.com/api/auth/register', sendValues)
        .then(response => {
            console.log(response);
            resetForm();
            setStatus(response);
        })
        .catch(err => console.log(err.response));
    }
})(UserSignupForm);