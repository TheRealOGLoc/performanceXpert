import { Component } from "react";
import { signUp } from "../../utilities/users-service";
import "./SignUpForm.css";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;

      const user = await signUp(formData);

      this.props.setUser(user);
    } catch {
      this.setState({ error: "sign up failed - try again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="card border-0 rounded-4 signUpForm">
        <div className="card-body p-3 p-md-4 p-xl-5">
          <div className="row">
            <div className="col-12">
              <div className="mb-4">
                <h3>Sign up</h3>
                <p>
                  Already have an account{" "}
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={this.props.handleSwitchForm}
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </div>
          </div>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="row gy-3 overflow-hidden">
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="name"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="name@example.com"
                    required
                  />
                  <label for="name" className="form-label">
                    Name
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="name@example.com"
                    required
                  />
                  <label for="email" className="form-label">
                    Email
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                    required
                  />
                  <label for="password" className="form-label">
                    Password
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="confirm"
                    value={this.state.confirm}
                    onChange={this.handleChange}
                    placeholder="Password"
                    required
                  />
                  <label for="confirm" className="form-label">
                    Confirm
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="d-grid">
                  <button
                    className="btn btn-dark btn-lg"
                    type="submit"
                    disabled={disable}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}