import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IngredientsList({ userid, fromdate, todate }) {
    const [ingredients, setIngredients] = useState([]);

    const ingredientsCategories = {
        0: "Fruits et légumes",
        1: "Viande",
        2: "Poisson",
        3: "Produits laitiers",
        4: "Boissons",
        5: "Céréales",
        6: "Sucres",
        7: "Légumineuses",
        8: "Graisses",
        9: "Condiments"
    }

    useEffect(() => {
        // FIXME paramètres Axios
        // axios.get(`http://localhost:8000/api/ingredients?userid=${userid}&fromdate=${fromdate}&todate=${todate}`)
        axios.get(`http://localhost:8000/api/ingredients?userid=100&fromdate='2023-01-01'&todate='2023-01-12'`)
            .then(response => {
                setIngredients(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [userid, fromdate, todate]);

    const categories = [...new Set(ingredients.map(i => i.categories))];

    return (
        <div class="row">
            {categories.map(categories =>
                <div class="card col-sm-4" key={categories}>
                    <div class="card-body">
                        <h5 class="card-header">{ingredientsCategories[categories]}</h5>
                        <p class="card-text">
                            <ul>
                                {ingredients.filter(i => i.categories === categories)
                                    .map(i =>
                                        <li key={i.id}>
                                            {i.name} - {i.quantity} {i.unit}
                                        </li>
                                    )}
                            </ul></p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default IngredientsList;
