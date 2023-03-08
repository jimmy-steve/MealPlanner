import React from "react";
import "./RecipesList.scss";

function RecipesMoreButton(props) {
  const { onClick, recipeId } = props;

  return (
    <>
      <div className="dropdown">
        <div
          className="dropdown-toggle d-flex  hidden-arrow"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <button className="material-symbols-outlined card--button">
            more_vert
          </button>
        </div>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <div
              onClick={(event) => onClick(recipeId, "add", event)}
              className="dropdown-item btn"
            >
              Ajouter
            </div>
          </li>
          <li>
            <div
              onClick={(event) => onClick(recipeId, "modify",event)}
              className="dropdown-item btn"
            >
              Modifier
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default RecipesMoreButton;
