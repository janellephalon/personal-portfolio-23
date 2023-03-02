// Files and Packages
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills, SKills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
