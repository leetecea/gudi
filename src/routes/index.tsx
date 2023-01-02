import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import Sobre from '../pages/Sobre'
import Beneficios from "../pages/Beneficios";
import Contato from '../pages/Contato'
import Agendar from '../pages/Agendar'

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/beneficios" element={<Beneficios />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/agendar" element={<Agendar />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
