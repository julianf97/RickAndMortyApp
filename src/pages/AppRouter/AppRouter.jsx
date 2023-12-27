import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Presentacion from "../Presentacion/Presentacion";
import Characters from "../Characters/Characters";
import Episode from "../Episode/Episode";
import Location from "../Location/Location";
import CharacterPage from "../CharacterPage/CharacterPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/location" element={<Location />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
