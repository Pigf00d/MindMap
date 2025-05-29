import "../styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1 className="WHOAMI-Header">WHOAMI</h1>
      <input value="email" className="input"></input>
      <input value="password" className="input"></input>
      <button>LOGIN</button>
    </div>
  );
}
