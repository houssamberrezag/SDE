import { useState } from "react";
import { FaRegIdCard } from "react-icons/fa";
import "./register.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import api from "../../api/api";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    api
      .post("/auth/register", {
        username,
        email,
        password,
      })
      .then((response) => {
        console.log("Registration successful:", response.data);
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("userId", response.data.user._id);
        localStorage.setItem("userEmail", response.data.user.email);
        localStorage.setItem("userName", response.data.user.username);
      })
      .catch((error) => {
        console.error("There was an error registering!", error);
      });
  };

  return (
    <div className="register-container">
      <Link to="/" className="back-button">
        <IoIosArrowBack /> Back
      </Link>
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>
          <FaRegIdCard />
          Register
        </h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};
