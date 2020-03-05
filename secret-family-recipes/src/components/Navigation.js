import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Logo from "../images/logo.png";

const NavBar= styled.div `
    display: flex;
    justify-content: space-evenly;
    background-color: #d97471;
    border-bottom: 3px solid #4A3731;
    margin-bottom: 10px;
    @media(max-width:750px) {
      flex-direction: column;
    }
`;

const NavBarLink= styled.div `
    margin-top: 25px;
    font-size: 1.3rem;
`;

const LogoImg = styled.img `
  max-width: 100px;
  height: auto;
  margin-right: 2rem;
`;

const LogoHolder = styled.div `
  display: flex;
`;

const LinkHolder = styled.div `
    display: flex;
    width: 50%;
    justify-content: space-around;
    @media(max-width:750px) {
      width: 90%;
    }
`;

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <NavBar>
          <LogoHolder>
            <LogoImg src={Logo} alt="cherry pie logo" />
            <h2 className="Logo">Secret Family Recipes</h2>
          </LogoHolder>
          
          <LinkHolder>
            <NavBarLink>
              <div>
                <Link className="navlink" to="/Dashboard">Dashboard</Link>
              </div>
            </NavBarLink>
        
            <NavBarLink>
              <div>
                <Link className="navlink" to="/">Logout</Link>
              </div>
            </NavBarLink>
          </LinkHolder>
          </NavBar>
      </div>
    </div>
  );
};

export default Navigation;
