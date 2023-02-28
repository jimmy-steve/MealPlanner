import React from "react";
import "./RecipeSearch.scss";

function RecipeSearch() {
    return(
        <div className="p-3 mt-2 mb-2">
            <b>Définissez vos critères de recherche</b>
            <form className="row">
                <div className="col-3">
                    <label for="title" className="col-form-label">Mots-clé dans le titre</label>
                    <input id="title" name="title" type="text" placeholder="mot-clé" className="form-control"></input>                    
                </div>
                <div className="col-3">
                    <label for="ingredient1, ingredient2" className="col-form-label">Ingrédients à inclure</label>
                    <input id="ingredient1" name="ingredient1" type="text" placeholder="ingrédient" className="form-control mb-1"></input>
                    <input id="ingredient2" name="ingredient2" type="text" placeholder="ingrédient" className="form-control"></input>
                </div>
                <div className="col-3">
                    <label for="exlusion1, exclusion2" className="col-form-label">Ingrédients à exclure</label>
                    <input id="exclusion1" name="exclusion1" type="text" placeholder="exclusion" className="form-control mb-1"></input>
                    <input id="exclusion2" name="exclusion2" type="text" placeholder="exclusion" className="form-control"></input>
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <button id="submit" name="submit" type="submit" className="btn btn-primary">Rechercher</button>
                </div>               
            </form>            
        </div>        
    )
}

export default RecipeSearch;