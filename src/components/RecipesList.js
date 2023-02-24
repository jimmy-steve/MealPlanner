import React from "react";
import axios from "axios";
import "./RecipesList.scss";
import RecipeSearch from "./RecipeSearch.js";
import RecipeCard from "./RecipeCard.js";
import RecipeAdd from "./RecipeAdd.js";

function RecipesList() {
    return (
        <div>
            <RecipeSearch />
            <div className="m-2 recipe--card">
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>            
            <RecipeAdd />
        </div>
    )
}

export default RecipesList;