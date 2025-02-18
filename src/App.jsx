import "./App.css";
import Board from "./components/Board/Board";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import Alert from "./components/Alert/Alert";

function App() {
  return (
    <div className="app">
      <Alert />
      <Info />
      <Board />
      <Footer />
    </div>
  );
}

export default App;
