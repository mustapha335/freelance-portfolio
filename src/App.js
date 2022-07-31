import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
// import Navbar from "./components/NavBar/Navbar";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
