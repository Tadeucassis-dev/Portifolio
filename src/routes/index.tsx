import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Contato from "../pages/Contato";
import Home from "../pages/Home";
import Projetos from "../pages/Projetos";
import Sobre from "../pages/Sobre";
import NavBar from "../components/NavBar";

export default function Rotas() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}


