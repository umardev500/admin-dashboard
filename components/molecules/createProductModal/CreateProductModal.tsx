import React, { useCallback, useEffect, useRef } from 'react'
import { toCurrency } from '../../../helpers'
import { useDetectOutsideClick, useModalCloseHandler, useModalShowEffect } from '../../../hooks'

interface Props {
    name?: string
    price?: number
    duration?: number
    description?: string
    modalSetState: React.Dispatch<React.SetStateAction<boolean>>
    callback: () => void
}

export const CreateProductModal: React.FC<Props> = ({ name, price, duration, description, modalSetState, callback }) => {
    const modalRef = useRef<HTMLDivElement>(null)
    const modalInnerRef = useRef<HTMLDivElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const durationRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLTextAreaElement>(null)

    // modal effect
    useModalShowEffect({ modal: modalRef })

    // Detect outside modal click
    useDetectOutsideClick({ parent: modalRef, target: modalInnerRef, status: modalSetState })

    // back handler
    const backHandler = useModalCloseHandler({ status: modalSetState })

    useEffect(() => {
        if (nameRef.current != null && name !== undefined) nameRef.current.value = name
        if (priceRef.current != null && price !== undefined) priceRef.current.value = toCurrency(price)
        if (durationRef.current != null && duration !== undefined) durationRef.current.value = duration.toString()
        if (descriptionRef.current != null && description !== undefined) descriptionRef.current.value = description
    }, [])

    // price typing handler
    const onTypePrice = useCallback(() => {
        console.log('ok')
    }, [])

    // Post update
    const postData = (): void => {}

    // Handle save
    const handleSave = (): void => {
        postData()
    }

    return (
        <div className="modal pt-5 px-5" ref={modalRef}>
            <div style={{ width: 300 }} className="modal-inner bg-white rounded-lg" ref={modalInnerRef}>
                {/* header */}
                <div className="flex justify-between p-4 px-5">
                    <h3 className="roboto text-gray-500 font-medium text-base">Tambah Data</h3>
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
                <div className="px-5 pt-2 pb-2">
                    <div className="">
                        <span className="roboto font-medium text-gray-500 mb-2 flex">Nama Produk:</span>
                        <input
                            ref={nameRef}
                            name="category"
                            className="roboto w-full text-base font-medium text-gray-500 focus:ring-2 outline-none bg-gray-50 py-2 px-3.5 border border-gray-300 focus:border-blue-300 rounded-lg"
                            type="text"
                            placeholder="Masukan nama produk"
                        />
                    </div>
                    <div className="mt-2">
                        <span className="roboto font-medium text-gray-500 mb-2 flex">Harga:</span>
                        <input
                            ref={priceRef}
                            name="category"
                            className="roboto w-full text-base font-medium text-gray-500 focus:ring-2 outline-none bg-gray-50 py-2 px-3.5 border border-gray-300 focus:border-blue-300 rounded-lg"
                            type="text"
                            placeholder="5000"
                        />
                    </div>
                    <div className="mt-2">
                        <span className="roboto font-medium text-gray-500 mb-2 flex">Durasi Produk:</span>
                        <input
                            ref={durationRef}
                            name="category"
                            className="roboto w-full text-base font-medium text-gray-500 focus:ring-2 outline-none bg-gray-50 py-2 px-3.5 border border-gray-300 focus:border-blue-300 rounded-lg"
                            type="number"
                            placeholder="5000"
                        />
                    </div>
                    <div className="mt-2">
                        <span className="roboto font-medium text-gray-500 mb-2 flex">Deskripsi:</span>
                        <textarea
                            ref={descriptionRef}
                            name="category"
                            className="roboto w-full text-base font-medium text-gray-500 focus:ring-2 outline-none bg-gray-50 py-2 px-3.5 border border-gray-300 focus:border-blue-300 rounded-lg"
                            placeholder="Masukan deskripsi yg simpel"
                        ></textarea>
                    </div>
                </div>

                {/* footer */}
                <div className="px-5 py-4 flex justify-center flex-col">
                    <button onClick={handleSave} className={`roboto font-medium bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-2 text-white`}>
                        Simpan
                    </button>
                    <button
                        onClick={backHandler}
                        className="roboto font-medium bg-white border border-gray-200 hover:border-gray-300 mt-1.5 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-md px-3 py-2"
                    >
                        Kembali
                    </button>
                </div>
            </div>
        </div>
    )
}

CreateProductModal.displayName = 'CreateProductModal'
