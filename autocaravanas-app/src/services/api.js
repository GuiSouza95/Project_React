const API = "http://localhost:3001/autocaravanas";

<<<<<<< Updated upstream
export async function getAutocaravans() {
=======
async function getAutocaravans() {
>>>>>>> Stashed changes
    const response = await fetch(`${API}/itens`);

    if (!response.ok) {
        throw new Error("Erro ao carregar autocaravanas");
    }

    return await response.json();
    
}

async function getAutocaravansById(id) {
    const response = await fetch(`${API}/itens/${id}`);

    if (!response.ok) {
        throw new Error("Erro ao carregar autocaravana");
    }

    return await response.json();
}

export {getAutocaravans, getAutocaravansById};