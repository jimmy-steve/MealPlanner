import React from "react";
import "./RecipeSearch.scss";

function RecipeSearch() {
    return(
        <div>
            <p>Définissez vos critères de recherche</p>
            <form>
                <div>
                    <label for="title">Mots-clé dans le titre</label>
                    <input id="title" name="title" type="text" placeholder="mot-clé"></input>                    
                </div>
                <div>
                    <label for="ingredient1, ingredient2">Ingrédients à inclure</label>
                    <input id="ingredient1" name="ingredient1" type="text" placeholder="ingrédient"></input>
                    <input id="ingredient2" name="ingredient2" type="text" placeholder="ingrédient"></input>
                </div>
                <div>
                    <label>Ingrédients à exclure</label>
                    <input id="exclusion1" name="exclusion1" type="text" placeholder="exclusion"></input>
                    <input id="exclusion2" name="exclusion2" type="text" placeholder="exclusion"></input>
                </div>
                <button id="submit" name="submit" type="submit" className="btn">Rechercher</button>
            </form>            
        </div>        
    )
}

export default RecipeSearch;