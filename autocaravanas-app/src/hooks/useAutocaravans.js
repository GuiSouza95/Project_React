import { useState, useEffect } from "react";
import { getAutocaravans } from "../services/api";

export default function useAutocaravans(){
    const [autocaravans, setAutocaravans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAutocaravans()
            .then((dados) => {
                setAutocaravans(dados);
            })
            .catch(() => {
                setError("Não foi possível carregar as autocaravanas.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    
    return{
        autocaravans,
        loading,
        error,
    };
}