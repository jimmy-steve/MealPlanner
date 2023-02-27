import { Link, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
// import React from 'react';

export default function Header({ userInfo, setUserInfo }) {
  const history = useNavigate();

  const signout = () => {
    axios
      .post("http://localhost:8000/api/Auth/logout")
      .then((response) => {
        console.log(response.data.message);
        setUserInfo(null);
        history("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-brand mt-2 mt-lg-0">
            <Link className="nav-link" to="/home">
              <h2>MealPlanner</h2>
            </Link>
          </div>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/recipeListInterne">
                Liste de Recettes Interne
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/recipeListExterne">
                Liste de Recettes Externe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planning">
                Planifier la semaine
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-link">Liste d'ingrédients</div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/recipeDetails">
                Details d"une recette
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <div className="text-reset me-3">
            <div className="text-light">Bienvenue, {userInfo.firstName}</div>
          </div>

          <div className="dropdown"></div>

          <div className="dropdown">
            <div
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </div>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <div className="dropdown-item">Profil</div>
              </li>
              <li>
                <button
                  variant="secondary"
                  className="btn btn-danger"
                  onClick={signout}
                >
                  Se déconnecter
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
