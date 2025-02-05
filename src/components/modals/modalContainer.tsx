import React, { ReactNode, useEffect, useState } from 'react'

export interface IModalProps{
    setShowModal: (state: boolean) => void,
    children?: ReactNode;
}

const ModalContainer = ({ setShowModal, children }: IModalProps) => {
    const [animate, setAnimate] = useState('scale-90');

    useEffect(() => {
        setAnimate('scale-100');
        setTimeout(() => {
            setAnimate('scale-95');
        }, 200);
    }, []);

    return (
        <div className='bg-[#000000b5] fixed top-0 left-0 w-full h-screen backdrop-blur-sm z-10 flex items-center justify-center'>
            <div className={`flex flex-col items-center justify-center w-96 max-h-[90vh] pt-10 px-8 pb-10 rounded-xl z-10 bg-[#0c0c0cc2] relative transition-transform ease-out ${animate}`}>
                <header className='text-right w-full'>
                    <button className=' p-3'
                        id='btn-close'
                        onClick={() => setShowModal(false)}>
                        <img src='/delete.png' alt='Close' width={20} height={20} className='invert'  />
                    </button>
                </header>
                <div className="w-full px-3 overflow-y-auto no-scrollbar">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ModalContainer;