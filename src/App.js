import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Replace the default React logo with your own image */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* Modify the text content */}
        <p>
          Welcome to My Awesome React App! {/* Change this line with your desired message */}
        </p>
        {/* Modify the link text and URL */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
