import React from 'react';
import ModalContainer from './modalContainer';

interface IModalCancelConfirmProps {
    textContent: string;
    onConfirm: () => void;
    setShowModalCancelConfirm: (state: boolean) => void;
}

const ModalCancelConfirm = ({ textContent, onConfirm, setShowModalCancelConfirm }: IModalCancelConfirmProps) => {
    return (
        <>
            <ModalContainer setShowModal={setShowModalCancelConfirm}>
                <p className='text-white px-1 text-md'>{textContent}</p>
                <div className='my-4 flex items-center justify-between'>
                    <button onClick={() => setShowModalCancelConfirm(false)} className='border-2 border-[#4B70F5] text-white rounded-md mx-1 px-3 py-2 font-bold w-1/2'>
                        Cancelar
                    </button>
                    <button onClick={onConfirm} className='bg-gradient-primary text-white rounded-md mx-1 px-3 py-2 font-bold w-1/2'>
                        Confirmar
                    </button>
                </div>
            </ModalContainer>
        </>
    )
}

export default ModalCancelConfirm;