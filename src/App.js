import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/portfolio";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
