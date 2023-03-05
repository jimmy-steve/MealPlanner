import React, { useState, useEffect } from "react";
import "./RecipeCard.scss";

function RecipeCard(props) {
  const [mealList, setMealList] = useState([]);

  useEffect(() => {
    setMealList(props.recipes);
  }, [props.recipes]);
  
  const mealElements = mealList.map((meal) => (
    <div key={meal.recipeId}>      
      <div className="mt-3 me-3 card--container">
        <div className="card--img--container">
          <img
            src={meal.pictureUrl}
            alt={meal.title}
            className="card--img"
          />
        </div>
        <div className="card--text--container">
          <h4>{meal.title}</h4>
          <div className="row align-items-center">
            <div className="col-5">
              <span className="material-symbols-outlined">av_timer</span>
              <span className="align-top m-1">
                {meal.preparationTime} min
              </span>
            </div>
            <div className="col-5">
              <span className="material-symbols-outlined">cooking</span>
              <span className="align-top m-1">
                {meal.cookingTime} min
              </span>
            </div>
            <div className="col-2">
              <button className="material-symbols-outlined  card--button">more_vert</button>              
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
  

  return (
    <div className="mt-5">
      <b>{props.title}</b>
      <div className="flex">      
        {mealElements}
      </div>
    </div>    
  );
}

export default RecipeCard;
