
const CreateRoom = (props: any) => {

    return (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Salas Disponíveis</h2>
          <button
            className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full text-white text-xl flex items-center space-x-2"
            // onClick={() => toast.info('Aqui você pode criar uma sala!')}
          >
            <span>Criar Sala</span>
            <span>+</span>
          </button>
        </div>
    )
}

export default CreateRoom