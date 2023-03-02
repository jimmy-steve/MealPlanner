import { Link, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import "./Header.scss";
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
            <Link className="nav-link" to="/frame">
              <h2 className="nav--title">MealPlanner</h2>
            </Link>
          </div>
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
