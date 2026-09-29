const API = "http://localhost:3001/autocaravanas";

export async function getAutocaravans() {
    const response = await fetch(`${API}/itens`);

    if (!response.ok) {
        throw new Error("Erro ao carregar autocaravanas");
    }

    return await response.json();
    
}