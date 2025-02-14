import { useEffect } from "react";
import { toast } from "react-toastify";
import { useUser } from "../../hooks/UserContext";
import Romms from "./components/room";
import CreateRoom from "./components/createRoom";

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
       
        <CreateRoom/>
        {/* Filtros */}
        <div className="flex space-x-4 mb-4">
          <button className="bg-blue-500 hover:bg-blue-400 py-2 px-4 rounded-lg text-white">Todas</button>
          <button className="bg-red-500 hover:bg-red-400 py-2 px-4 rounded-lg text-white">Com Vaga</button>
          <button className="bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-lg text-white">Populares</button>
        </div>

        {/* Lista de Salas (Cards) */}
        <Romms/>
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
