import "./App.css";
import { Home, Landing, Detail, Form } from "./views"; //lo va a buscar al index
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation(); //es un Hook que lo utilizo para que me ayude a que la NavBar, se vea siempre, salvo en landing.
  return (
    <div className="App">
      <Routes>
        {location.pathname !== "/" && <NavBar />}
        <Route exact path="/" element={Landing} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/detail" element={Detail} />
        <Route path="/create" element={Form} />
      </Routes>
    </div>
  );
}

export default App;
