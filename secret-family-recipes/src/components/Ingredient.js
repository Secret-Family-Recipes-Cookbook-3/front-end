import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
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

const Ingredient = () => {
    const blankRecipe = {name: "", quantity: 0, units: "" };
    const [ingredients, setIngredients] = useState([{
        name: "", 
        quantity: 0,
        units: ""
    },]);
    
    const addNewRow = () => {
        setIngredients([...ingredients, {...blankRecipe}]);
      };
    
    return (
        <div>
            { 
                ingredients.map((val, idx) => {
                    const nameID = `name-${idx}`;
                    const quantityID = `quantity-${idx}`;
                    const unitsID = `units-${idx}`;
                return (
                    <Ingredients key={`ingredient-${idx}`}>
                        <label htmlFor={nameID}>{`Ingredient #${idx + 1}`} 
                        <Field
                            id={nameID}
                            type="text"
                            name={nameID}
                            data-idx={idx}
                            placeholder="milk"
                            className="input"
                        />
                        </label>
                        <label htmlFor={quantityID}>Quantity: 
                        <Field
                            id={quantityID}
                            type="text"
                            name={quantityID}
                            placeholder="1"
                            className="input"
                            data-idx={idx}
                        />
                        </label>
                        <label htmlFor={unitsID}>Units: 
                        <Field
                            id={unitsID}
                            type="text"
                            name={unitsID}
                            placeholder="cup"
                            className="input"
                            data-idx={idx}
                        />
                        </label>
                    </Ingredients>
                )
            })
            }
        
            <AddButton onClick = {addNewRow}>Add ingredient</AddButton>
        </div>
    )
};       

export default Ingredient;