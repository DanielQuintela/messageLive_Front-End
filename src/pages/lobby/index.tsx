import { useEffect } from "react";
import { toast } from "react-toastify";
import { useUser } from "../../hooks/UserContext";

function Lobby() {
  const { nome } = useUser();
  const access = sessionStorage.getItem('notify');
  const validator = localStorage.getItem('nome') === nome;

  useEffect(() => {
    if (access === '0' && nome !== "") {
      sessionStorage.setItem('notify', '1');
      if (validator) {
        toast(`Bem-vindo de volta ${nome} 🎉!!`);
      } else {
        toast.success(`Seja Bem-vindo, ${nome}!`);
        localStorage.setItem('nome', nome);
      }
    }
  }, [nome, access, validator]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4 sm:px-6 md:px-8">
      {/* Header e saudação */}
      <section className="w-full max-w-3xl space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Salas Disponíveis</h2>
          {/* Botão para criar sala */}
          <button
            className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full text-white text-xl flex items-center space-x-2"
            onClick={() => toast.info('Aqui você pode criar uma sala!')}
          >
            <span>Criar Sala</span>
            <span>+</span>
          </button>
        </div>

        {/* Filtros */}
        <div className="flex space-x-4 mb-4">
          <button className="bg-blue-500 hover:bg-blue-400 py-2 px-4 rounded-lg text-white">Todas</button>
          <button className="bg-red-500 hover:bg-red-400 py-2 px-4 rounded-lg text-white">Com Vaga</button>
          <button className="bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-lg text-white">Populares</button>
        </div>

        {/* Lista de Salas (Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card de Sala */}
          <div className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-bold">Sala 1</h3>
            <p className="text-sm">Descrição da sala...</p>
            <span className="text-sm text-gray-400">5/10 participantes</span>
            <button className="mt-2 w-full py-2 bg-blue-500 rounded-lg hover:bg-blue-400">Entrar</button>
          </div>

          {/* Card de Sala */}
          <div className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-bold">Sala 2</h3>
            <p className="text-sm">Descrição da sala...</p>
            <span className="text-sm text-gray-400">3/10 participantes</span>
            <button className="mt-2 w-full py-2 bg-blue-500 rounded-lg hover:bg-blue-400">Entrar</button>
          </div>

          {/* Card de Sala */}
          <div className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-bold">Sala 3</h3>
            <p className="text-sm">Descrição da sala...</p>
            <span className="text-sm text-gray-400">8/10 participantes</span>
            <button className="mt-2 w-full py-2 bg-blue-500 rounded-lg hover:bg-blue-400">Entrar</button>
          </div>
        </div>
      </section>

      {/* Chat ou Mensagens Rápidas */}
      <section className="fixed bottom-4 right-4">
        <button
          className="bg-blue-500 hover:bg-blue-400 px-4 py-3 rounded-full text-white text-xl"
          onClick={() => toast.info('Iniciar chat!')}
        >
          🗨️
        </button>
      </section>
    </div>
  );
}

export default Lobby;
