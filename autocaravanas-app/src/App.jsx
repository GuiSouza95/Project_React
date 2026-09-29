import { Routes, Route } from "react-router-dom";
import AppRoute from "./Routes/AppRoute";
import Footer from "./components/master/Footer";
import Navbar from "./components/master/Navbar";

export default function App() {
  return (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">
            <AppRoute />
          </div>
          <Footer />    
        </div>
  );
}