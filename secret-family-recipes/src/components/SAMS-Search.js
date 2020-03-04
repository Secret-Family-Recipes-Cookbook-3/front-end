// import React, { useState, useEffect } from "react";
// import axios from 'axios';

// export default function Recipes() {
//   const [query, setQuery] = useState("");

// useEffect(() => {
//   axios
//   .get(`https://secret-family-recipes-cookbook.herokuapp.com/api/recipes`)
//   .then(response => {
//     console.log("recipes", response);
//     const recipesList = response.filter(rec =>
//       rec.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setRecipes(recipesList);
//   })
//   .catch(error => {
//     console.log("error", error);
//   });
// }, [query]);

// const handleInputChange = event => {
// setQuery(event.target.value);
// };
//   return (
//     <div>
//     <section className="search-form">
//       <label>
//         <span>Search Recipes: </span>
//         <input 
//         type='text' 
//         placeholder='Enter Recipe' 
//         onChange={inputHandler} />
//         </label>
//      <div>
// {props.recipes.map(item => (
//     <RecipeHolder key={item.id} >
//       <div>

//           <h1>{item.title}</h1>

//       </div>
      
//     </RecipeHolder>
//      ))}
//     </div>
//   );
// }
