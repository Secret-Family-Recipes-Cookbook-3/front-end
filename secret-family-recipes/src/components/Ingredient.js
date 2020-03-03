import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

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

class Ingredient extends React.Component {

    state = {
        recipesList: [{
            name: "", 
            quantity: 0,
            units: ""
        }]
    }

    handleChange = (e, index) => {
        this.state.recipesList[index] = e.target.value;
        this.setState({ [e.target.name]: e.target.value })
    }

    addNewRow = (e) => {
        this.setState((prevState) => ({
            recipesList: [...prevState.recipesList, { name: "", quantity: 0, units: "" }],
        }));
    }
    
    render() {
        let { recipesList } = this.state;
        return (
            <div>
            {
            this.state.recipesList.map((ingredient, index) => {
                return (
                    
                    <Ingredients key={index}>
                        <label htmlFor="name">Name: 
                        <Field
                            //onChange = {(e)=>this.handleChange(e)}
                            id="name"
                            type="text"
                            name="name"
                            placeholder="milk"
                            className="input"
                            //value={ingredient.name}
                        />
                        </label>
                        <label htmlFor="quantity">Quantity: 
                        <Field
                            id="quantity"
                            type="text"
                            name="quantity"
                            placeholder="1"
                            className="input"
                            //value={ingredient.quantity}
                        />
                        </label>
                        <label htmlFor="units">Units: 
                        <Field
                            id="units"
                            type="text"
                            name="units"
                            placeholder="cup"
                            className="input"
                            //value={ingredient.units}
                        />
                        </label>
                    </Ingredients>
                )
            })
        }
        
            <AddButton onClick = {this.addNewRow}>Add ingredient</AddButton>
            </div>
        )
    };
};       

export default Ingredient;