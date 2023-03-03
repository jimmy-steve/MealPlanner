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
            <RecipeCard />
            <RecipeAdd />
        </div>
    )
}

export default RecipesList;