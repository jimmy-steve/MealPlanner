import React from "react";
import "./RecipesList.scss";
import RecipeSearch from "./RecipeSearch.js";
import RecipeCard from "./RecipeCard.js";
import RecipeAdd from "./RecipeAdd.js";

function RecipesList(props) {
    console.error("recipesList : " + props.recipes)
    return (        
        <div>
            <RecipeSearch 
                userId={props.userId}
            />
            <RecipeCard
                userId={props.userId}
                recipes={props.recipes} />
            <RecipeAdd 
                userId={props.userId}
            />
        </div>
    )
}

export default RecipesList;