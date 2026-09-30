import Button from "../common/Button";

export default function Autocaravan(props){

    return (
        <div className="border border-gray-200 rounded-x1 p-4 bg-white shadow-sm">
            <img src={props.imagem || "/imagem-placeholder.jpg"} alt={props.nome}/>

            <Button onClick={props.onToggleFavorite}>
                {props.isFavorite ? "❤️" : "♡"}
            </Button>

            <p>{props.nome}</p>

            <p>{props.descricao}</p>

            <div>
                <div>
                    <q>{props.categoria}</q>
                </div>

                <div>
                    <q>{props.localizacao}</q>
                </div>

                <h3>{props.precoDia}€ / dia</h3>

                <div>
                    <div>
                        <q>{props.capacidade} pessoas</q>
                    </div>

                    <div>
                        <q>{props.unidades}</q>
                    </div>

                    <h3>{props.avaliacao}</h3>
                </div>
            </div>
        </div>
    );
}