import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import ErrorMessage from "../../components/UI/ErrorMessage";
import { useNavigate } from "react-router-dom";
import classes from "./App.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(UserContext);
  const navigate = useNavigate();

  const submitLogin = async () => {
    const requestOptions =  {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(
        `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
      ),
    };
    const response = await fetch(
      "https://wikkktor.herokuapp.com/api/auth/token",
      requestOptions
    );
    const data = await response.json();
    
    if (!response.ok) {
      setErrorMessage(data.detail);
    } else {
      setToken(data.access_token);
      navigate("/");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };

  return (
    <>
      <div className={classes.container}>
        <form className="ui form" onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center" }} className="ui header">
            Login
          </h1>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                placeholder="Enter your username"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                required
              />
            </div>
            <ErrorMessage message={errorMessage} />
          </div>
          <div style={{ width: "100%", textAlign: "center" }}>
            <button className="ui inverted button" type="submit">
              Login
            </button>
          </div>
          <a href="/register">Register</a><br/>
          <a href="/">Back to main page</a>
        </form>
      </div>
    </>
  );
};
export default Login;
