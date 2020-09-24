import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import { axiosWithAuth } from '../utils/axiosWithAuth'

import Navigation from './Navigation';
import MyRecipes from './MyRecipes';

function Dashboard() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get('https://family-recipes-backend-proj.herokuapp.com/api/recipes')
    .then(response => {
      console.log(response.data)
      setRecipes(response.data)
    })
    .catch(error=> console.log(error));
  }, []);

  return (
    <div className="Dashboard">
      <Navigation />
      <MyRecipes recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default Dashboard;
