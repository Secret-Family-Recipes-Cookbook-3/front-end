import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddRecipes from './AddRecipes';
import Card6 from "../images/card6.jpg";


const SearchHolder =styled.div `
  align-items: center;
  padding: 2rem;
  margin-left: 1rem;
  padding-left: 2rem;
  width: 50%;
  font-size: 1.2rem;
`;

const RecipeHolder = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 1%;
    padding-left: 3%;
    padding-top: 1rem;
    padding-bottom: 2rem;
    border-radius: 10px;
    width: 28%;
    box-shadow: 0 6px 15px rgba(170, 170, 170, 0.3), 0 15px 12px rgba(170, 170, 170, 0.22);
    background-image: url(${Card6});
    @media(max-width:900px) {
      width: 45%;
    }
    @media(max-width:600px) {
      width: 90%;
    }
`;


const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
     margin-left: 2rem;
`;

export default function MyRecipes(props) {
    const [query, setQuery] = useState("");

  useEffect(() => {
        const recipesList = props.recipes.filter(rec =>
          rec.title.toLowerCase().includes(query.toLowerCase())
        );
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
          <RecipeHolder key={item.id} >
            <div className='recipeCardAnimate'>
              <h2>{item.title}</h2>
              <p>From my beloved {item.source}</p>
            </div>
          </RecipeHolder>
        ))}
      </Wrapper>
      <AddRecipes />
    </section>
  );
}