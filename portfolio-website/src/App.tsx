import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="dark:bg-black h-screen">
        <NavBar />
        <Hero />
      </div>
    </>
  );
}

export default App;
