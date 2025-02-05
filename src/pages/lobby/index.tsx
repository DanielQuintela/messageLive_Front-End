import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function Lobby() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const nome = params.get("nome") || "Usuário";
  let acces = 0

  useEffect(() => {
    if (acces < 1){
      toast.success(`Seja Bem-vindo, ${nome}!`);
      acces++ 
    }
  }, [nome, acces]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <h1 className="font-bold text-3xl">Bem-vindo ao Lobby, {nome}! 🎉</h1>
      <p className="mt-4 text-lg">Agora você pode interagir com outras pessoas.</p>
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
