import "./App.css";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <h1>MANA</h1>

        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
