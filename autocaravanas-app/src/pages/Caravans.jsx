import { useEffect, useState } from "react";
import { getAutocaravans } from "../services/api";
import Autocaravan from "../components/caravans/AutocaravanCard";

export default function Caravans() {
    const [autocaravans, setAutocaravans] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        getAutocaravans()
            .then((dados) => {
                setAutocaravans(dados);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    const caravansFilter = autocaravans.filter((caravans) => caravans.nome.toLowerCase().includes(search.toLowerCase()));

    return(
        <div className="nature-background flex-1 px-6 py-10">

            <div className="flex justify-between">
                <div>
                    <h1 className="mb-8 text-3x1 front-bold text-gray-800">Autocaravanas</h1>
                </div>

                <div>
                    <input type="text" placeholder="Pesquisar..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 border border-gray-300 p-6 rounded-x1">
                {caravansFilter.map((caravans) => (
                    <Autocaravan
                    key={caravans.id}
                    {...caravans}
                    />
                ))}
            </div>
        </div>
    );
}