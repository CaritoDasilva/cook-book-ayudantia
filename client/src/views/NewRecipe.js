import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
const NewRecipe = () => {
    let history = useHistory();
    let { id } = useParams();
    const [formRecipe, setFormRecipe] = useState({
        title: '',
        ingredients: [],
        cook_time: 0,
        steps: ''
    })

    useEffect(() => {
        console.log("🚀 ~ file: NewRecipe.js ~ line 20 ~ useEffect ~ id", id)
        id && getRecipe();
    }, [])

    const getRecipe = async () => {
        try {
            const data = await axios.get(`http://localhost:8000/api/recipes/${id}`);
            console.log("🚀 ~ file: NewRecipe.js ~ line 20 ~ getRecipe ~ data", data.data.recipe)
            setFormRecipe({
                title: data.data.recipe.title,
                ingredients: data.data.recipe.ingredients,
                cook_time: data.data.recipe.cook_time,
                steps: data.data.recipe.steps
            })

        } catch (err) {
            return err;
        }
    }

    const submitRecipe = async (e) => {
        e.preventDefault();
        try {
            let ingredientsArr = await Array.isArray(formRecipe.ingredients) ? formRecipe.ingredients : formRecipe.ingredients.split(',');
            !id ? await axios.post('http://localhost:8000/api/recipes/new', {
                data: { ...formRecipe, ingredients: ingredientsArr }
            }) : await axios.put(`http://localhost:8000/api/recipes/update/${id}`, {
                data: { ...formRecipe, ingredients: ingredientsArr }
            });
            history.push('/')

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