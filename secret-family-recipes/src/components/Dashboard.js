import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeForm from './AddRecipes';
import Navigation from './Navigation';
import SearchForm from './Search';

function Dashboard() {
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    axios.get('https://reqres.in/api/https://secret-family-recipes-cookbook.herokuapp.com/')
    .then(response => setRecipe(response.data))
    .catch(error=> console.log(error));
  }, []);

  return (
    <div className="Dashboard">
      <Navigation />
      <SearchForm recipe={recipe} />
    </div>
  );
}

export default Dashboard;
