import React, { useState, useEffect } from "react";
import RecipeCard from './RecipeCard';

export default function SearchForm({ recipe }) {
  const [searchSomething, setSearchSomething] = useState('');
  const [searchResult, setSearchResult] = useState(recipe);

  const inputHandler = e => {
    setSearchSomething(e.target.value);
  };

  useEffect(() => {
    let results = recipe.filter(recipes =>
      recipes.name.toLowerCase().includes(searchSomething.toLowerCase())
      );
      setSearchResult(results);
  }, [searchSomething, recipe]);
 
  return (
    <div>
    <section className="search-form">
      <label>
        <span>Search Recipes: </span>
        <input 
        type='text' 
        placeholder='Enter Recipe' 
        onChange={inputHandler} />
        </label>
    </section>

    <section className='recipe-list'>
      {searchResult.map(recipes => (
        <RecipeCard recipes={recipes} key={recipes.id} />
      ))}
    </section>
    </div>
  );
}
