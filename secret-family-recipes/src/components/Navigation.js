import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavBar= styled.div `
    display: flex;
    justify-content: space-evenly;
    background-color: #d97471;
`;

const NavBarLink= styled.div `
    margin-top: 25px;
    font-size: 1.3rem;
`;

const Navigation = () => {
  return (
    <div>
      <div className="App">
      <NavBar>
        <h1 className="Logo">Secret Family Recipes</h1>
        <NavBarLink>
        <div>
          <Link to="/Dashboard">Dashboard</Link>
        </div>
        </NavBarLink>
        <NavBarLink>
        <div>
          <Link to="/MyRecipes">MyRecipes</Link>
        </div>
        </NavBarLink>
        <NavBarLink>
        <div>
          <Link to="/LoginPage">Login</Link>
        </div>
        </NavBarLink>
        <NavBarLink>
        <div>
          <Link to ="/">Signup</Link>
        </div>
        </NavBarLink>
        </NavBar>
      </div>
    </div>
  );
};

export default Navigation;
