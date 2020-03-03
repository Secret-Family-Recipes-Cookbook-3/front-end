import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>Secret Family Recipes</h1>
        <div>
          <Link to="/">Dashboard</Link>
        </div>
        <div>
          <Link to="/MyRecipes">MyRecipes</Link>
        </div>
        <div>
          <Link to="/Login">Login</Link>
        </div>
        <div>
          <Link to="/SignUpPage">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
