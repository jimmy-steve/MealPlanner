import React from "react";
import "./RecipeSearch.scss";

function RecipeSearch() {
  function handleSearch(event) {
    event.preventDefault();
    try {
      const title = document.getElementById("title").value.trim();
      const ingredient1 = document.getElementById("ingredient1").value.trim();
      const ingredient2 = document.getElementById("ingredient2").value.trim();
      const exclusion1 = document.getElementById("exclusion1").value.trim();
      const exclusion2 = document.getElementById("exclusion2").value.trim();
      const queryParams = [];

      if (title) {
        queryParams.push(`title=${encodeURIComponent(title)}`);
      }

      const ingredients = [];
      if (ingredient1) {
        ingredients.push(encodeURIComponent(ingredient1));
      }
      if (ingredient2) {
        ingredients.push(encodeURIComponent(ingredient2));
      }
      if (ingredients.length === 1) {
        queryParams.push(`ingredients=${ingredients}`);
      } else if (ingredients.length > 1) {
        queryParams.push(`ingredients=${ingredients.join(",")}`);
      }

      // const exclusions = [];
      // if (exclusion1) {
      //   exclusions.push(encodeURIComponent(exclusion1));
      // }
      // if (exclusion2) {
      //   exclusions.push(encodeURIComponent(exclusion2));
      // }
      // if (exclusions.length === 1) {
      //   queryParams.push(`exclusions=${exclusions}`);
      // } else if (exclusions.length > 1) {
      //   queryParams.push(`exclusions=${exclusions.join(",")}`);
      // }

      const queryUrl = `http://localhost:8000/api/Recipes/Search?${queryParams.join(
        "&"
      )}`;

      console.log(queryUrl);

      fetch(queryUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      //const response = await axios.get(`/`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-3 mt-2 mb-2">
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
          ></input>
        </div>
        <div className="col-3">
          <label htmlFor="ingredient1, ingredient2" className="col-form-label">
            Ingrédients à inclure
          </label>
          <input
            id="ingredient1"
            name="ingredient1"
            type="text"
            placeholder="ingrédient"
            className="form-control mb-1"
          ></input>
          <input
            id="ingredient2"
            name="ingredient2"
            type="text"
            placeholder="ingrédient"
            className="form-control"
          ></input>
        </div>
        <div className="col-3">
          <label htmlFor="exlusion1, exclusion2" className="col-form-label">
            Ingrédients à exclure
          </label>
          <input
            id="exclusion1"
            name="exclusion1"
            type="text"
            placeholder="exclusion"
            className="form-control mb-1"
          ></input>
          <input
            id="exclusion2"
            name="exclusion2"
            type="text"
            placeholder="exclusion"
            className="form-control"
          ></input>
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
    </div>
  );
}

export default RecipeSearch;
