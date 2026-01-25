import { Link } from "react-router-dom";
import "./login.css";
import { FaSignInAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import api from "../../api/api";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log("Login successful:", response.data);
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("userId", response.data.user._id);
        localStorage.setItem("userEmail", response.data.user.email);
        localStorage.setItem("userName", response.data.user.username);
      })
      .catch((error) => {
        console.error("There was an error logging in!", error);
      });
  };
  return (
    <div className="login-container">
      <Link to="/" className="back-button">
        <IoIosArrowBack /> Back
      </Link>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>
          <FaSignInAlt />
          Login
        </h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p className="register-link">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};
