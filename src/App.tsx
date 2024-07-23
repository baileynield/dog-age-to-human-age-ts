import "./App.css";
import Calculator from "./Calculator";

function App() {
  return (
    <>
      <header>
        <h1>Dog Age to Human Age</h1>
        <p>Given a dogs age in human years, this app will convert their age to dog years</p>
      </header>
      <main>
        <Calculator />
      </main>
    </>
  );
}

export default App
