export function validarReserva(dataInicio, dataFim, viajantes, capacidade) {

    if (!dataInicio || !dataFim) {
        return "Preencha as duas datas.";
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