import React, { useState } from 'react';
import axios from 'axios';

const NewRecipe = () => {
    const [formRecipe, setFormRecipe] = useState({
        title: '',
        ingredients: [],
        cook_time: 0,
        steps: ''
    })

    const submitRecipe = async (e) => {
        try {
            e.preventDefault();
            console.log("🚀 ~ file: NewRecipe.js ~ line 20 ~ submitRecipe ~ e", e)
            let ingredientsArr = await formRecipe.ingredients.split(',');
            let postNewRecipe = await axios.post('http://localhost:8000/api/recipes/new', {
                data: {
                    ...formRecipe, ingredients: ingredientsArr
                }
            });
            console.log("🚀 ~ file: NewRecipe.js ~ line 26 ~ submitRecipe ~ postNewRecipe", postNewRecipe)
            return postNewRecipe;
        } catch (err) {
            return err;
        }

    }

    const onChange = (e) => {
        setFormRecipe({ ...formRecipe, [e.target.name]: e.target.value })

    }

    return (
        <form onSubmit={submitRecipe}>
            <label htmlFor="title">Título receta</label>
            <input type="text" name="title" value={formRecipe.title} onChange={onChange} />
            <label htmlFor="ingredients">Ingredientes</label>
            <input type="text" name="ingredients" value={formRecipe.ingredients} onChange={onChange} />
            <label htmlFor="steps">Preparación</label>
            <input type="text" name="steps" value={formRecipe.steps} onChange={onChange} />
            <label htmlFor="cook_time">Tiempo de cocción</label>
            <input type="text" name="cook_time" value={formRecipe.cook_time} onChange={onChange} />
            <button type="submit">Agregar</button>
        </form>

    )
}

export default NewRecipe;