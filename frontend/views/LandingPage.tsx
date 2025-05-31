import "../styles/LandingPage.css";
import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <button
          onClick={() => {
            setEmail("");
            setPassword("");
          }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
