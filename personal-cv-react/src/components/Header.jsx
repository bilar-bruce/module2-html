function Header({ darkMode, setDarkMode }) {
  return (
    <header className="card">
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
      <h1>Bruce Steven A. Bilar</h1>
      <p id="headersub">IT Student | Web Systems and Technologies</p>
    </header>
  );
}

export default Header;