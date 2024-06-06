import "./styles.css";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1> Product Roadmap</h1>
        <Roadmap />
      </div>
    </div>
  );
}

export default App;
