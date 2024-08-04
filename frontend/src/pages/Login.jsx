import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin(); // Extracting login function and error state from the hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    login(email, password); // Calls the login function with email and password
  };

  return (
    <div className="form-container">
      <div className="form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}> {/* Attach the handleSubmit function to the form submission */}
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input type="submit" className="button" value='submit'/> {/* Use a button with type="submit" */}
        </form>
        {error && <div className="error">{error.error}</div>} {/* Conditionally render the error message if there is an error */}
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;