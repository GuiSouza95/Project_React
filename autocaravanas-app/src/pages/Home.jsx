import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <main className="nature-background flex-1 px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-orange-950">
          Encontre a autocaravana ideal
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          Escolha entre várias autocaravanas e prepare-se para a sua próxima
          aventura.
        </p>

        <div className="mt-8">
          <Link to="/autocaravanas">
            <Button>Ver autocaravanas</Button>
          </Link>
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="bg-white/65 backdrop-blur-sm rounded-2xl p-6 text-center">
          <img src="https://images.unsplash.com/photo-1706014857631-c4e857099ca0" alt="Autocaravana numa viagem" className="w-full h-40 object-cover rounded-xl"
          />

          <h2 className="text-xl font-bold mt-3">Várias opções</h2>

          <p className="text-gray-600 mt-2">
            Encontre a autocaravana ideal para a sua viagem.
          </p>
        </div>

        <div className="bg-white/65 backdrop-blur-sm rounded-2xl p-6 text-center">
          <img src="https://images.unsplash.com/photo-1751394457308-175efe2faa1d?auto=format&fit=crop&fm=jpg&q=80&w=1200" alt="Autocaravana numa viagem" className="w-full h-40 object-cover object-[center_95%] rounded-xl"
          />

          <h2 className="text-xl font-bold mt-3">Várias localizações</h2>

          <p className="text-gray-600 mt-2">
            Escolha entre diferentes zonas de levantamento.
          </p>
        </div>

        <div className="bg-white/65 backdrop-blur-sm rounded-2xl p-6 text-center">
          <img src="https://images.unsplash.com/photo-1779223853268-30d05c25d45a?auto=format&fit=crop&fm=jpg&q=80&w=1200" alt="Autocaravana numa viagem" className="w-full h-40 object-cover object-[center_75%] rounded-xl"
          />

          <h2 className="text-xl font-bold mt-3">Boas avaliações</h2>

          <p className="text-gray-600 mt-2">
            Compare as avaliações e escolha a sua favorita.
          </p>
        </div>
      </div>
    </main>
  );
}