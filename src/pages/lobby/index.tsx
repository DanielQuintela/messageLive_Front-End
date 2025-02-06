import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../../hooks/UserContext";

function Lobby() {
  const navigate = useNavigate();
  const { nome } = useUser();
  const [acces, setAcces] = useState(0);
  const validator =localStorage.getItem('nome') === nome
  
  useEffect(() => {
    if (acces < 1 && nome !== ""){
      if(validator){
        toast.success(`Bem-vindo de volta ${nome} !!`);
      } else {
        toast.success(`Seja Bem-vindo, ${nome}!`);
        localStorage.setItem('nome', nome)
      }
      setAcces(acces + 1);
    }
  }, [nome, acces, validator]);

  return (
    <>
    
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
    </>
  );
}

export default Lobby;
