export default function Navbar() {
    return (
        <nav className="bg-lime-800 border-b">
            <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">
                <a href="/" className="text-2xl text-orange-950 font-bold">
                    Autocaravanas
                </a>
                <div className="flex gap-6">
                    <a href="/" className="text-orange-950 hover:text-black">
                        Início
                    </a>
                    <a href="/autocaravanas" className="text-orange-950 hover:text-black">
                        Autocaravanas
                    </a>
                    <a href="/reservas" className="text-orange-950 hover:text-black">
                        Reservas
                    </a>
                </div>
            </div>
        </nav>
    );
}