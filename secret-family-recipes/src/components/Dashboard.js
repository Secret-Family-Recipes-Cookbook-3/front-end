import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import { axiosWithAuth } from '../utils/axiosWithAuth'

import Navigation from './Navigation';
import MyRecipes from './MyRecipes';

function Dashboard(props) {
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

  const logout = (event) => {
    event.preventDefault();

    localStorage.removeItem('token');
    localStorage.removeItem('user_id');

    props.history.push('/')
}

  return (
    <div className="Dashboard">
      <Navigation logout={logout}/>
      <MyRecipes recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default Dashboard;
