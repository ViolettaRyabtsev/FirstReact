import logo from '/Users/wonderviolet/FirstReact/my-app/src/Youtube-logo-PNG-Image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />


      <a
        className="App-link"
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Search what you want
        </a>

    </div>
  );
}

export default App;
