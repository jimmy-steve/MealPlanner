import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import SimpleModal from "./SimpleModal";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { userData: {} };
    //
    // TODO: bind this to handleChange and onSubmit
    //https://reactjs.org/docs/handling-events.html
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleChange(event) {
    let currentState = { ...this.state.userData };
    currentState[event.target.name] = event.target.value;
    this.setState({ userData: currentState });
  }

  onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:8000/api/Auth/login", {
        email: this.state.userData.email,
        password: this.state.userData.password,
      })
      .then((response) => {
        console.log(response.data.message); // Affiche "success"
        this.props.history("/frame");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ showModal: true });
      });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const title = "Login incorrect";
    const bodyTxt = "Login ou mot de passe incorrect";
    return (
      <>
        <div className="login-container marge_centrage">
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

                            <h5 className=" mb-0 le_titre_de_la_page text-center">
                              Login
                            </h5>
                            <p className="text-muted mt-2 mb-5">
                              Enter your email address and password to access to
                              our beautiful app.
                            </p>

                            <form onSubmit={this.onSubmit}>
                              <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                  id="password"
                                  type="password"
                                  className="form-control"
                                  name="password"
                                  onChange={this.handleChange}
                                ></input>
                              </div>
                              <div className="text-center">
                                <input
                                  type="submit"
                                  className="btn btn-primary"
                                  value="LOGIN"
                                />
                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="col-lg-6 d-none d-lg-inline-block">
                          <div className="account-block rounded-right">
                            <div className="overlay rounded-right"></div>
                            <div className="account-testimonial">
                              <h4 className="text-white mb-4">
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
                    Don't have an account?
                    <Link to="/addUser">Register</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SimpleModal
          title={title}
          bodyTxt={bodyTxt}
          handleCloseModal={this.handleCloseModal}
          showModal={this.state.showModal}
        />
      </>
    );
  }
}

//eslint-disable-next-line
export default function (props) {
  const history = useNavigate();
  return <Login {...props} history={history} />;
}
