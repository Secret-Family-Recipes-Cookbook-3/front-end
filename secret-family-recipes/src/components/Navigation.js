import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png";
import { NavBar, NavBarLink, LogoImg, LogoHolder, LinkHolder } from '../styled/StyledComponents';

const Navigation = (props) => {
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
                <Link className="navlink" onClick={props.logout}>Logout</Link>
              </div>
            </NavBarLink>
          </LinkHolder>
        </NavBar>
      </div>
    </div>
  );
};

export default Navigation;
