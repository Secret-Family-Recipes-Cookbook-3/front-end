import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddRecipes from './AddRecipes';

const SearchHolder =styled.div `
align-items: center;
margin: 1rem;
margin-left: .5rem;
padding-left: 2rem;
width: 50%;
font-size: 1.2rem;
;`

const RecipeHolder = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  margin-left: 21%;
  padding-left: 3%;
  padding-right: 3%;
  border-radius: 10px;
  width: 50%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
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
    <section className="recipe-list">
      <form className="search">
        <SearchHolder><label htmlFor="search">Find recipe:&#8201;
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
        </SearchHolder>
      </form>
      <div>
        {props.recipes.map(item => (
          <RecipeHolder key={item.id} >
            <div>

                <h1>{item.title}</h1>

            </div>
            
          </RecipeHolder>
      ))}
    </div>
    <AddRecipes />
    </section>
  );
}