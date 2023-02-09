import React, { useRef } from 'react'
import { parseDate, toUpperFirst } from '../../../helpers'
import { useDetectOutsideClick, useModalCloseHandler, useModalShowEffect } from '../../../hooks'
import { Customer } from '../../../types'

interface Props extends Customer {
    setModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export const CustomerDetailModal = React.memo(({ setModalState, ...props }: Props) => {
    const { customer_id: customerId, user, detail, status, created_at: createdTime } = props
    const { npsn, name, email, wa, type, level, about, location } = detail
    const { address, village, district, city, province, postal_code: postalCode } = location ?? {}
    const modalRef = useRef<HTMLDivElement>(null)
    const modalInnerRef = useRef<HTMLDivElement>(null)

    // console.log(bookCover)

    useModalShowEffect({ modal: modalRef })

    useDetectOutsideClick({ parent: modalRef, target: modalInnerRef, setState: setModalState })

    // back handler
    const backHandler = useModalCloseHandler({ status: setModalState })

    return (
        <>
            <div className="modal pt-5 px-5" ref={modalRef}>
                <div className="modal-inner bg-white rounded-lg" ref={modalInnerRef}>
                    {/* header */}

                    <div className="flex justify-between p-4 px-6">
                        <h3 className="text-gray-500 font-medium roboto">Informasi Pelanggan</h3>
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
                                <span className="text-xl text-gray-500 whitespace-normal roboto font-medium">{name}</span>
                            </div>
                            <div className="mt-2 mb-4 flex items-center">
                                {/* <span className="text-base font-semibold">Product ID:</span> */}
                                <span className="text-base text-gray-400 whitespace-normal roboto">{customerId}</span>
                            </div>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">NPSN: </span>
                            <span className="text-base ml-2 text-gray-400 whitespace-normal roboto">{npsn ?? '-'}</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">Username:</span>
                            <span className="text-base ml-2 text-gray-400 whitespace-normal roboto">{user}</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">Jenis:</span>
                            <span className="text-base ml-2 text-gray-400 whitespace-normal roboto">{type ?? '-'}</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">Level:</span>
                            <span className="text-base ml-2 text-gray-400 whitespace-normal roboto">{level ?? '-'}</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">Wa:</span>
                            <span className="text-base ml-2 text-gray-400 whitespace-normal roboto">{wa}</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">Email:</span>
                            <span className="text-base ml-2 text-gray-400 whitespace-normal roboto">{email}</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">Alamat:</span>
                            <span className="text-base ml-2 text-gray-400 whitespace-normal roboto">
                                {address ?? '-'}, Ds. {village ?? '-'}, Kec. {district ?? '-'}, Kab. {city ?? '-'}, Prov. {province ?? '-'}, {postalCode ?? '-'}
                            </span>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">Status:</span>
                            <span
                                className={`${status === 'expired' ? 'bg-amber-400 text-gray-100' : ''} ${status === 'pending' ? 'bg-indigo-300 text-gray-100' : ''} ${
                                    status === 'active' ? 'bg-green-400 text-gray-100' : ''
                                } text-sm ml-2 whitespace-normal roboto rounded p-1`}
                            >
                                {toUpperFirst(status)}
                            </span>
                        </div>
                        <div className="mt-2">
                            <span className="text-base font-medium roboto text-gray-500">Pendaftaran:</span>
                            <span className="text-base ml-2 text-gray-400 whitespace-normal roboto">{parseDate(createdTime)}</span>
                        </div>
                        <div className="mt-4 border-t pt-2.5 mb-2">
                            <span className="flex text-base font-medium roboto text-gray-500">Kilasan:</span>
                            <span className="flex mt-1 text-base text-gray-400 whitespace-normal roboto">{about ?? '-'}</span>
                        </div>
                        <div className="text-right">
                            <button
                                onClick={backHandler}
                                className={`mt-4 roboto font-medium hover:bg-red-700 border border-red-600 rounded-md px-4 py-2 text-red-600 hover:text-gray-50`}
                            >
                                Kembali
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

CustomerDetailModal.displayName = 'CustomerDetailModal'
