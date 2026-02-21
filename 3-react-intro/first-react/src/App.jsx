import "./App.css";
import About from "./pages/About";
import Background from "./components/Background";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}

export default App;
