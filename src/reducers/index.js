import { combineReducers } from 'redux';
import { SET_RECIPES, FAVORITE_RECIPE, UNFAVORITE_RECIPE } from '../actions';

function recipes(state = [], action) {
    switch(action.type) {
        case SET_RECIPES:
            return action.items;
        default:
            return state;
    }
}

function favoriteRecipes(state = [], action) {
    switch(action.type) {
        case FAVORITE_RECIPE:
            console.log('action and recipe', state, action);        
            state = [...state, action.recipe]
            return state;
        case UNFAVORITE_RECIPE:
            console.log('action and recipe', state, action);        
            state = state.filter(recipe => recipe.title !== action.recipe.title);
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers( 
    { recipes, favoriteRecipes } 
);

export default rootReducer;