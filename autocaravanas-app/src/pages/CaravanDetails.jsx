import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getAutocaravansById } from "../services/api";

export default function CaravanDetails() {

    const { id } = useParams();

    const [caravan, setCaravan] = useState(null);

    useEffect(() => {

        async function carregarCaravan() {
            const dados = await getAutocaravansById(id);

            setCaravan(dados);
        }

        carregarCaravan();

    }, [id]);


    if (!caravan) {
        return <p>A carregar...</p>;
    }


    return (
        <div>
            <h1>{caravan.nome}</h1>

            <p>{caravan.descricao}</p>

            <p>
                Preço: {caravan.precoDia} € / dia
            </p>
        </div>
    );
}