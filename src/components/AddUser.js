import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./AddUser.scss";

class AddUser extends React.Component {
  constructor() {
    super();
    this.state = { userData: {} };
  }

  handleChange = (event) => {
    let currentState = { ...this.state.userData };
    currentState[event.target.name] = event.target.value;
    this.setState({ userData: currentState });
  };

  onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    axios.defaults.withCredentials = true;

    axios
      .post("http://localhost:8000/api/Auth/register", {
        ...this.state.userData,
      })
      .then((response) => {
        console.log(response.data);
        alert("Inscription réussie !");

        this.props.history("/login");
      })
      .catch((error) => {
        alert("Une erreur s'est produite : " + error.message);
      });
  };

  render() {
    return (
      <div className="add-user-container">
        <div>
          <h1>M'inscrire</h1>
          <div>
            <form onSubmit={this.onSubmit}>
              <div>
                <label>email</label>
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>FirstName</label>
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <label>LastName</label>
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <label>password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>
              <div className="container-valid text-center">
                <input
                  type="submit"
                  value="Valider"
                  className="btn btn-primary"
                  onChange={this.handleChange}
                />
              </div>
            </form>
          </div>
          <div>
            <Link to="/">Retour à l'accueil</Link>
          </div>
        </div>
      </div>
    );
  }
}

// Wrap and export
// export default function (props) {
//   const history = useNavigate();
//   return <AddUser {...props} history={history} />;
// }
//eslint-disable-next-line
export default function (props) {
  const history = useNavigate();
  return <AddUser {...props} history={history} />;
}
