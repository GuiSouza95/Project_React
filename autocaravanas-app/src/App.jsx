import AppRoute from "./Routes/AppRoute";
import Footer from "./components/master/Footer";
import Navbar from "./components/master/Navbar";
import "./App.css";

export default function App() {
  return (
        <div className="app">
          <Navbar />
          <main className="main-content">
            <AppRoute />
          </main>
          <Footer />    
        </div>
  );
}