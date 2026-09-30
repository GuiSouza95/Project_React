import { useEffect, useState } from "react";
import { getAutocaravans } from "../services/api";
import Autocaravan from "../components/caravans/AutocaravanCard";

export default function Caravans() {
    const [autocaravans, setAutocaravans] = useState([]);

    useEffect(() => {
        getAutocaravans()
            .then((dados) => {
                setAutocaravans(dados);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    return(
        <div className="nature-background flex-1 px-6 py-10">

            <h1 className="mb-8 text-3x1 front-bold text-gray-800">Autocaravanas</h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 border border-gray-300 p-6 rounded-x1" >
                {autocaravans.map((caravans) => (
                    <Autocaravan
                    key={caravans.id}
                    {...caravans}
                    />
                ))}
            </div>
        </div>
    );
}