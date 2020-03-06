import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeDetails';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { connect } from 'react-redux';
import { getData } from '../actions/recipeActions';
import Navigation from './Navigation';
import AddRecipes from './AddRecipes';
import MyRecipes from './MyRecipes';

function Dashboard(props) {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get('https://secret-family-recipes-cookbook.herokuapp.com/api/recipes')
    .then(response => {
      setRecipes(response.data)
    })
    .catch(err => console.log(err))
    // props.getData()
  }, []);

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    props.history.push('/')
  }

  return (
    <div className="Dashboard">
      <Navigation logout={logout}/>
      {/* <MyRecipes recipes={recipes} setRecipes={setRecipes}/> */}
      <AddRecipes />
    </div>
  );
}

// export default Dashboard
const mapStateToProps = state => {
  return{
    storedRecipes: state.storedRecipes
  }
}

export default connect(
  mapStateToProps,
  {getData}
)(Dashboard);
