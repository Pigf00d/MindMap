import "../styles/LandingPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function handleLogin(email: string, password: string) {
  axios
    .post("http://localhost:8080/login", { email, password })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error fetching user:", error);
    });
}

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1 className="WHOAMI-Header">WHOAMI</h1>
      <form className="login-form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="input"
        ></input>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="input"
        ></input>
        <div className="buttons-container">
          <button onClick={() => handleLogin(email, password)}>LOGIN</button>
          <button
            className="register-link"
            onClick={() => navigate("/register")}
          >
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}
