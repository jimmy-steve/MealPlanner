import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ModalDetail({
  selectedRecipe,
  showModal,
  handleModalClose,
}) {
  return (
    <>
      {/* Modal */}
      {selectedRecipe && (
        <Modal show={showModal} onHide={handleModalClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{selectedRecipe.title || "RecipeDetail"}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="card">
              <div className="row g-0">
                <div className="col-sm-4 ms-5 mt-4 card">
                  <img
                    src={selectedRecipe.pictureUrl}
                    className="h-100 card-img"
                    alt="recette"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-sm-6">
                  <div className="card-body">
                    <h5 className="">
                      <h1 className="ms-5 m-2 mb-5 recipe--title">
                        {selectedRecipe.title}
                      </h1>
                    </h5>
                    <h4 className="ms-4 mt-4">
                      Temps de préparation :
                      <span className="badge rounded-pill bg-primary me-4 ms-2">
                        {selectedRecipe.preparationTime} min
                      </span>
                    </h4>
                    <h4 className="ms-4 mt-4">
                      Nombre de portions :
                      <span className="badge rounded-pill bg-primary me-4 ms-2">
                        {selectedRecipe.servings}
                      </span>
                    </h4>
                  </div>
                </div>
                <div className="row mx-auto ms-1">
                  <div className="col m-3">
                    <div className="text-start h3">Instructions :</div>
                    <div className="card-text card">
                      <p>{selectedRecipe.instructions}</p>
                      {/* <ul className="list-group">
                        <li className="list-group-item">
                          1. Mélangé les ingrédients secs
                        </li>
                        <li className="list-group-item">
                          2. Mélangé les ingrédients humides
                        </li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">
                          Porta ac consectetur ac
                        </li>
                        <li className="list-group-item">Vestibulum at eros</li>
                      </ul> */}
                    </div>
                  </div>

                  <div className="col-5 m-3">
                    <div className="text-start h3">Ingrédients :</div>
                    <div className="card-text card">
                      <table className="table table-hover text-center">
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
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
