import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import "./LoginForm.css";

export default function LoginForm({ setUser, handleSwitchForm }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div className="card border-0 rounded-4 loginForm">
      <div className="card-body p-3 p-md-4 p-xl-5">
        <div className="row">
          <div className="col-12">
            <div className="mb-4">
              <h3>Sign in</h3>
              <p>
                Don&apos;t have account ?
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={handleSwitchForm}
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="row gy-3 overflow-hidden">
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  id="email"
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
                  id="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
                <label for="password" className="form-label">
                  Password
                </label>
              </div>
            </div>
            <div className="col-12">
              <div className="d-grid">
                <button className="btn btn-dark btn-lg" type="submit">
                  Log in
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}