import React from "react";
import Card from "react-bootstrap/Card";

function AddRecipeButton(props) {

  return (
    <>
      <Card
        className="border text-center mx-auto m-2"
        style={{ width: "200px", height: "200px" }}
      >
        <button
          className="btn empty-card-btn mt-5 bg-light"
          onClick={props.addRecipe}
        >
          + Ajouter une recette
        </button>
      </Card>
    </>
  );
}
export default AddRecipeButton;
