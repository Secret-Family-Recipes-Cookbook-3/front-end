import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Recipe from './Recipe';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getData } from '../actions/recipeActions';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {NavBar, SearchHolder, RecipeHolder, Wrapper} from '../styled/StyledComponents'

const MyRecipes = (props) => {
    const [query, setQuery] = useState("");

  useEffect(() => {
    props.getData()
    const recipesList = props.storedRecipes.filter(rec =>
      rec.title.toLowerCase().includes(query.toLowerCase())
    )
    // props.setRecipes(recipesList);
  }, [query]);

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
        {props.storedRecipes.map(item => (
          <Recipe key={item.id} title={item.title} source={item.source}/>
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
  {getData}
)(MyRecipes);