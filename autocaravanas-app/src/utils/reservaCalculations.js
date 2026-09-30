export function calcularDias(dataInicio, dataFim) {
    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);

    const diferenca = fim - inicio;

    return diferenca / (1000 * 60 * 60 * 24);
}


export function calcularPrecoTotal(dataInicio, dataFim, precoDia) {
    const dias = calcularDias(dataInicio, dataFim);

    return dias * precoDia;
}