import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Recipe from './Recipe';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getData, deleteRecipe } from '../actions/recipeActions';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {NavBar, SearchHolder, RecipeHolder, Wrapper} from '../styled/StyledComponents'

const MyRecipes = ({ getData, deleteRecipe, storedRecipes}) => {
    const [query, setQuery] = useState("");
    const [updatedRecipes, setUpdatedRecipes] = useState(storedRecipes)

  useEffect(() => {
    getData()
    const recipesList = storedRecipes.filter(rec =>
      rec.title.toLowerCase().includes(query.toLowerCase())
    )
    // props.setRecipes(recipesList);
  }, [updatedRecipes]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section id="recipe-list">
      <SearchHolder>
        <Link to='/dashboard'>
          <h3>back to dashboard</h3>
        </Link>
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
      </SearchHolder>
      <Wrapper>
        {storedRecipes.map(item => (
          <Recipe delete={deleteRecipe} Id={item.id} title={item.title} source={item.source}/>
        ))}
      </Wrapper>

    </section>
  );
}

const mapStateToProps = state => {
  return{
      storedRecipes: state.storedRecipes
  }
}

export default connect(
  mapStateToProps,
  {getData, deleteRecipe}
)(MyRecipes);