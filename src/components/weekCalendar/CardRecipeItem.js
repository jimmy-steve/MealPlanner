import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function CardRecipeItem({ label }) {

  return (
    <div className="card recipe-card">
      <div
        className="card-body rounded-3"
      >
        <h5 className="card-title">{label}</h5>
      </div>
    </div>
  );
}
export default CardRecipeItem;
