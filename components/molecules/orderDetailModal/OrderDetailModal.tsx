import React, { useRef } from 'react'
import { useDetectOutsideClick, useModalCloseHandler, useModalShowEffect } from '../../../hooks'

interface Props {
    setModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export const OrderDetailModal: React.FC<Props> = ({ setModalState }) => {
    const modalRef = useRef<HTMLDivElement>(null)
    const modalInnerRef = useRef<HTMLDivElement>(null)

    // console.log(bookCover)

    useModalShowEffect({ modal: modalRef })

    useDetectOutsideClick({ parent: modalRef, target: modalInnerRef, status: setModalState })

    // back handler
    const backHandler = useModalCloseHandler({ status: setModalState })

    return (
        <>
            <div className="modal pt-5 px-5" ref={modalRef}>
                <div className="modal-inner bg-white rounded-lg" ref={modalInnerRef}>
                    {/* header */}

                    <div className="flex justify-between p-4 px-6">
                        <h3 className="text-gray-500 font-medium roboto">Informasi Pemesanan</h3>
                        <button onClick={backHandler} className="hover:text-gray-500 text-gray-400">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    {/* body */}
                    <div className="px-6 pb-5">
                        <div className="border-b mb-4">
                            <div className="mt-2">
                                <span className="text-xl text-gray-500 whitespace-normal roboto font-medium">SMK Setiabudi Jakarta</span>
                            </div>
                            <div className="mt-2 mb-4 flex items-center">
                                {/* <span className="text-base font-semibold">Product ID:</span> */}
                                <span className="text-base text-gray-400 whitespace-normal roboto">16679292732210</span>
                            </div>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">Produk:</span>
                            <span className="text-base ml-2 text-gray-400 whitespace-normal roboto">Paket Premium Extra</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">Nomor:</span>
                            <span className="text-base ml-2 text-gray-400 whitespace-normal roboto">16678973673482</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">Harga Produk:</span>
                            <span className="text-base ml-2 text-gray-400 whitespace-normal roboto">Rp500.000</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">Durasi:</span>
                            <span className="text-base ml-2 text-gray-400 whitespace-normal roboto">90 Hari</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">Status:</span>
                            <span className="text-base ml-2 text-emerald-600 whitespace-normal roboto">Lunas</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">Pemesanan:</span>
                            <span className="text-base ml-2 text-gray-400 whitespace-normal roboto">Sep 30, 2022 15:05:12</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">Update Pada:</span>
                            <span className="text-base ml-2 text-gray-400 whitespace-normal roboto">Sep 30, 2022 25:11:10</span>
                        </div>
                        <div className="mt-4 border-t pt-2.5 mb-2">
                            <span className="text-base font-normal text-gray-400 whitespace-normal roboto">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores aperiam facilis
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
