import React from 'react';

const RecipeCard = props => {
  const { title, source, ingredients, instructions, category  } = props.recipe;

  return (
    <div className="recipe-card">
      <h3>{title}</h3>
      <h3>{source}</h3>
      <h3>{instructions}</h3>
      <h3>{ingredients}</h3>
      <h3>{category}</h3>
    </div>
  );
};

export default RecipeCard;
