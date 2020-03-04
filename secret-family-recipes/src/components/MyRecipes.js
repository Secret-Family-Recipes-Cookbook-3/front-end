import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import RecipeForm from './AddRecipes';
import Navigation from './Navigation';

const RecipeHolder = styled.div `
  display: flex;
  align-items: center;
  margin: 3%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

export default function MyRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`https://secret-family-recipes-cookbook.herokuapp.com/api/recipes`)
      .then(response => {
        console.log("recipes", response);
        const recipesList = response.filter(rec =>
          rec.name.toLowerCase().includes(query.toLowerCase())
        );
        setRecipes(recipesList);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="recipe-list">
      <Navigation />
      <form className="search">
        <label htmlFor="search">Find recipe:&#8201;

        <input
          id="search"
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by recipe"
          autoComplete="off"
        />
        </label>
      </form>
      <div>
        {recipes.map(item => (
          <RecipeHolder key={item.id} >
            <div>
                <p>Recipe Cards Here</p>
            </div>
          </RecipeHolder>
      ))}
    </div>
    <RecipeForm />
    </section>
  );
}