import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function CardRecipe({ title, pictureUrl, recipeId, onAddRecipe }) {
  return (
    <div className="card recipe-card mt-2">
      <div className="card-body">
        <img
          src={pictureUrl}
          alt={pictureUrl}
          className="card--img"
        />
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
}
export default CardRecipe;
