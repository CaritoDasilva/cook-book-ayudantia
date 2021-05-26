import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
    }

    useEffect(async () => {
        try {
            let data = await axios.get('http://localhost:8000/api/recipes/');
            setRecipes(data.data);

        } catch (err) {
            return err;
        }
    }, [])

    const showTable = () => {
        return recipes.length > 0 && recipes?.map(recipe => (<h1>Hola</h1>))
    }


    return (
        <div className="home-container">
            <h1>Mis recetas:</h1>
            <div className="table-container">
                {showTable()}
                {/* 
                    <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Título receta</th>
                            <th>Ingredientes</th>
                            <th>Pasos a seguir:</th>
                            <th>Tiempo de cocción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes > 0 && recipes?.map(recipe => {
                            { console.log("🚀 ~ file: Home.js ~ line 50 ~ Home ~ recipes", recipe) }

                            return (
                                <tr key={recipe._id}>
                                    <td>{recipe.title}</td>
                                    <td>{recipe.ingredients}</td>
                                    <td>{recipe.steps}</td>
                                    <td>{recipe.cook_time}</td>
                                </tr>
                            )
                        })} */}
                {/* <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr> */}
                {/* </tbody>
                </Table> */}
            </div >
        </div >
    )


}

export default Home;