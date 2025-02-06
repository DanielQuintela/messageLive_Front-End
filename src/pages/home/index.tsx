import { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
import { toast } from 'react-toastify';



function Home() {
  const [tela, setTela] = useState<"inicio" | "askName">("inicio");
  const [inputNome, setInputNome] = useState("");
  const { socket } = useUser();
  const navigate = useNavigate();
  const { nome } = useUser();

  const handleToLobby = () =>{
  
   
    if (inputNome) {
      socket.emit("join", inputNome)
      sessionStorage.setItem('notify', '0')
      navigate(`/lobby`);
    } else {
      toast.error("Por favor, digite seu nome para poder entrar!"); // Evita que entre sem nome
    }
   
  }
    return (
      <>
        
        <div className="flex flex-col items-center justify-center bg-gray-900 text-white text-center transition-all duration-500 overflow-y-auto h-screen">
         
          {tela === "inicio" &&  nome === "" && (
             <div className="opacity-100 transition-opacity duration-500">
              
              <h1 className="font-bold ">Olá, Seja bem-vindo! </h1>
              <p className="mt-4 px-4 text-lg">
                Aqui você pode conhecer pessoas novas e interagir sempre que quiser alguém para conversar!
              </p>

              <div className="flex flex-col items-center">
                <button 
                className="btnfos-1 mt-16  font-bold  transition-all duration-300"
                onClick={() => setTela("askName")}
                >
                  Aperte aqui para começar
                  <svg>
                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                  </svg>
                </button>
        
              </div>
            </div>
          )}
      
          { tela === "askName" && (
            <div className="opacity-100 transition-opacity duration-500 flex flex-col items-center relative">

            {/* Abaixo a responsividade em top e right para telas menores e md:top e md:rigth para telas maiores */}

            <button
              onClick={() => setTela("inicio")}
              className="absolute top-[-60px] right-[-5px] md:top-[-70px] md:right-[-80px] 
                         bg-[#435585] text-white font-bold text-lg px-3 py-2 rounded-lg shadow-lg "
            >
               <span className="text-lg">⬅️</span> Voltar
              </button>
              <h1 className="font-bold text-3xl">Qual é o seu nome?</h1>
              <input
                type="text"
                className="mt-4 p-3 text-black rounded-lg w-64 h-11"
                placeholder="Digite seu nome aqui"
                value={inputNome}
                onChange={(e) => setInputNome(e.target.value)}
                required
              />
              <button
                className="mt-7 px-4 py-3 h-12 bg-purple-950 hover:bg-purple-900 text-white font-bold rounded-lg transition-all duration-300 text-xl"
                onClick={handleToLobby}
              >
                Entrar no lobby
              </button>
            </div>
          )}

          { nome !== "" && (
            <h1 className="text-lg font-semibold text-gray-800 bg-yellow-100 p-4 rounded-lg shadow-md">
              Olá, <span className="font-bold">{nome}</span>! Você já está logado. Se deseja sair, basta clicar no botão de Logout acima.
            </h1>
          )}


        </div>
      </>
    );
}

export default Home;