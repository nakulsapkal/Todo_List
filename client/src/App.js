import logo from "./logo.svg";
import "./App.css";
import Navbar from "./MyComponents/Navbar";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import Todo from "./MyComponents/Todo";

function App() {
  return (
    <>
      <Navbar />
      <Todos />
      <Footer />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
