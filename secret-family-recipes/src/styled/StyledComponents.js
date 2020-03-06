import React from 'react';
import styled from "styled-components";
import Card6 from "../images/card6.jpg";
import Card2 from "../images/card2.jpg";
import Loginbg from "../images/loginbg.jpg";

export const NavBar = styled.div `
    display: flex;
    justify-content: space-evenly;
    background-color: #d97471;
    border-bottom: 3px solid #4A3731;
    @media(max-width:750px) {
      flex-direction: column;
    }
`;

export const NavBarLink= styled.div `
    margin-top: 25px;
    font-size: 1.3rem;
`;

export const LogoImg = styled.img `
  max-width: 100px;
  height: auto;
  margin-right: 2rem;
`;

export const LogoHolder = styled.div `
  display: flex;
`;

export const LinkHolder = styled.div `
    display: flex;
    width: 50%;
    justify-content: space-around;
    @media(max-width:750px) {
      width: 90%;
    }
`;

export const SearchHolder =styled.div `
  align-items: center;
  padding: 2rem;
  margin-left: 1rem;
  padding-left: 2rem;
  width: 50%;
  font-size: 1.2rem;
`;

export const RecipeHolder = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 1%;
    padding-left: 3%;
    padding-top: 1rem;
    padding-bottom: 2rem;
    border-radius: 10px;
    width: 28%;
    box-shadow: 0 6px 15px rgba(170, 170, 170, 0.3), 0 15px 12px rgba(170, 170, 170, 0.22);
    background-image: url(${Card6});
    @media(max-width:900px) {
      width: 45%;
    }
    @media(max-width:600px) {
      width: 90%;
    }
`;

export const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
     margin-left: 2rem;
`;

export const RecipeHolder2= styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 900px;
    margin-left: 3rem;
`;

export const RecipeCard = styled.div `
    width: 60%;
    box-shadow: 0 6px 15px rgba(170, 170, 170, 0.3), 0 15px 12px rgba(170, 170, 170, 0.22);
    background-image: url(${Card2});
    margin-left: 2rem;
    padding-top: 1rem;
    margin-top: 2rem;
    border-radius: 10px;
    @media(max-width:1400px) {
        width: 80%;
    }
    @media(max-width:1000px) {
        width: 700px;
    }
    @media(max-width:800px) {
        width: 500px;
    }
    @media(max-width:550px) {
        width: 300px;
    }
    @media(max-width:550px) {
        width: 90%;
        margin-left: 3%;
    }
`;

export const Title = styled.h2 `
    margin-left: 3rem;
    margin-left: 2rem;
`;

export const Ingredients = styled.div `
    display: flex;
    @media(max-width:800px) {
        flex-direction: column;
    }
`;

export const AddButton = styled.button `
    display:block;
    background-color: #BE6360;
    border-color: #9C8D84;
    padding: 0.25rem 1rem 0.25rem 1rem;
    cursor: pointer;
    color: #4A3731;
    font-weight: bold;
    &:hover {
        background-color: #d97471;
    }
`;

export const SubmitButton = styled.button `
    background-color: #BE6360;
    color: #4A3731;
    border-color: #9C8D84;
    font-weight: bold;
    cursor:pointer;
    margin: 1rem 0 3rem 0;
    padding: 0.5rem 2rem 0.5rem 2rem;
    &:hover {
        background-color: #d97471;
    }
`;

export const NavBar2= styled.div `
    background-color: #d97471;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 30px;
    border-bottom: 3px solid #4A3731;
    margin-bottom: 10px;
`;

export const SubmitButton2 = styled.button `
    background-color: #BE6360;
    color: #4A3731;
    border-color: #9C8D84;
    font-weight: bold;
    margin: 0.5rem 0 0 0;
    padding: 0.1rem 1.2rem 0.1rem 1.2rem;
    &:hover {
        background-color: #d97471;
    }
`;

export const LogoImg2 = styled.img `
  max-width: 100px;
  height: auto;
  margin-right: 2rem;
`;

export const LogoHolder2 = styled.div `
  display: flex;
`;

export const Body = styled.div `
    background-image: url(${Loginbg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    padding-bottom: 3rem;
    width: 100%;
    min-height: 94.9vh;
`;

export const Login = styled.h1 `
    margin-left: 30%;
`;

