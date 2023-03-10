import React, { useState, useEffect } from "react";
import RecipeMoreButton from "./RecipeMoreButton";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import axios from "axios";
import "./RecipeCard.scss";
import DetailModal from "../weekCalendar/DetailModal";

function RecipeCard(props) {
  const hasRecipes = Array.isArray(props.recipes) && props.recipes.length > 0;
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleDetailModalShow = (meal) => {
    setSelectedRecipe(meal);
    setShowDetailModal(true);
  };

  const handleDetailModalClose = () => {
    setSelectedRecipe(null);
    setShowDetailModal(false);
  };

  const [mealList, setMealList] = useState([]);
  const [action, setAction] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleMoreClick = (recipeId, action, event) => {
    setAction(action);
    if (action === "add") {
      console.log("action ADD");
      const searchParams = new URLSearchParams(location.search);
      const dateClicked = searchParams.get("date");
      const dateString = dayjs(dateClicked).format("YYYY-MM-DD");
      console.log("dateString: " + dateString);
      event.preventDefault();
      axios
        .post(
          "http://localhost:8000/AddRecipeToDayWithDate?recipeId=" +
            recipeId +
            "&date=" +
            dateString
        )
        .then((response) => {
          console.log(response.data);
          const eventKey = "planning";
          const source = "add";
          const searchParams = new URLSearchParams();
          searchParams.append("tab", eventKey);
          searchParams.append("source", source);
          navigate("/mainFrame?" + searchParams.toString());
        })
        .catch((error) => console.log(error));

      // Perform add action
    } else if (action === "modify") {
      console.log("action MODIFY");
      // Perform modify action
    }
  };

  useEffect(() => {
    setMealList(props.recipes);
  }, [props.recipes]);
  console.log("Card Recipes: " + mealList)

  const mealElements = mealList.map((meal) => (
    <div key={meal.recipeId}>
      <div className="mt-3 me-3 card--container">
        <div className="card--img--container">
          <img src={meal.pictureUrl} alt={meal.title} className="card--img" onClick={() => handleDetailModalShow(meal)} />
        </div>
        <div className="card--text--container">
          <h4>{meal.title}</h4>
          <div className="row">
            <div className="col-5 align-self-end">
              {meal.preparationTime !== 0 && meal.preparationTime != null ? (
                <span>
                  <span className="material-symbols-outlined">av_timer</span>
                  <span className="align-top m-1">
                    {meal.preparationTime} min
                  </span>
                </span>
              ) : (
                <span></span>
              )} 
            </div>
            <div className="col-5 align-self-end">
              {meal.cookingTime !== 0 && meal.cookingTime != null ? (
                <span>
                  <span className="material-symbols-outlined">cooking</span>
                  <span className="align-top m-1">{meal.cookingTime} min</span>
                </span>
              ) : (
                <span></span>
              )}
            </div>

            <div className="col-2 container">
              <RecipeMoreButton
                onClick={handleMoreClick}
                action={action}
                recipeId={meal.recipeId}
              />
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
        showDetailModal={showDetailModal}
        handleDetailModalClose={handleDetailModalClose}
      />   
    </div>
  );
}

export default RecipeCard;
