// Import the CSS for the App
import './App.css';

// Define the App component
function App() {
  // The component returns the JSX to render
  return (
    // A div with class "App" is the main container
    <div className="App">
      // The header of the App contains the logo and a message
      <header className="App-header">
        // The logo is an image with source "csmi-logo.png" and alt text "logo"
        <img src="csmi-logo.png" className="" alt="logo" />
        // The message is a paragraph saying "Brevemente!"
        <p>
          Brevemente!
        </p>
      </header>
    </div>
  );
}

// Export the App component as the default export
export default App;