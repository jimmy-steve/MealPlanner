import React from "react";
import "./RecipeCard.scss";

function RecipeCard(props) {
  const [mealList, setMealList] = React.useState([props.recipes]);
  console.error("RecipeCard" + props.recipes)

  const mealElements = mealList.map((meal) => (
    <div key={meal.recipeId}>
      <div className="m-3 card--container">
        <div className="card--img--container">
          <img
            src={meal.pictureUrl}
            alt={meal.title}
            className="card--img"
          />
        </div>
        <div className="card--text--container">
          <h4>{meal.title}</h4>
          <div className="row">
            <div className="col">
              <span className="material-symbols-outlined">av_timer</span>
              <span className="align-top m-1">
                {meal.preparationTime} min
              </span>
            </div>
            <div className="col">
              <span className="material-symbols-outlined">cooking</span>
              <span className="align-top m-1">
                {meal.cookingTime} min
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="flex">
      {mealElements}
    </div>
  );
}

export default RecipeCard;
