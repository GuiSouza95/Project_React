import { NavLink } from "react-router-dom";

 const linkStyle = ({ isActive }) => {
    return isActive
      ? "font-bold text-orange-950 p-1 border-2 rounded-[4vw] border-solid border-orange-950"
      : "text-orange-950 hover:text-orange-950";
  };

export default function Navbar() {
    return (
        <nav className="bg-lime-800 border-b">
            <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
                <NavLink to="/" className="text-2xl text-orange-950 font-bold">
                    Autocaravanas
                </NavLink>
                <div className="flex gap-6">
                    <NavLink to="/" className={linkStyle}>
                        Início
                    </NavLink>
                    <NavLink to="/autocaravanas" className={linkStyle}>
                        Autocaravanas
                    </NavLink>
                    <NavLink to="/reservas" className={linkStyle}>
                        Reservas
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}