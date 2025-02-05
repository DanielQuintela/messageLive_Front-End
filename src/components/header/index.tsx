import { Flip, ToastContainer } from "react-toastify"
interface header{
    nome?: string
}

const HeaderContainer = (props: header) => {



    return(
        <>
         <header className="bg-black/70 p-3 absolute top-0 left-0 w-full flex items-center justify-between">
            <h1 className="text-[#ffffff] ml-3  lg:text-2xl">MessageLive</h1>
            {/* <img src="messageLiveLogo.png" className="w-40 h-36 rounded-tl-3xl" alt='Imagem da logo' /> */}
            <div className="text-lg">
          <span>
            Olá, <strong> {props.nome} </strong>
          </span>
        </div>
        </header>

        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={false}
            draggable={true}
            theme="dark"
            transition={Flip}
            style={{ fontSize: "16px" }}
        />

        </>
    )
}

export default HeaderContainer