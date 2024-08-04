import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import Login from "./Login";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {register, error} = useRegister()
  const submitHandler = (e)=>{
    e.preventDefault()
    register(email, username, password)
  }
  return (
    <div className="form-container">
      <div className="form">
        <h1>Register</h1>

        <form>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <input type="submit" value="submit" className="button" onClick={submitHandler} />
        {error && <div className="error">{error.error}</div>}
        </form>
        <p>
          already have an account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
