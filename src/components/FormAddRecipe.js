import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function FormAddRecipe({ showModal, handleModalClose }) {
  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    const newIngredient = { name: ingredientName, quantity, unit };
    setIngredients([...ingredients, newIngredient]);
    setIngredientName("");
    setQuantity(0);
    setUnit("");
  };

  return (
    <>
      {/* Modal */}
      {
        <Modal show={showModal} onHide={handleModalClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{"Ajouter une recette"}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline bg-light border rounded-3">
                    <input type="text" id="title" className="form-control" />
                    <label className="form-label" htmlFor="title">
                      Nom de la recette
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline bg-light border rounded-3">
                    <input
                      type="number"
                      id="preparationTime"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="preparationTime">
                      Temps de préparations
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline bg-light border rounded-3">
                    <input
                      type="number"
                      id="servings"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="servings">
                      Nombre de portions
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="custom-file bg-light border rounded-3">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                    >
                      Choisir une image
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-outline mb-4 bg-light border rounded-3">
                <textarea
                  className="form-control"
                  id="form4Example3"
                  rows="4"
                ></textarea>
                <label className="form-label" htmlFor="form4Example3">
                  Instruction
                </label>
              </div>

              <hr />
              <div className="card">
                <h4>Ingrédient :</h4>
                <div className="row">
                  <div className="col">
                    <div className="form-outline bg-light border rounded-3">
                      <input
                        type="text"
                        id="form8Example3"
                        className="form-control"
                        value={ingredientName}
                        onChange={(e) => setIngredientName(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form8Example3">
                        Choisir ingrédient
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline bg-light border rounded-3">
                      <input
                        type="number"
                        id="form8Example4"
                        className="form-control"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form8Example4">
                        Quantité
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline bg-light border rounded-3">
                      <input
                        type="number"
                        id="form8Example5"
                        className="form-control"
                      />
                      <label className="form-label" for="form8Example5">
                        Unité
                      </label>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-outline">
                      <button
                        id="form8Example5"
                        className="btn btn-danger btn-block"
                      >
                        <i className="fas fa-add"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="mt-5">
                  <div class="text-center h4">Ingrédients ajouté:</div>
                  <div class="card-text card">
                    <table class="table table-hover text-center">
                      <thead>
                        <tr>
                          <th scope="col">Qte</th>
                          <th scope="col">Unité</th>
                          <th scope="col">Nom</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">2</th>
                          <td>entier</td>
                          <td>tomate</td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>Tasse</td>
                          <td>Riz</td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>lbs</td>
                          <td>Viande</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
}
