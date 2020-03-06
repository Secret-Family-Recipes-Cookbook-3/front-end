import {LOGIN, GET_RECIPES} from '../actions/recipeActions'

const initialState = {
  token: "",
  users: [
    {
      "id": 0, 
      "username": " ", 
      "password": " "
    }
  ],
  recipes: [
    {
      "id": 0,
      "title": " ",
      "source": " ",
      "category_id": 0,
      "user_id": 0
    }
  ],
  ingredients: [
    {
      "id": 0,
      "name": " ",
      "description": " "
    }
  ]
}

export const recipesReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload
      }
    case LOGIN:
      return {
        ...state,
        token: action.payload
      }
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
    case "ADD_INGREDIENTS":
      return {

      }
    default:
      return state;
  }
}