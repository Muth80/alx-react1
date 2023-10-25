import React from 'react'; // Import React
import logo from './src/logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1> {/* Added an h1 with the text School dashboard */}
      </header>
      <div className="App-body"> {/* Added a div with a class named App-body */}
        <p>Login to access the full dashboard</p> {/* Added a paragraph with the specified text */}
      </div>
      <div className="App-footer"> {/* Added a div with a class named App-footer */}
        <p>Copyright 2020 - Holberton School</p> {/* Added a paragraph with the specified text */}
      </div>
    </div>
  );
}

export default App;

