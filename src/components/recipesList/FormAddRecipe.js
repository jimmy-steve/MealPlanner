import React, { useState } from "react";
import { Modal, Button, Dropdown, Form } from "react-bootstrap";
import axios from "axios";

export default function FormAddRecipe(props) {
  const API_URL = "http://localhost:8000";
  const [title, setTitle] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [servings, setServings] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [instructions, setInstructions] = useState("");
  const [notes, setNotes] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState("");
  const [ingredientUnit, setIngredientUnit] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const userProfileId = props.userId;

  const handleAddIngredient = (e) => {
    e.preventDefault();
    // if (!ingredientName || !ingredientQuantity || !ingredientUnit) {
    //   alert("Veuillez remplir tous les champs de l'ingrédient");
    //   return;
    // }

    const newIngredient = {
      name: ingredientName,
      quantity: ingredientQuantity,
      unit: ingredientUnit,
      category: selectedOption.value,
    };
    setIngredients([...ingredients, newIngredient]);
    setIngredientName("");
    setIngredientQuantity("");
    setIngredientUnit("");
    setSelectedOption("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipe = {
      title,
      pictureUrl,
      sourceUrl,
      instructions,
      notes,
      servings,
      preparationTime,
      cookingTime,
      ingredients,
      userProfileId,
    };

    try {
      await axios.post(`${API_URL}/api/Recipes`, recipe, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("recette ajoutée");
    } catch (error) {
      console.log(error);
    }
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

  function displayCategory(category) {
    switch (category) {
      case 0:
        return "Fruits - Légumes";
      case 1:
        return "Viande";
      case 2:
        return "Poisson";
      case 3:
        return "Produits laitiers";
      case 4:
        return "Boissons";
      case 5:
        return "Céréales";
      case 6:
        return "Sucreries";
      case 7:
        return "Légumineuses";
      case 8:
        return "Graisses";
      case 9:
        return "Condiments";
    }
  }

  console.log(displayCategory(0));

  return (
    <>
      {
        <Modal
          show={props.showAddModal}
          onHide={props.handleAddModalClose}
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title>Ajouter une recette</Modal.Title>
          </Modal.Header>

          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline bg-light border rounded-3">
                    <Form.Control
                      type="text"
                      id="title"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                    <Form.Label htmlFor="title">Nom de la recette</Form.Label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline bg-light border rounded-3">
                    <Form.Control
                      type="number"
                      id="preparationTime"
                      value={preparationTime}
                      onChange={(e) => setPreparationTime(e.target.value)}
                    />
                    <Form.Label htmlFor="preparationTime">
                      Temps de préparation
                    </Form.Label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline bg-light border rounded-3">
                    <Form.Control
                      type="number"
                      id="cookingTime"
                      value={cookingTime}
                      onChange={(e) => setCookingTime(e.target.value)}
                    />
                    <Form.Label htmlFor="cookingTime">
                      Temps de cuisson
                    </Form.Label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline bg-light border rounded-3">
                    <Form.Control
                      type="number"
                      id="servings"
                      value={servings}
                      onChange={(e) => setServings(e.target.value)}
                    />
                    <Form.Label htmlFor="servings">
                      Nombre de portions
                    </Form.Label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline bg-light border rounded-3">
                    <Form.Control
                      type="text"
                      id="pictureUrl"
                      value={pictureUrl}
                      onChange={(e) => setPictureUrl(e.target.value)}
                    />
                    <Form.Label htmlFor="pictureUrl">Url de l'image</Form.Label>
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
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline bg-light border rounded-3">
                    <Form.Control
                      type="text"
                      id="sourceUrl"
                      value={sourceUrl}
                      onChange={(e) => setSourceUrl(e.target.value)}
                    />
                    <Form.Label htmlFor="sourceUrl">
                      Url du site internet
                    </Form.Label>
                  </div>
                </div>
              </div>
              <div className="form-outline mb-4 bg-light border rounded-3">
                <Form.Control
                  id="instructions"
                  as="textarea"
                  rows={4}
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                ></Form.Control>
                <Form.Label htmlFor="instructions">Instructions</Form.Label>
              </div>
              <div className="form-outline mb-4 bg-light border rounded-3">
                <Form.Control
                  id="notes"
                  as="textarea"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></Form.Control>
                <Form.Label htmlFor="notes">Notes</Form.Label>
              </div>

              <hr />
              <div className="card">
                <h4 className="ms-3">Ingrédient :</h4>
                <div className="row">
                  <div className="col-3">
                    <div className="form-outline bg-light border rounded-3">
                      <Form.Control
                        type="text"
                        id="ingredientName"
                        value={ingredientName}
                        onChange={(e) => setIngredientName(e.target.value)}
                      />
                      <Form.Label htmlFor="ingredientName">Nom</Form.Label>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="form-outline bg-light border rounded-3">
                      <Form.Control
                        type="number"
                        id="ingredientQuantity"
                        value={ingredientQuantity}
                        onChange={(e) => setIngredientQuantity(e.target.value)}
                      />
                      <Form.Label htmlFor="ingredientQuantity">
                        Quantité
                      </Form.Label>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="form-outline bg-light border rounded-3">
                      <Form.Control
                        type="text"
                        id="ingredientUnit"
                        value={ingredientUnit}
                        onChange={(e) => setIngredientUnit(e.target.value)}
                      />
                      <Form.Label forHtml="ingredientUnit">Unité</Form.Label>
                    </div>
                  </div>
                  <div className="col-3">
                    <Dropdown>
                      <Dropdown.Toggle variant="light">
                        {selectedOption.label || "Catégorie"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {options.map((option) => (
                          <Dropdown.Item
                            key={option.value}
                            value={option.value}
                            onClick={() => setSelectedOption(option)}
                          >
                            {option.label}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
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
                            <td>{displayCategory(ing.category)}</td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                type="submit"
                onClick={props.handleAddModalClose}
              >
                Ajouter
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      }
    </>
  );
}
