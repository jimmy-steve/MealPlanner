import React, { useState, useEffect } from "react";
import "./RecipesList.scss";
import RecipeSearch from "./RecipeSearch.js";
import RecipeCard from "./RecipeCard.js";
import RecipeAdd from "./RecipeAdd.js";

function RecipesList(props) {
    const [recipes, setRecipes] = useState(props.recipes);

    useEffect(() => {
      setRecipes(props.recipes);
    }, [props.recipes]);
    console.log("RecipeList Recipes: " + recipes)
    
    return (        
        <div className="p-3 mt-2 mb-2">
            <RecipeSearch 
                userId={props.userId}
            />
            <RecipeCard
                userId={props.userId} 
                recipes={recipes}
                title="Liste de vos recettes"              
            />                
            <RecipeAdd 
                userId={props.userId}
            />
        </div>
    )
}

export default RecipesList;