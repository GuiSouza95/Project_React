import { useEffect, useState } from "react";
import { getAutocaravans } from "../services/api";
import Autocaravan from "../components/caravans/AutocaravanCard";

export default function Caravans() {
    const [autocaravans, setAutocaravans] = useState([]);

    const [search, setSearch] = useState("");

    const [type, setType] = useState("");

    const [zone, setZone] = useState("");

    const [sort, setSort] = useState("");

    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    });

    useEffect(() => {
        getAutocaravans()
            .then((dados) => {
                setAutocaravans(dados);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const caravansFilter = autocaravans.filter((caravans) => caravans.nome.toLowerCase().includes(search.toLowerCase()) &&
    (type === "" || caravans.categoria.toLowerCase() === type.toLowerCase()) &&
    (zone === "" || caravans.localizacao.toLowerCase() === zone.toLowerCase())
    );

    const caravansSorted = [...caravansFilter].sort((a, b) => {
        if (sort === "preco-asc") {
            return a.precoDia - b.precoDia;
        }

        if (sort === "preco-desc") {
            return b.precoDia - a.precoDia;
        }

        if (sort === "avaliacao-asc") {
            return a.avaliacao - b.avaliacao;
        }

        if (sort === "avaliacao-desc") {
            return b.avaliacao - a.avaliacao;
        }

        return 0;
    });

    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
        }else{
            setFavorites([...favorites, id]);
        }
    };

    return(
        <div className="nature-background flex-1 px-6 py-10">

            <div className="flex justify-between">
                <div>
                    <h1 className="mb-8 text-3x1 front-bold text-gray-800">Autocaravanas</h1>
                </div>

                <div className="flex  items-center">
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="">Todos</option>
                        <option value="campervan">Campervan</option>
                        <option value="autocaravana">Autocaravana</option>
                    </select>

                    <select value={zone} onChange={(e) => setZone(e.target.value)}>
                        <option value="">Todas as zonas</option>
                        <option value="lisboa">Lisboa</option>
                        <option value="porto">Porto</option>
                        <option value="faro">Faro</option>
                    </select>

                    <input type="text" placeholder="Pesquisar..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
                </div>
            </div>

                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="">Ordernar por</option>
                    <option value="preco-asc">Preço: mais baixo</option>
                    <option value="preco-desc">Preço: mais alto</option>
                    <option value="avaliacao-asc">Avaliação: mais baixa</option>
                    <option value="avaliacao-desc">Avaliação mais alta</option>
                </select>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 border border-gray-300 p-6 rounded-x1">

                {caravansSorted.map((caravans) => (
                    <Autocaravan
                    key={caravans.id}
                    {...caravans}
                    isFavorite={favorites.includes(caravans.id)}
                    onToggleFavorite={() => toggleFavorite(caravans.id)}
                    />
                ))}
            </div>
        </div>
    );
}