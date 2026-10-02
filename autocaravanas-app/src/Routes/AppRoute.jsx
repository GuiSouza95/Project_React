import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Caravans from "../pages/Caravans";
import CaravanDetails from "../pages/CaravanDetails";
import Reservations from "../pages/Reservations";
import NotFound from "../pages/NotFound";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/autocaravanas" element={<Caravans />} />
      <Route
        path="/autocaravanas/:id"
        element={<CaravanDetails />}
      />
      <Route path="/reservas" element={<Reservations />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}