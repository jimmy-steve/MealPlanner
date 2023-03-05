import React, { useState } from "react";
import axios from "axios";
import "./RecipeSearch.scss";
import RecipeCard from "./RecipeCard";

const API_URL = "http://localhost:8000";

function RecipeSearch(props) {
  const [mealList, setMealList] = useState([]);

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState(["", ""]);
  const [exclusions, setExclusions] = useState(["", ""]);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleIngredientChange(event, index) {
    const newIngredients = [...ingredients];
    newIngredients[index] = event.target.value;
    setIngredients(newIngredients);
  }

  function handleExclusionChange(event, index) {
    const newExclusions = [...exclusions];
    newExclusions[index] = event.target.value;
    setExclusions(newExclusions);
  }
  async function handleSearch(event) {
    event.preventDefault();

    const queryParams = [];

    if (title) {
      queryParams.push(`title=${encodeURIComponent(title)}`);
    }

    const ingredientsFiltered = ingredients.filter(
      (ingredient) => ingredient.trim() !== ""
    );
    if (ingredientsFiltered.length > 0) {
      queryParams.push(
        `ingredients=${ingredientsFiltered
          .map((ingredient) => encodeURIComponent(ingredient.trim()))
          .join(",")}`
      );
    }

    const exclusionsFiltered = exclusions.filter(
      (exclusion) => exclusion.trim() !== ""
    );
    if (exclusionsFiltered.length > 0) {
      queryParams.push(
        `exclusions=${exclusionsFiltered
          .map((exclusion) => encodeURIComponent(exclusion.trim()))
          .join(",")}`
      );
    }

    const queryUrl = `${API_URL}/api/Recipes/Search?userId=${props.userId}&${queryParams.join("&")}`;

    console.log(queryUrl);

    try {
      const response = await axios.get(queryUrl);
      console.log(response.data);
      setMealList(response.data)
    } catch (error) {   
      setMealList([])   
      console.error(error);
    }

  }

  return (
    <div>
      <b>Définissez vos critères de recherche</b>
      <form className="row">
        <div className="col-3">
          <label htmlFor="title" className="col-form-label">
            Mots-clé dans le titre
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="mot-clé"
            className="form-control"
            value={title}
            onChange={handleTitleChange}
          ></input>
        </div>
        <div className="col-3">
          <label htmlFor="ingredient1, ingredient2" className="col-form-label">
            Ingrédients à inclure
          </label>
          {Array.from(Array(2), (_, i) => (         
          <input
            key={i}
            id={`ingredient${i}`}
            name={`ingredient${i}`}
            type="text"
            placeholder="ingrédient"
            className="form-control mb-1"
            value={ingredients[i]}
            onChange={(event) => handleIngredientChange(event, i)}
          ></input>
          ))}               
        </div>
        <div className="col-3">
          <label htmlFor="exlusion1, exclusion2" className="col-form-label">
            Ingrédients à exclure
          </label>
          {Array.from(Array(2), (_, i)  => (
          <input
            key={i}
            id={`exclusion${i}`}
            name={`exclusion${i}`}
            type="text"
            placeholder="exclusion"
            className="form-control mb-1"
            value={exclusions[i]}
            onChange={(event) => handleExclusionChange(event, i)}
          ></input>          
          ))}
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center">
          <button
            id="submit"
            name="submit"
            type="submit"
            className="btn btn-primary"
            onClick={handleSearch}
          >
            Rechercher
          </button>
        </div>
      </form>
      < RecipeCard
        recipes={mealList}
        title="Résultats de votre recherche"
      />
    </div>
  );
}

export default RecipeSearch;
