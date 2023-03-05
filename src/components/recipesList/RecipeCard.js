import React, { useState, useEffect } from "react";
import "./RecipeCard.scss";
import DetailModal from "../weekCalendar/DetailModal";

function RecipeCard(props) {
  const hasRecipes = Array.isArray(props.recipes) && props.recipes.length > 0;
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleModalShow = (meal) => {
    setSelectedRecipe(meal);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedRecipe(null);
    setShowModal(false);
  };

  const [mealList, setMealList] = useState([]);

  useEffect(() => {
    setMealList(props.recipes);
  }, [props.recipes]);

  const mealElements = mealList.map((meal) => (
    <div key={meal.recipeId}>
      <div className="mt-3 me-3 card--container">
        <div className="card--img--container">
          <img src={meal.pictureUrl} alt={meal.title} className="card--img" onClick={() => handleModalShow(meal)} />
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
            <div className="col-2">
              <button className="material-symbols-outlined card--button">
                more_vert
              </button>
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
      <DetailModal
        selectedRecipe={selectedRecipe}
        showModal={showModal}
        handleModalClose={handleModalClose}
      />   
    </div>
  );
}

export default RecipeCard;
