import React, { useState, useEffect } from "react";
import RecipeMoreButton from "./RecipeMoreButton";
import "./RecipeCard.scss";

function RecipeCard(props) {
  const hasRecipes = Array.isArray(props.recipes) && props.recipes.length > 0;
  const [mealList, setMealList] = useState([]);
  const [action, setAction] = useState("");

  const handleMoreClick = (recipeId, action) => {

    setAction(action);
    if (action === "add") {
      console.log("action ADD");
      // Perform add action
    } else if (action === "modify") {
      console.log("action MODIFY");
      // Perform modify action
    }
  };

  useEffect(() => {
    setMealList(props.recipes);
  }, [props.recipes]);

  const mealElements = mealList.map((meal) => (
    <div key={meal.recipeId}>
      <div className="mt-3 me-3 card--container">
        <div className="card--img--container">
          <img src={meal.pictureUrl} alt={meal.title} className="card--img" />
        </div>
        <div className="card--text--container">
          <h4>{meal.title}</h4>
          <div className="row">
            <div className="col-5 align-self-end">
              {meal.preparationTime !== 0 && (
                <span>
                  <span className="material-symbols-outlined">av_timer</span>
                  <span className="align-top m-1">{meal.preparationTime} min</span>
                </span>
              )}
            </div>
            <div className="col-5 align-self-end">
              {meal.cookingTime !== 0 && (
                <span>
                  <span className="material-symbols-outlined">cooking</span>
                  <span className="align-top m-1">{meal.cookingTime} min</span>
                </span>
              )}
            </div>

            <div className="col-2 container">
            <RecipeMoreButton onClick={handleMoreClick} action={action} recipeId={meal.recipeId} />


            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="mt-5">
      <b>{props.title}</b>
      {hasRecipes ? (
        <div className="flex">{mealElements}</div>
      ) : (
        <p className="mt-3 text-secondary">Aucune recette trouvée</p>
      )}     
    </div>
  );
}

export default RecipeCard;
