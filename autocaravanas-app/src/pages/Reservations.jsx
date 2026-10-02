import { useEffect, useState } from "react";
import { getReservas, cancelarReserva } from "../services/api";
import Button from "../components/common/Button";

export default function Reservations() {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    carregarReservas();
  }, []);

  async function carregarReservas() {
    try {
      const dados = await getReservas();

      setReservas(dados);
    } catch (erro) {
      setErro(erro.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleCancelarReserva(id) {
    try {
      await cancelarReserva(id);

      setReservas((reservasAtuais) =>
        reservasAtuais.filter((reserva) => reserva.id !== id),
      );
    } catch (erro) {
      setErro(erro.message);
    }
  }

  if (loading) {
    return <p className="p-6">A carregar reservas...</p>;
  }

  if (erro) {
    return <p className="p-6 text-red-600">{erro}</p>;
  }

  if (reservas.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">Reservas</h1>

        <p className="mt-4 text-gray-600">Nenhuma reserva encontrada.</p>
      </div>
    );
  }

  return (
    <div className="nature-background flex-1 px-6 py-10">
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Reservas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reservas.map((reserva) => (
          <div
            key={reserva.id}
            className="bg-white/65 backdrop-blur-sm border border-gray-200 rounded-xl p-6 h-full flex flex-col"
          >
            <h2 className="text-xl font-bold">Reserva #{reserva.id}</h2>

            <div className="mt-4 space-y-2">
              <p>
                <strong>Nome:</strong> {reserva.nome}
              </p>

              <p>
                <strong>Email:</strong> {reserva.email}
              </p>

              <p>
                <strong>Data de levantamento:</strong> {reserva.dataInicio}
              </p>

              <p>
                <strong>Data de devolução:</strong> {reserva.dataFim}
              </p>

              <p>
                <strong>Viajantes:</strong> {reserva.quantidade}
              </p>

              <p>
                <strong>Total:</strong> {reserva.total} €
              </p>
            </div>

            <div className="mt-6">
              <Button onClick={() => handleCancelarReserva(reserva.id)}>
                Cancelar reserva
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
