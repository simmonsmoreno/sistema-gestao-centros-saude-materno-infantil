import './App.css';

// Define the path to the logo image
const logoPath = `${process.env.PUBLIC_URL}/assets/images/logo.png`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoPath} alt="Logo" />
        <h2>
          Em desenvolvimento!
        </h2>
      </header>
    </div>
  );
}

// Export the App component as the default export
export default App;