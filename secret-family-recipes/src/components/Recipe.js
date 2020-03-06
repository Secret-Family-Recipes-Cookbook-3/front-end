import React from 'react';
import { RecipeHolder } from '../styled/StyledComponents'

const Recipe = (props) => {
  return(
    <RecipeHolder>
      <h2>{props.title}</h2>
      <p>From my beloved {props.source}</p>
      <button onClick={() => {props.delete(props.Id)}}>delete</button>
    </RecipeHolder>
  )
}

export default Recipe;

