import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RecipeItem from './RecipeItem';

class RecipeList extends Component {
    render() {
        console.log('props', this.props);

        return (
            <div>
                {
                    this.props.favoriteRecipes.length > 0 
                        ? <h4 className="link"><Link to='/favorites'>Favorites</Link></h4>
                        : null
                }

                {
                    this.props.recipes.map( (recipe, index) => {
                        let hasFavoriteRecipe = false;
                        this.props.favoriteRecipes.map( favoriteRecipe => {
                            if (favoriteRecipe.title === recipe.title) { hasFavoriteRecipe = true }
                        })

                        return(
                            <RecipeItem 
                                key={index} 
                                recipe={recipe}
                                favoriteButton={true}
                                hasFavoriteRecipe={hasFavoriteRecipe}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(RecipeList);