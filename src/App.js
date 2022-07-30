import "./App.css";
import About from "./components/About/About";
// import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className='App'>
      <Home />
      {/* <Navbar /> */}
      <About />
    </div>
  );
}

export default App;
