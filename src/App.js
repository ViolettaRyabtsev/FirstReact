import logo from '/Users/wonderviolet/FirstReact/my-app/src/Youtube-logo-PNG-Image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div >
        <img src='https://scitechdaily.com/wp-content/uploads/sites/1/nggallery/amazing-science-photos-capture-world-in-different-light/Beautiful-Images-from-a-Microscope.jpg ' width="300" height="300" className='Main' alt="Main" />
      </div>
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
