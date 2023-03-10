import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const handleDeleteClick = async (event) => {
  event.stopPropagation();
  console.log("handleDeleteClick");
  alert("ëtes vous sur de vouloir supprimer cette recette ?");
  //TODO: delete recipe
};

function CardRecipe({ title, pictureUrl, recipeId, onAddRecipe }) {
  return (
    <div className="card recipe-card mt-2">
      <div className="card-body">
        <button
          className="btn btn-outline-dark btn-sm position-absolute top-0 end-0 m-2"
          onClick={handleDeleteClick}
        >
          <span class="material-symbols-outlined">close</span>
        </button>
        <img src={pictureUrl} alt={pictureUrl} className="card--img" />
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
}
export default CardRecipe;
