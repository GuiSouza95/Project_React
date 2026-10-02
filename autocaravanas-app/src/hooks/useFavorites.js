import { useState, useEffect } from "react";

export default function useFavorites() {
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
        }else{
            setFavorites([...favorites, id]);
        }
    };

    return {
        favorites,
        toggleFavorite,
    };
}