import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const RecipeDetails = props => {
  // const { title, source, ingredients, instructions, category  } = props.recipe;

  return (
    <Link to={`/dashboard/${props.key}`}>
      <RecipeCard
         key={props.key} title={props.title} source={props.source} />
    </Link>
  );
};

export default RecipeDetails;
