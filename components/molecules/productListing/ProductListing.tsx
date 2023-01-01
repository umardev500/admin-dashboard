import React, { useCallback, useState } from 'react'
import { ProductDeleteModal } from '../productDeleteModal'
import { ProductDetailModal } from '../productDetailModal'

export const ProductListing: React.FC = () => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [detailModal, setDetailModal] = useState(false)

    const handleClickDelete = useCallback(() => {
        setDeleteModal(true)
    }, [])

    return (
        <tr>
            <td className="px-4 border-r border-b border-slate-200 py-2 text-center">1.</td>
            <td className="px-4 border-r border-b border-slate-200 py-2">
                <span className="cursor-pointer hover:text-gray-400" onClick={() => setDetailModal(true)}>
                    16678923762730
                </span>
            </td>
            <td className="px-4 border-r border-b border-slate-200 py-2 whitespace-nowrap">Lite</td>
            <td className="px-4 border-r border-b border-slate-200 py-2 whitespace-nowrap">Rp50.000</td>
            <td className="px-4 border-r border-b border-slate-200 py-2 whitespace-nowrap">30 Days</td>
            <td className="px-4 border-r border-b border-slate-200 py-2 whitespace-nowrap">Sep 20, 2022</td>
            <td className="px-4 border-r border-b border-slate-200 py-2 whitespace-nowrap">
                <button onClick={handleClickDelete} className="bg-red-700 hover:bg-red-800 px-2 py-2 rounded-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.07 5.23C19.46 5.07 17.85 4.95 16.23 4.86V4.85L16.01 3.55C15.86 2.63 15.64 1.25 13.3 1.25H10.68C8.35001 1.25 8.13 2.57 7.97 3.54L7.76 4.82C6.83 4.88 5.9 4.94 4.97 5.03L2.93001 5.23C2.51001 5.27 2.21 5.64 2.25 6.05C2.29 6.46 2.65 6.76 3.07 6.72L5.11001 6.52C10.35 6 15.63 6.2 20.93 6.73H21.01C21.39 6.73 21.72 6.44 21.76 6.05C21.7751 5.85024 21.7113 5.65253 21.5823 5.49925C21.4533 5.34596 21.2694 5.24931 21.07 5.23V5.23ZM19.23 8.14C18.99 7.89 18.66 7.75 18.32 7.75H5.68C5.34 7.75 5 7.89 4.77 8.14C4.54 8.39 4.41 8.73 4.43 9.08L5.05001 19.34C5.16001 20.86 5.3 22.76 8.79 22.76H15.21C18.7 22.76 18.84 20.87 18.95 19.34L19.57 9.09C19.59 8.73 19.46 8.39 19.23 8.14V8.14ZM13.66 17.75H10.33C9.92 17.75 9.58 17.41 9.58 17C9.58 16.59 9.92 16.25 10.33 16.25H13.66C14.07 16.25 14.41 16.59 14.41 17C14.41 17.41 14.07 17.75 13.66 17.75ZM14.5 13.75H9.5C9.09 13.75 8.75 13.41 8.75 13C8.75 12.59 9.09 12.25 9.5 12.25H14.5C14.91 12.25 15.25 12.59 15.25 13C15.25 13.41 14.91 13.75 14.5 13.75Z"
                            fill="white"
                        />
                    </svg>
                </button>
                {deleteModal ? <ProductDeleteModal modalSetState={setDeleteModal} /> : null}
                {detailModal ? <ProductDetailModal setModalState={setDetailModal} /> : null}
            </td>
        </tr>
    )
}
