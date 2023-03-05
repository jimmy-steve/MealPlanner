import React from "react";
import "./RecipesList.scss";
import RecipeSearch from "./RecipeSearch.js";
import RecipeCard from "./RecipeCard.js";
import RecipeAdd from "./RecipeAdd.js";

function RecipesList(props) {
    
    return (        
        <div className="p-3 mt-2 mb-2">
            <RecipeSearch 
                userId={props.userId}
            />
            <RecipeCard
                userId={props.userId} 
                recipes={props.recipes}
                title="Liste de vos recettes"              
            />                
            <RecipeAdd 
                userId={props.userId}
            />
        </div>
    )
}

export default RecipesList;