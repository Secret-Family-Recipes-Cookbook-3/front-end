import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth'

import AddRecipes from './AddRecipes';
import Navigation from './Navigation';
import SearchForm from './Search';
import MyRecipes from './MyRecipes';

function Dashboard() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get('https://secret-family-recipes-cookbook.herokuapp.com/api/recipes')
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
