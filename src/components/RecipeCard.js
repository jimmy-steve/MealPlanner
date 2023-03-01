import React from "react";
import axios from "axios";
import "./RecipeCard.scss";

function RecipeCard() {
  const [mealList, setMealList] = React.useState([]);

  const fetchMealListWithIngredient = () => {
    axios.get("http://localhost:8000/api/Recipes").then((response) => {
      setMealList(response.data);
    });
  };

  React.useEffect(() => {
    fetchMealListWithIngredient();
  }, []);

  return (
    <div className="flex">
      {mealList.map((meal) => (
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
                  <span className="align-top m-1">{meal.cookingTime} min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeCard;
