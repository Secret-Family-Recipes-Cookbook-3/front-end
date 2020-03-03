const initialState = {
  recipes: [
    {title: '', source: ' ', ingredients: ' ', instructions: '', category: ' ' }
  ]
}

export const recipesReducer = (state = initialState, action) => {
  switch(action.type){

    case "ADD_RECIPE":
      const newRecipe = {
        title: '', 
        source: ' ', 
        ingredients: ' ', 
        instructions: '', 
        category: ' '
       }
      return {
        ...state,
        recipes: [...state.recipes, newRecipe]
      }
    default:
      return state;
  }
}