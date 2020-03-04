import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavBar= styled.div `
    display: flex;
    justify-content: space-evenly;
    background-color: #d97471;
    border-bottom: 3px solid #4A3731;
    margin-bottom: 10px;
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
        <h2 className="Logo">Secret Family Recipes</h2>
        <NavBarLink>
        <div>
          <Link className="navlink" to="/Dashboard">Dashboard</Link>
        </div>
        </NavBarLink>
        <NavBarLink>
        <div>
          <Link className="navlink" to="/">Login</Link>
        </div>
        </NavBarLink>
        <NavBarLink>
        <div>
          <Link className="navlink" to="/SignUpPage">Signup</Link>
        </div>
        </NavBarLink>
        </NavBar>
      </div>
    </div>
  );
};

export default Navigation;
