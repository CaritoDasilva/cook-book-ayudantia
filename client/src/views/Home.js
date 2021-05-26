import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from "react-router-dom";
const Home = () => {
    const [recipes, setRecipes] = useState();

    const getRecipes = async () => {
        try {
            let data = await axios.get('http://localhost:8000/api/recipes/');
            setRecipes(data.data.recipes);

        } catch (err) {
            return err;
        }
    }

    // const deleteRecipe = async (id) => {
    //     await axios.delete(`http://localhost:8000/api/recipes/delete/${id}`);

    // }

    useEffect(() => {
        getRecipes()
    }, [])

    const showTable = () => {
        if (recipes) {
            return (
                <>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Título receta</th>
                                <th>Ingredientes</th>
                                <th>Pasos a seguir:</th>
                                <th>Tiempo de cocción</th>
                                <th>Acciones</th>

                            </tr>
                        </thead>
                        <tbody>
                            {recipes.map((recipe, index) =>
                            (<tr key={recipe._id}>
                                <td>{recipe.title}</td>
                                <td>{recipe.ingredients}</td>
                                <td>{recipe.steps}</td>
                                <td>{recipe.cook_time}</td>
                                <td>
                                    <Link to={`/edit/${recipe._id}`}>Editar</Link>
                                    {/* <button onClick={deleteRecipe(recipe._id)}>Eliminar</button> */}
                                </td>
                            </tr>)
                            )}
                        </tbody>
                    </Table>
                    <Link to="/new-recipe">Agregar receta</Link>
                </>
            )
        }
        else {
            return (<>
                No hay recipes aun
            </>)
        }
    }


    return (
        <div className="home-container">
            <h1>Mis recetas:</h1>
            <div className="table-container">
                {showTable()}

            </div >
        </div >
    )


}

export default Home;
