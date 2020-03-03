import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";

const RecipeHolder = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 900px;
    margin-left: 7rem;
`;

const Title = styled.h2 `
    margin-left: 14rem;
`;

const Ingredients = styled.div `
    display: flex;
`;

const AddButton = styled.button `
    display:block;
    background:none;
    border:none;
    margin:0;
    padding:0;
    cursor: pointer;
    color: #4A3731;
    font-weight: bold;
    &:hover {
        color: #d97471;
    }
`;

const SubmitButton = styled.button `
    background-color: #BE6360;
    color: #4A3731;
    border-color: #9C8D84;
    font-weight: bold;
    margin: 0.5rem 0 0 0;
    padding: 0.5rem 2rem 0.5rem 2rem;
    &:hover {
        background-color: #d97471;
    }
`;

const RecipeForm = ({ values, errors, touched, status }) => {
    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        status && setRecipe(recipe => [...recipe, status]);
    }, [status]);
    return (
        <div>
            <Title>Add a new recipe:</Title>
            <Form>
                <RecipeHolder>
                    <label htmlFor="title">Title: 
                    <Field
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Title"
                        className="input"
                    />
                    {touched.title && errors.title && (
                        <p className="errors">{errors.title}</p>
                    )}
                    </label>
                    <label htmlFor="category">Category: 
                    <Field
                        id="category"
                        type="text"
                        name="category"
                        placeholder="Salad"
                        className="input"
                    />
                    </label>
                    <label htmlFor="source">Source: 
                    <Field
                        id="source"
                        type="text"
                        name="source"
                        placeholder="grandma"
                        className="input"
                    />
                    </label>
                    <h3>Ingredients:</h3>
                    <Ingredients>
                        <label htmlFor="name">Name: 
                        <Field
                            id="name"
                            type="text"
                            name="name"
                            placeholder="milk"
                            className="input"
                        />
                        </label>
                        <label htmlFor="quantity">Quantity: 
                        <Field
                            id="quantity"
                            type="text"
                            name="quantity"
                            placeholder="1"
                            className="input"
                        />
                        </label>
                        <label htmlFor="units">Units: 
                        <Field
                            id="units"
                            type="text"
                            name="units"
                            placeholder="cup"
                            className="input"
                        />
                        </label>
                        <AddButton>Add more ingredients</AddButton>
                    </Ingredients>
                    <h3>Steps:</h3>
                    <Field as="textarea" className="steps" type="text" name="steps" placeholder="Preheat the oven" />
                    <AddButton>Add another step</AddButton>
                    <SubmitButton type="submit" className="submitbutton">Submit</SubmitButton>
                </RecipeHolder>  
            </Form>
        </div>
        
    );
};

const FormikRecipeForm = withFormik({
    mapPropsToValues(props) {
        return {
            title: props.title || "",
            category: props.category || "",
            source: props.source || "",
            name: props.name || "",
            quantity: props.quantity || "",
            units: props.units || "",
            steps: props.steps
        };
    },
    validationSchema: Yup.object().shape({
        title: Yup.string().required("Add a recipe title"),
        category: Yup.string(),
        source: Yup.string(),
        name: Yup.string(),
        quantity: Yup.number("Should be a number"),
        units: Yup.string(),
        steps: Yup.string()
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        axios
          .post("https://reqres.in/api/users/", values)
          .then(res => {
            console.log("success", res);
            setStatus(res.data);
            resetForm();
          })
          .catch(err => console.log(err.response));
    }
})(RecipeForm);


export default FormikRecipeForm;
