import React, { useState } from "react";
import Script from "./Script";

const Login = () => {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <div className="container">
      {/* Login Form */}
      <div className={`form-box ${activeForm === "login" ? "active" : ""}`} id="login">
        <form action="register.php" method="post">
          <h1>Login</h1>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit" name="login">Login</button>
          <p>
            Don't have an account?{" "}
            <a href="#" onClick={() => setActiveForm("register")}>
              Register
            </a>
          </p>
        </form>
      </div>

      {/* Register Form */}
      <div className={`form-box ${activeForm === "register" ? "active" : ""}`} id="register">
        <form action="register.php" method="post">
          <h1>Register</h1>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit" name="register">Register</button>
          <p>
            Already have an account?{" "}
            <a href="#" onClick={() => setActiveForm("login")}>
              Login
            </a>
          </p>
        </form>
      </div>

      {/* Script Component */}
      <Script formId={activeForm} />
    </div>
  );
};

export default Login;
