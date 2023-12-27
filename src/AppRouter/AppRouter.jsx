import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Presentacion from "../pages/Presentacion/Presentacion";
import Characters from "../pages/Characters/Characters";
import Episode from "../pages/Episode/Episode";
import Location from "../pages/Location/Location";
import CharacterPage from "../pages/CharacterPage/CharacterPage";

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
