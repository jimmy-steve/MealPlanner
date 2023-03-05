import React from "react";
import "./RecipesList.scss";
import RecipeSearch from "./RecipeSearch.js";
import RecipeCard from "./RecipeCard.js";
import RecipeAdd from "./RecipeAdd.js";

function RecipesList(props) {
    
    return (        
        <div>
            <RecipeSearch 
                userId={props.userId}
                recipes={props.recipes}
            />
            <RecipeCard
                userId={props.userId} 
                recipes={props.recipes}              
            />                
            <RecipeAdd 
                userId={props.userId}
            />
        </div>
    )
}

export default RecipesList;