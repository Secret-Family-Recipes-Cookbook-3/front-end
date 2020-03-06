import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddRecipes from './AddRecipes';
import Recipe from './Recipe';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getData } from '../actions/recipeActions';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {NavBar, SearchHolder, RecipeHolder, Wrapper} from '../styled/StyledComponents'

const MyRecipes = (props) => {
    const [query, setQuery] = useState("");

  // props.getData()
  useEffect(() => {
    const recipesList = props.recipes.filter(rec =>
      rec.title.toLowerCase().includes(query.toLowerCase())
    )
    props.setRecipes(recipesList);

  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section id="recipe-list">
      <SearchHolder>
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
        {props.recipes.map(item => (
          <Recipe key={item.id} title={item.title} source={item.source}/>
        ))}
      </Wrapper>
      <AddRecipes />
    </section>
  );
}

export default MyRecipes