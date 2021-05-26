import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

const DetailRecipe = () => {
    let { id } = useParams();
    let history = useHistory();

    const [recipe, setRecipe] = useState()
    useEffect(() => {
        console.log("🚀 ~ file: NewRecipe.js ~ line 20 ~ useEffect ~ id", id)
        id && getRecipe();
    }, [])

    const getRecipe = async () => {
        try {
            const data = await axios.get(`http://localhost:8000/api/recipes/${id}`);
            console.log("🚀 ~ file: NewRecipe.js ~ line 20 ~ getRecipe ~ data", data.data.recipe)
            setRecipe({
                title: data.data.recipe.title,
                ingredients: data.data.recipe.ingredients,
                cook_time: data.data.recipe.cook_time,
                steps: data.data.recipe.steps,
                id: data.data.recipe._id
            })

        } catch (err) {
            return err;
        }
    }

    const deleteRecipe = async () => {
        try {
            let data = await axios.delete(`http://localhost:8000/api/recipes/delete/${id}`);
            data && history.push('/');
            return data;

        } catch (err) {
            return err;
        }
    }

    return (
        <div className="recipe-container">
            {recipe && (
                <>
                    <h1>{recipe.title}</h1>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.steps}</p>
                    <p>{recipe.cook_time}</p>
                    <button onClick={deleteRecipe}>Eliminar</button>
                </>
            )}
        </div>
    )

}

export default DetailRecipe;