const API = "http://localhost:3001/autocaravanas";

export {
  getAutocaravans,
  getAutocaravansById,
  verificarDisponibilidade,
  criarReserva,
  getReservas,
  cancelarReserva,
};

async function getAutocaravans() {
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

async function verificarDisponibilidade(id, dataInicio, dataFim, quantidade) {
  const response = await fetch(
    `${API}/itens/${id}/disponibilidade?inicio=${dataInicio}&fim=${dataFim}&quantidade=${quantidade}`,
  );

  const dados = await response.json();

  if (!response.ok) {
    throw new Error(dados.erro || "Erro ao verificar disponibilidade");
  }

  return dados;
}

async function criarReserva(reserva) {
  const response = await fetch(`${API}/reservas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reserva),
  });

  const dados = await response.json();

  if (!response.ok) {
    throw new Error(dados.erro || "Erro ao criar reserva");
  }

  return dados;
}

async function getReservas() {
  const response = await fetch(`${API}/reservas`);

  if (!response.ok) {
    throw new Error("Erro ao carregar reservas");
  }

  return await response.json();
}

async function cancelarReserva(id) {
  const response = await fetch(`${API}/reservas/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao cancelar reserva");
  }

  return true;
}
