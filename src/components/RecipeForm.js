import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RecipeForm({ onClose }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici le code pour ajouter la nouvelle recette
    onClose();
  };

  return (
    <div className="recipe-form">
      <h3>Ajouter une recette</h3>
      <form onSubmit={handleSubmit} className="form-control">
        <div>
          <label htmlFor="title">Titre :</label>
          <input
            className="form-control"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingrédients :</label>
          <textarea
            id="ingredients"
            className="form-control"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="instructions">Instructions :</label>
          <textarea
            id="instructions"
            className="form-control"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button className="btn btn-sm btn-primary ml-2" type="submit">
            Ajouter
          </button>
          <button
            className="btn btn-sm btn-danger ml-2"
            type="button"
            onClick={onClose}
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}
export default RecipeForm;
