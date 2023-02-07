import Home from "./routes/home";
import Mitgliedschaft from "./routes/mitgliedschaft";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mitgliedschaft" element={<Mitgliedschaft />}></Route>
      </Routes>
    </div>
  );
}

export default App;
