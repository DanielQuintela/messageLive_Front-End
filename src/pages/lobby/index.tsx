import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../../hooks/UserContext";

function Lobby() {
  const navigate = useNavigate();
  const { nome } = useUser();
  const access = sessionStorage.getItem('notify')
  const validator = localStorage.getItem('nome') === nome;

  useEffect(() => {
    if (access === '0' && nome !== "") {
      sessionStorage.setItem('notify', '1')
      if (validator) {
        toast(`Bem-vindo de volta ${nome} 🎉!!`);
      } else {
        toast.success(`Seja Bem-vindo, ${nome}!`);
        localStorage.setItem('nome', nome);
      }
    }
  }, [nome, access, validator]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <header className="text-center">
        <h1 className="font-bold text-4xl">Bem-vindo ao Lobby, {nome} 🎉</h1>
        <p className="mt-3 text-lg">Agora você pode interagir com outras pessoas.</p>
      </header>

      {/* Lista de Salas */}
      <section className="mt-10 w-full max-w-3xl bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Salas Disponíveis</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-gray-700 p-4 rounded-lg">
            <span>Sala 1</span>
            <button className="text-blue-500 hover:underline">Entrar</button>
          </div>
          <div className="flex justify-between items-center bg-gray-700 p-4 rounded-lg">
            <span>Sala 2</span>
            <button className="text-blue-500 hover:underline">Entrar</button>
          </div>
          {/* Adicionar mais salas conforme necessário */}
        </div>
      </section>

      {/* Ação de Sair */}
      <button
        className="mt-7 px-4 py-3 h-12 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-all duration-300 text-xl"
        onClick={() => navigate("/")}
      >
        Sair do Lobby
      </button>
    </div>
  );
}

export default Lobby;
