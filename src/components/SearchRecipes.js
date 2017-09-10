import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { setRecipes } from '../actions';

class SearchRecipes extends Component {
    constructor() {
        super();

        this.state = {
            ingredients: '',
            dish: ''
        }
        console.log('state', this.state);  
    }

    search() {
        let { ingredients, dish } = this.state;
        const url = `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
        console.log('state', this.state, 'url', url);

        fetch(url, { method: 'GET' }
        ).then(response => response.json())
         .then(json => {
                this.props.setRecipes(json.results)
            }
        );
    }

    render() {
        return (
            <div className="background-image">
                <h2>Recipe Finder</h2>
                <Form className="justify-content-center" inline>
                    <FormGroup>
                        <ControlLabel>Ingredients</ControlLabel>
                        <FormControl 
                            type="text" 
                            placeholder="garlic, chicken" 
                            onChange={ event => this.setState({ ingredients: event.target.value }) }
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Dish</ControlLabel>
                        <FormControl 
                            type="text" 
                            placeholder="adobo" 
                            onChange={ event => this.setState({ dish: event.target.value }) }
                        /> 
                    </FormGroup>
                    <Button onClick={ () => this.search() }>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, { setRecipes })(SearchRecipes);