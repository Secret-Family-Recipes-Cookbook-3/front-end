import React, { useEffect, useState } from "react";
import styled from "styled-components";

const RecipeHolder = styled.div `
  display: flex;
  align-items: center;
  margin: 3%;
  padding-left: 3rem;
  border-radius: 10px;
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
    <section className="character-list">
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
        {props.recipes.map(item => (
          <RecipeHolder key={item.id} >
            <div>
                <h1>{item.title}</h1>
            </div>
          </RecipeHolder>
      ))}
    </div>
    </section>
  );
}