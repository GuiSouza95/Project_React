export default function Autocaravana(props){

    return (
        <>
            <img src={props.image} alt={props.nome}/>

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
        </>
    );
}