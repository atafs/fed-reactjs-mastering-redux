import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipes, unfavoriteRecipes } from '../actions';

class RecipeItem extends Component {
    constructor() {
        super();

        this.state = {
            favorited: false
        }
    }

    favorite(recipe) {
        this.props.favoriteRecipes(recipe);
        this.setState({favorited: true});
    }

    unfavorite(recipe) {
        this.props.unfavoriteRecipes(recipe);        
        this.setState({favorited: false});
    }

    render() {
        let { recipe } = this.props;
        
        return (
            <div className="center_div">
                <div className="recipe-item">
                    {
                        this.props.favoriteButton 
                            ?   this.props.hasFavoriteRecipe
                                    ?   <div 
                                            className="star"
                                            onClick={ () => this.unfavorite(recipe) }
                                        >
                                            <span>&#9733;</span>
                                        </div>
                                    :   <div  
                                            className="star"
                                            onClick={ () => this.favorite(recipe) } 
                                            
                                        >
                                            <span>&#9734;</span>
                                        </div>
                            :   null
                    }
                    
                    <div className="recipe-text">
                        <a href={recipe.href}>
                            <h4>{recipe.title}</h4>
                        </a>
                        <p>{recipe.ingredients}</p>
                    </div>
                    <img src={recipe.thumbnail} 
                            alt={recipe.title} 
                            className="recipe-img" 
                    />
                </div>
            </div>
        )
    }
}

export default connect(null, { favoriteRecipes, unfavoriteRecipes })(RecipeItem);