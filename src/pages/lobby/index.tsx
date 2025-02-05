import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ModalCancelConfirm from "../../components/modals/modalCancel";
import { useUser } from "../../hooks/UserContext";

function Lobby() {
  const navigate = useNavigate();
  const [showModalCancelConfirm, setShowModalCancelConfirm] = useState<boolean>(false);
  const { nome } = useUser();
  let acces = 0

  useEffect(() => {
    if (acces < 1){
      toast.success(`Seja Bem-vindo, ${nome}!`);
      acces++ 
    }
  }, [nome, acces]);

  return (
    <>
       <header className="flex items-center justify-between p-3 bg-black/75 text-[#D4D4D4]">
        <button onClick={() => setShowModalCancelConfirm(true)}>
          <img src="/exit.png" alt="Deslogar" width={20} height={20} className="invert" title="Deslogar" />
        </button>
        <div className="text-lg">
          <span>
            Olá, <strong> {nome} </strong>
          </span>
        </div>
      </header>
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
      {showModalCancelConfirm && (
        <ModalCancelConfirm
          textContent="Deseja sair?"
          onConfirm={ () => navigate("/")}
          setShowModalCancelConfirm={setShowModalCancelConfirm}
        />
      )}
    </>
  );
}

export default Lobby;
