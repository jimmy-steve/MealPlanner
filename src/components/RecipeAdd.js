import React from "react";
import axios from "axios";
import "./RecipeAdd.scss";

function RecipeAdd() {
    return(
        <div>
            <div className="m-3">
                    <button id="addRecipe" name="addRecipe" type="button" className="btn btn-secondary">Ajouter une recette</button>
            </div> 
        </div>
    )
}

export default RecipeAdd;