import "./App.css";
import Key from "./components/Key";
import Letter from "./components/Letter";

function App() {
  return (
    <>
      <h1>Neriodle</h1>
      <div className="container">
        <Key>Q</Key> 
        <Key>W</Key>
        <Key>E</Key>
        <Key>R</Key>
        <key>Enviar</key>
      </div>
    </>
  );
}

export default App;
