import Button from "../common/Button";
import { Link } from "react-router-dom";

export default function Autocaravan(props){

    return (
        <div className="bg-white/65 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
            <img src={props.imagem || "/imagem-placeholder.jpg"} alt={props.nome} 
            className="w-full h-48 object-cover rounded-xl mb-2"/>

            <div className="flex justify-between items-center mt-5">
                <Button onClick={props.onToggleFavorite}>
                    {props.isFavorite ? "❤️" : "♡"}
                </Button>

                <Link to={`/autocaravanas/${props.id}`}>
                    <Button>
                        Ver detalhes
                    </Button>
                </Link>
            </div>

            <h2 className="text-xl font-bold mt-4">{props.nome}</h2>

            <p className="text-gray-600 mt-2">{props.descricao}</p>

            <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Tipo: {props.categoria}
                </span>

                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    📍 {props.localizacao}
                </span>
            </div>

            <p className="text-xl font-bold mt-4">
                {props.precoDia}€ / dia
            </p>

            <div className="grid grid-cols-3 gap-2 mt-4 text-sm text-gray-600">
                <div>
                    <p className="font-medium text-gray-800">Capacidade</p>
                    <p>{props.capacidade} pessoas</p>
                </div>

                <div>
                    <p className="font-medium text-gray-800">Unidades</p>
                    <p>{props.unidades}</p>
                </div>

                <div>
                    <p className="font-medium text-gray-800">Avaliação</p>
                    <p>⭐ {props.avaliacao}</p>
                </div>
            </div>
        </div>
    );
}