
import React from 'react';
import './App.css';


const date = new Date();
const year = date.getFullYear();

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My Landing Page</h1>
      </header>
        <p>This is a simple landing page created using React.</p>
        <p>A quick brown fox jumps over the lazy dog</p>
      <footer>
        <p>&copy; My Landing Page {year}</p>
      </footer>
    </div>
  );
}

export default App;
