import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getAutocaravansById,
  verificarDisponibilidade,
  criarReserva,
} from "../services/api";
import { validarReserva } from "../utils/validarReserva";
import Button from "../components/common/Button";
import { calcularDias, calcularPrecoTotal } from "../utils/reservaCalculations";

export default function CaravanDetails() {
  const { id } = useParams();
  const [caravan, setCaravan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [viajantes, setViajantes] = useState(1);
  const [mensagemErro, setMensagemErro] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [disponibilidade, setDisponibilidade] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const datasValidas = dataInicio && dataFim && dataFim > dataInicio;

  const dias = datasValidas ? calcularDias(dataInicio, dataFim) : 0;

  const precoTotal = datasValidas
    ? calcularPrecoTotal(dataInicio, dataFim, caravan?.precoDia)
    : 0;

  async function handleValidarReserva() {
    const erro = validarReserva(
      dataInicio,
      dataFim,
      viajantes,
      caravan.capacidade,
      nome,
      email,
    );

    setMensagemErro("");
    setMensagemSucesso("");
    setDisponibilidade(null);

    if (erro) {
      setMensagemErro(erro);
      return;
    }

    try {
      const dados = await verificarDisponibilidade(
        id,
        dataInicio,
        dataFim,
        viajantes,
      );

      setDisponibilidade(dados.disponivel);
    } catch (erro) {
      setMensagemErro(erro.message);
    }
  }

  async function handleCriarReserva() {
    const erro = validarReserva(
      dataInicio,
      dataFim,
      viajantes,
      caravan.capacidade,
      nome,
      email,
    );

    if (erro) {
      setMensagemErro(erro);
      return;
    }

    setMensagemErro("");
    setMensagemSucesso("");

    try {
      const novaReserva = {
        itemId: Number(id),
        dataInicio: dataInicio,
        dataFim: dataFim,
        quantidade: Number(viajantes),
        nome: nome,
        email: email,
      };

      const dados = await criarReserva(novaReserva);

      setMensagemSucesso(`Reserva criada com sucesso. Total: ${dados.total} €`);
      setNome("");
      setEmail("");
      setDataInicio("");
      setDataFim("");
      setViajantes(1);
      setDisponibilidade(null);
    } catch (erro) {
      setMensagemErro(erro.message);
    }
  }

  useEffect(() => {
    async function carregarCaravan() {
      try {
        const dados = await getAutocaravansById(id);
        setCaravan(dados);
      } catch (erro) {
        setError(erro.message);
      } finally {
        setLoading(false);
      }
    }
    carregarCaravan();
  }, [id]);

  if (loading) {
    return <p>A carregar...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="nature-background flex-1 px-6 py-6 flex items-center">
      <div className="w-full max-w-6xl mx-auto bg-white/65 backdrop-blur-sm rounded-2xl p-8">
        <div className="w-[500px] h-[300px] rounded-xl overflow-hidden">
          <img
            src={caravan.imagem}
            alt={caravan.nome}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold mt-6">{caravan.nome}</h1>

        <p className="text-gray-600 mt-2">{caravan.descricao}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <p>
            <strong>Localização:</strong> {caravan.localizacao}
          </p>

          <p>
            <strong>Capacidade:</strong> {caravan.capacidade} pessoas
          </p>

          <p>
            <strong>Avaliação:</strong> {caravan.avaliacao}
          </p>

          <p>
            <strong>Caixa:</strong> {caravan.caixa}
          </p>

          <p>
            <strong>Cozinha:</strong> {caravan.cozinha ? "Sim" : "Não"}
          </p>

          <p>
            <strong>Casa de banho:</strong>{" "}
            {caravan.casaDeBanho ? "Sim" : "Não"}
          </p>

          <p>
            <strong>Chuveiro:</strong> {caravan.chuveiro ? "Sim" : "Não"}
          </p>

          <p>
            <strong>Aceita animais:</strong>{" "}
            {caravan.aceitaAnimais ? "Sim" : "Não"}
          </p>
        </div>

        <p className="text-2xl font-bold mt-6">{caravan.precoDia} € / dia</p>

        <form className="mt-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block mb-1 font-medium">Nome</label>

            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Data de levantamento
            </label>
            <input
              type="date"
              value={dataInicio}
              onChange={(e) => {
                setDataInicio(e.target.value);
                setDisponibilidade(null);
              }}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Data de devolução</label>
            <input
              type="date"
              value={dataFim}
              onChange={(e) => {
                setDataFim(e.target.value);
                setDisponibilidade(null);
              }}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Número de viajantes
            </label>
            <input
              type="number"
              min="1"
              max={caravan.capacidade}
              value={viajantes}
              onChange={(e) => {
                setViajantes(Number(e.target.value));
                setDisponibilidade(null);
              }}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
            <p className="text-sm text-gray-500 mt-1">
              Máximo: {caravan.capacidade} viajantes
            </p>
          </div>
          {datasValidas && (
            <div className="rounded-lg p-4">
              <p>
                Dias: <strong>{dias}</strong>
              </p>

              <p>
                Preço por dia: <strong>{caravan.precoDia} €</strong>
              </p>

              <p className="text-xl font-bold mt-2">Total: {precoTotal} €</p>
            </div>
          )}
          <Button onClick={handleValidarReserva}>
            Verificar disponibilidade
          </Button>
          {disponibilidade === true && (
            <>
              <p className="text-green-600 font-medium">
                Autocaravana disponível para estas datas.
              </p>

              <Button onClick={handleCriarReserva}>Confirmar reserva</Button>
            </>
          )}
          {disponibilidade === false && (
            <p className="text-red-600 font-medium">
              Sem disponibilidade para estas datas.
            </p>
          )}
          {mensagemErro && <p className="text-red-600">{mensagemErro}</p>}
          {mensagemSucesso && (
            <p className="text-green-600 font-medium">{mensagemSucesso}</p>
          )}
        </form>
      </div>
    </div>
  );
}
