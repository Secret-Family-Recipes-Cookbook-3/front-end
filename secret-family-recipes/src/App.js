import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FormikRecipeForm from "./components/AddRecipes";
import FormForUser from './components/SignUp';

function App() {
  return (
    <div className="App">
      <FormForUser />
      <FormikRecipeForm></FormikRecipeForm>
    </div>
  );
}

export default App;
