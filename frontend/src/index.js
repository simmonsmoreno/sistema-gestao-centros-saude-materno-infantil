// Import the necessary modules from the react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the main App component from the App.js file
import App from './App';

// Create a root DOM node using the element with the ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root DOM node
// The App component is wrapped in React's StrictMode to highlight potential problems in an application during development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);