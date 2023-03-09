import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Form from "react-bootstrap/Form";

export default function FormAddRecipe({ showAddModal, handleAddModalClose }) {
  const [title, setTitle] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState("");
  const [ingredientUnit, setIngredientUnit] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleAddIngredient = (e) => {
    e.preventDefault();
    const newIngredient = {
      name: ingredientName,
      quantity: ingredientQuantity,
      unit: ingredientUnit,
      category: selectedOption
    };
    setIngredients([...ingredients, newIngredient]);
    setIngredientName("");
    setIngredientQuantity("");
    setIngredientUnit("");
    setSelectedOption("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {
      title,
      preparationTime,
      servings,
      image,
      instructions
    };
    // Call the function to handle the form submission
  };

  const options = [
    { value: "0", label: "Fruits - Légumes" },
    { value: "1", label: "Viande" },
    { value: "2", label: "Poisson" },
    { value: "3", label: "Produits laitiers" },
    { value: "4", label: "Boissons" },
    { value: "5", label: "Céréales" },
    { value: "6", label: "Sucreries" },
    { value: "7", label: "Légumineuses" },
    { value: "8", label: "Graisses" },
    { value: "9", label: "Condiments" },
  ];

  return (
    <>
      {
        <Modal show={showAddModal} onHide={handleAddModalClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Ajouter une recette</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline bg-light border rounded-3">
                    <input
                      type="text"
                      id="title"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
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
                      value={preparationTime}
                      onChange={(e) => setPreparationTime(e.target.value)}
                    />
                    <label className="form-label" htmlFor="preparationTime">
                      Temps de préparation
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
                      value={servings}
                      onChange={(e) => setServings(e.target.value)}
                    />
                    <label className="form-label" htmlFor="servings">
                      Nombre de portions
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline bg-light border rounded-3">
                    <input
                      type="text"
                      id="image"
                      className="form-control"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                    <label className="form-label" htmlFor="image">
                      Url de l'image
                    </label>
                  </div>
                </div>
              </div>
              {/* <div className="row mb-4">
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
              </div> */}

              <div className="form-outline mb-4 bg-light border rounded-3">
                <textarea
                  className="form-control"
                  id="instructions"
                  rows="4"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                ></textarea>
                <label className="form-label" htmlFor="instructions">
                  Instructions
                </label>
              </div>

              <hr />
              <div className="card">
                <h4 className="ms-3">Ingrédient :</h4>
                <div className="row">
                  <div className="col-3">
                    <div className="form-outline bg-light border rounded-3">
                      <input
                        type="text"
                        id="ingredientName"
                        className="form-control"
                        value={ingredientName}
                        onChange={(e) => setIngredientName(e.target.value)}
                      />
                      <label className="form-label" htmlFor="ingredientName">
                        Nom
                      </label>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="form-outline bg-light border rounded-3">
                      <input
                        type="number"
                        id="ingredientQuantity"
                        className="form-control"
                        value={ingredientQuantity}
                        onChange={(e) => setIngredientQuantity(e.target.value)}
                      />
                      <label className="form-label" htmlFor="ingredientQuantity">
                        Quantité
                      </label>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="form-outline bg-light border rounded-3">
                      <input
                        type="text"
                        id="ingredientUnit"
                        className="form-control"
                        value={ingredientUnit}
                        onChange={(e) => setIngredientUnit(e.target.value)}
                      />
                      <label className="form-label" forHtml="ingredientUnit">
                        Unité
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
                    <Dropdown>
                      <DropdownToggle variant="light">
                        {selectedOption.label || "Catégorie"}
                      </DropdownToggle>
                      <DropdownMenu>
                        {options.map((option) => (
                          <DropdownItem
                            key={option.value}
                            value={option.value}
                            onClick={() => setSelectedOption(option)}
                          >
                            {option.label}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="col-1">
                    <div className="form-outline">
                      <button
                        id="ingredientAdd"
                        className="btn btn-success btn-block"
                        onClick={handleAddIngredient}
                      >
                        <i className="fas fa-add"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="ms-3 h5">Ingrédients ajoutés :</div>
                  <div className="card-text card">
                    <table className="table table-hover text-center">
                      <thead>
                        <tr>
                          <th scope="col">Quantité</th>
                          <th scope="col">Unité</th>
                          <th scope="col">Nom</th>
                          <th scope="col">Catégorie</th>
                        </tr>
                      </thead>
                      {ingredients.map((ing, index) => (
                        <tbody key={index}>
                          <tr>
                            <td>{ing.quantity}</td>
                            <td>{ing.unit}</td>
                            <td>{ing.name}</td>
                            {/* <td>{ing.selectedOption.label}</td> */}
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleAddModalClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
}
