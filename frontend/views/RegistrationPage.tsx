import "../styles/LandingPage.css";
import { useState } from "react";
import axios from "axios";

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  favoriteThing: string;
}

async function registerUser(payload: RegisterPayload) {
  try {
    const { data } = await axios.post<void>(
      "http://localhost:8080/createUser",
      payload,
      {
        headers: { "Content-Type": "application/json" },
        // withCredentials: true, // <- keep or drop depending on cookies/auth
      }
    );
    console.log("User created:", data);
  } catch (err) {
    console.error("Error creating user:", err);
  }
}

export default function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [favoriteThing, setFavoriteThing] = useState("");

  return (
    <div className="landing-page">
      <h1 className="WHOAMI-Header">WHOAREYOU</h1>
      <form className="login-form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          className="input"
        ></input>
        <input
          value={favoriteThing}
          onChange={(e) => setFavoriteThing(e.target.value)}
          placeholder="favorite thing"
          className="input"
        ></input>
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
          type="button"
          onClick={() => {
            registerUser({
              email,
              password,
              name,
              favoriteThing,
            });
          }}
        >
          REGISTER
        </button>
      </form>
    </div>
  );
}
