import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth'

import RecipeForm from './AddRecipes';
import Navigation from './Navigation';
import SearchForm from './Search';

function Dashboard() {
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get('https://secret-family-recipes-cookbook.herokuapp.com/api/recipes')
    .then(response => 
      console.log(response.data)
      )
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
