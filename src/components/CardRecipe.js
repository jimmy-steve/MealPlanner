import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import RecipeForm from "./RecipeForm";

function CardRecipe({ label, index, onDelete }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddRecipeClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleDeleteRecipe = () => {
    onDelete(index);
  };

  return (
    <div className="card border">
      <div className="card hero">
        <div className="card-body">
          <div className="text-end">
            <span
              className="material-symbols-outlined"
              onClick={handleDeleteRecipe}
            >
              close
            </span>
          </div>
        </div>
        <span className="card-footer">
          <h5 className="card-title mb-2">{label}</h5>
        </span>
      </div>

      <button onClick={handleAddRecipeClick} className="btn btn-sm">Ajouter recette</button>
      {isFormOpen && <RecipeForm onClose={handleCloseForm} />}
    </div>
  );
}
export default CardRecipe;
