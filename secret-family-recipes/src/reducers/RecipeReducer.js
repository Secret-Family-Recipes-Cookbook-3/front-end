import {LOGIN, GET_RECIPES, TRACK_USER, ADD_RECIPE, DELETE_RECIPE} from '../actions/recipeActions'

const initialState = {
  token: "",
  userId: 0,
  users: [
    {
      "id": 0, 
      "username": " ", 
      "password": " "
    }
  ],
  storedRecipes: [
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
    case LOGIN:
      return {
        ...state,
        token: action.payload
      }
    case TRACK_USER:
      return {
        ...state,
        userId: action.payload
      }
    case GET_RECIPES:
      return {
        ...state,
        storedRecipes: action.payload
      }
    case ADD_RECIPE:
      return {
        ...state,
        storedRecipes: [...state.storedRecipes, action.payload]
      }
    case DELETE_RECIPE:
      return {
        ...state,
        storedRecipes: action.payload
      }
    default:
      return state;
  }
}