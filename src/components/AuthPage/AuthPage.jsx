import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";
import backgroundImage from "../../images/signIn.jpg";
import "./AuthPage.css";

function AuthPage({ setUser }) {
  const [showLogInForm, setShowLogInForm] = useState(true);

  function handleSwitchForm() {
    setShowLogInForm(!showLogInForm);
  }

  return (
    <main>
      <section
        className="bg-primary py-3 py-md-5 py-xl-8 authBackground"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-12 col-md-6 col-xl-7">
              <div className="d-flex justify-content-center text-bg-primary">
                <div className="col-12 col-xl-9"></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-5">
              {showLogInForm ? (
                <>
                  <LoginForm
                    setUser={setUser}
                    handleSwitchForm={handleSwitchForm}
                  />
                </>
              ) : (
                <>
                  <SignUpForm
                    setUser={setUser}
                    handleSwitchForm={handleSwitchForm}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AuthPage;