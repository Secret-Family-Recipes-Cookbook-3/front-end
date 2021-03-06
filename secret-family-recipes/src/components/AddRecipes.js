import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Card2 from "../images/card2.jpg";



const RecipeHolder = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 900px;
    margin-left: 3rem;
`;

const RecipeCard = styled.div `
    width: 60%;
    box-shadow: 0 6px 15px rgba(170, 170, 170, 0.3), 0 15px 12px rgba(170, 170, 170, 0.22);
    background-image: url(${Card2});
    margin-left: 2rem;
    padding-top: 1rem;
    margin-top: 2rem;
    border-radius: 10px;
    @media(max-width:1400px) {
        width: 80%;
    }
    @media(max-width:1000px) {
        width: 700px;
    }
    @media(max-width:800px) {
        width: 500px;
    }
    @media(max-width:550px) {
        width: 300px;
    }
    @media(max-width:550px) {
        width: 90%;
        margin-left: 3%;
    }
`;

const Title = styled.h2 `
    margin-left: 3rem;
    margin-left: 2rem;
`;

const Ingredients = styled.div `
    display: flex;
    @media(max-width:800px) {
        flex-direction: column;
    }
`;

const AddButton = styled.button `
    display:block;
    background-color: #BE6360;
    border-color: #9C8D84;
    padding: 0.25rem 1rem 0.25rem 1rem;
    cursor: pointer;
    color: #4A3731;
    font-weight: bold;
    &:hover {
        background-color: #d97471;
    }
`;

const SubmitButton = styled.button `
    background-color: #BE6360;
    color: #4A3731;
    border-color: #9C8D84;
    font-weight: bold;
    cursor:pointer;
    margin: 1rem 0 3rem 0;
    padding: 0.5rem 2rem 0.5rem 2rem;
    &:hover {
        background-color: #d97471;
    }
`;


const AddRecipes = () => {

    const blankRecipe = {name: "", quantity: 0, units: "" };
    const [ingredients, setIngredients] = useState([{
        name: "", 
        quantity: 0,
        units: ""
    },]);

    const { register, handleSubmit, watch, errors, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    
    const addNewRow = () => {
        setIngredients([...ingredients, {...blankRecipe}]);
      };

    return (
        <div>
        <RecipeCard>
            <Title>Add a new recipe:</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <RecipeHolder>
                    <label htmlFor="title">Title:&#8201;&#8201;&#8201;&#8201;&#8201;&#8201;&#8201;&#8201;&#8201;
                    <input
                        ref={register({ required: true })}
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Title"
                        className="input"
                    />
                    {errors.title && <span className="error">This field is required</span>}
                    </label>
                    <label htmlFor="category">Category: 
                    <input
                        ref={register}
                        id="category"
                        type="text"
                        name="category"
                        placeholder="Salad"
                        className="input"
                    />
                    </label>
                    <label htmlFor="source">Source:&#8201;&#8201;&#8201;&#8201; 
                    <input
                        ref={register}
                        id="source"
                        type="text"
                        name="source"
                        placeholder="grandma"
                        className="input"
                    />
                    </label>
                    <h3>Ingredients:</h3>
                    { 
                        ingredients.map((val, idx) => {
                            const nameID = `name-${idx}`;
                            const quantityID = `quantity-${idx}`;
                            const unitsID = `units-${idx}`;
                        return (
                            <Ingredients key={`ingredient-${idx}`}>
                                <label htmlFor={nameID}>{`Ingredient #${idx + 1}`} 
                                <input
                                    ref={register}
                                    id={nameID}
                                    type="text"
                                    name={nameID}
                                    data-idx={idx}
                                    placeholder="milk"
                                    className="input"
                                />
                                </label>
                                <label htmlFor={quantityID}>Quantity: 
                                <input
                                    ref={register}
                                    id={quantityID}
                                    type="text"
                                    name={quantityID}
                                    placeholder="1"
                                    className="input"
                                    data-idx={idx}
                                />
                                </label>
                                <label htmlFor={unitsID}>Units: 
                                <input
                                    ref={register}
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
                    <h3>Steps:</h3>
                    <textarea ref={register}  className="steps" type="text" name="steps" placeholder="Preheat the oven" />
                    <SubmitButton onClick={reset} type="submit" className="submitbutton">Submit</SubmitButton>
                </RecipeHolder>  
            </form>
        </RecipeCard>
        </div>
    );
};


const mapStateToProps = state => {
    return{
        recipes: state.recipes
    }

}




export default connect(
    mapStateToProps,
    {}
)(AddRecipes);

