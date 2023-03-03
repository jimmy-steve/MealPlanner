import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CardRecipeItem from "./CardRecipeItem";

function CardRecipe({ label, index, onAddRecipe }) {
  return (
    <div className="card recipe-card">
      <div className="card-body">
      <img
            src={("image1.jpg")}
            alt="test"
            className="card--img"
          />
      {/* <CardRecipeItem label={label}/> */}
      <h5 className="card-title">{label}</h5>
      </div>
    </div>
  );
}
export default CardRecipe;
