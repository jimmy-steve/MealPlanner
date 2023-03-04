import React from "react";
import axios from "axios";
import "./RecipesList.scss";
import RecipeSearch from "./RecipeSearch.js";
import RecipeCard from "./RecipeCard.js";
import RecipeAdd from "./RecipeAdd.js";

function RecipesList(props) {
    const userId = {props};

    const allRecipes = () => {
        axios
            .get(`http://localhost:8000/api/Recipes?userId=${props.userId}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    };
    
      console.log(allRecipes);

    
    return (
        <div>
            <RecipeSearch userId={userId} />
            <RecipeCard
                userId={userId}
                allRecipes={allRecipes} />
            <RecipeAdd userId={userId} />
        </div>
    )
}

export default RecipesList;