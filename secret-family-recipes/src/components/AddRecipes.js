import React, { useState } from "react";
import { RecipeHolder2, RecipeCard, Title, Ingredients, AddButton, SubmitButton } from "../styled/StyledComponents";
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipeActions';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddRecipes = ({ addRecipe }) => {

    const blankRecipe = {name: "", quantity: 0, units: "" };
    const [ingredients, setIngredients] = useState([{
        name: "", 
        quantity: 0,
        units: ""
    },]);

    const { register, handleSubmit, watch, errors, reset } = useForm();

    const onSubmit = value => {
        console.log(value)
        addRecipe(value)
    }
    
    const addNewRow = () => {
        setIngredients([...ingredients, {...blankRecipe}]);
      };

    return (
        <div>
        <RecipeCard>
            <Title>Add a new recipe:</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <RecipeHolder2>
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
                </RecipeHolder2>  
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
    {addRecipe}
)(AddRecipes);

