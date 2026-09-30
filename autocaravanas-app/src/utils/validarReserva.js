export function validarReserva(dataInicio, dataFim, viajantes, capacidade) {

    if (!dataInicio || !dataFim) {
        return "Preencha as duas datas.";
    }

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const inicio = new Date(dataInicio);

    if (inicio < hoje) {
        return "A data de levantamento não pode ser anterior a hoje.";
    }

    if (dataFim <= dataInicio) {
        return "A data de devolução deve ser posterior à data de levantamento.";
    }

    if (viajantes < 1) {
        return "O número de viajantes deve ser pelo menos 1.";
    }

    if (viajantes > capacidade) {
        return `Esta autocaravana suporta no máximo ${capacidade} viajantes.`;
    }

    return "";
}