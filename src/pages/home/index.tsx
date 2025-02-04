import './index.css';

function App() {
    return (
      <>
       <header className="bg-black/70 p-3 absolute top-0 left-0 w-full flex items-center justify-between">
        <h1 className="text-[#ffffff] ml-3  lg:text-3xl">MessageLive</h1>
      </header>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
        <h1 className="font-bold">Olá, Seja bem-vindo! 🚀</h1>
        <p className="mt-4 px-4">
          Aqui você pode conhecer pessoas novas e interagir sempre que quiser alguém para conversar!
        </p>

        <div className="flex flex-col items-center">
        <button className="btnfos-1 mt-20">
          Aperte aqui para começar
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
        </button>
      </div>


       
      </div>
      </>
    )
}

export default App;
