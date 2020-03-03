import React from 'react';
import RecipeForm from './AddRecipes'

function MyRecipes() {
  return (
    <div className="Dashboard">
      <RecipeForm />
    </div>
  );
}

export default MyRecipes;

// const initialState = {
//   recipes: [
//     {title: '', source: ' ', ingredients: ' ', instructions: '', category: ' ' }
//   ]
// }

// export const recipesReducer;