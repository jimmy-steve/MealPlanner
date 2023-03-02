import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SimpleModal from "./SimpleModal";
import "./AddUser.scss";

class AddUser extends React.Component {
  constructor() {
    super();
    this.state = { userData: {}, showModal: false };
  }

  handleChange = (event) => {
    let currentState = { ...this.state.userData };
    currentState[event.target.name] = event.target.value;
    this.setState({ userData: currentState });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
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
        this.setState({ showModal: true });
        // alert("Une erreur s'est produite : " + error.message);
      });
  };

  render() {
    return (
      <>
        <div className="add-user-container marge_centrage">
          <div>
            <div id="main-wrapper" className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <div className="row no-gutters">
                        <div className="col-lg-6">
                          <div className="p-5">
                            <div className="mb-5">
                              <h3 className="h4 font-weight-bold text-theme app--title">
                                MealPlanner
                              </h3>
                            </div>

                            <h4 className=" mb-0 text-center">Register</h4>
                            <p className="text-muted mt-2 mb-5">
                              Enter your email address and password to access to
                              our beautiful app.
                            </p>

                            <form onSubmit={this.onSubmit}>
                              <div className="form-group">
                                <div>
                                  <label>Email</label>
                                  <input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                    title="Veuillez entrer une adresse email valide"
                                    required
                                    onChange={this.handleChange}
                                  />
                                  <div className="invalid-feedback">
                                    Please enter a valid email address.
                                  </div>
                                </div>
                                <div>
                                  <label>First Name</label>
                                  <input
                                    name="firstName"
                                    type="text"
                                    minLength="3"
                                    title="Veuillez entrer un nom d'au moins 3 caractères"
                                    required
                                    className="form-control"
                                    onChange={this.handleChange}
                                  />
                                </div>

                                <div>
                                  <label>Last Name</label>
                                  <input
                                    name="lastName"
                                    type="text"
                                    minLength="3"
                                    title="Veuillez entrer un prénom d'au moins 3 caractères"
                                    required
                                    className="form-control"
                                    onChange={this.handleChange}
                                  />
                                </div>

                                <div>
                                  <label>Password</label>
                                  <input
                                    minLength="6"
                                    title="Le mot de passe doit avoir une longueur minimale de 6 caractères."
                                    required
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    onChange={this.handleChange}
                                  />
                                </div>

                                <div className="container-valid text-center mt-3">
                                  <input
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-primary"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="col-lg-6 d-none d-lg-inline-block">
                          <div className="account-block rounded-right">
                            <div className="overlay rounded-right"></div>
                            <div className="account-testimonial">
                              <h4 className="text-white mb-4 app--title">
                                Bienvenue ! Welcome !
                              </h4>
                              <p className="lead text-white">
                                "Best investment i made for a long time. Can
                                only recommend it for other users."
                              </p>
                              <p>- Francis Et Gaëlle</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted text-center mt-3 mb-0">
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SimpleModal
          title={"Mail déja utilisé"}
          bodyTxt={"Cet email est déja utilisé, merci d'en saisir un autre"}
          handleCloseModal={this.handleCloseModal}
          showModal={this.state.showModal}
        ></SimpleModal>
      </>
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
