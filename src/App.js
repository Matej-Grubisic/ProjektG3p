import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Naslovna from "./Components/Naslovna";
import Onama from "./Components/Onama";
import Lokacije from "./Components/Lokacije";
import Kontekst from "./Components/Kontekst";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Naslovna />}></Route>
        <Route path="/Onama" element={<Onama />}></Route>
        <Route path="/Lokacije" element={<Lokacije />}></Route>
        <Route path="/Narucite" element={<Kontekst />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
