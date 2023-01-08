import React, { useCallback, useState } from 'react'
import { parseDate, toUpperFirst } from '../../../helpers'
import { Customer } from '../../../types'
import { CustomerDeleteModal } from '../customerDeleteModal'
import { CustomerDetailModal } from '../customerDetailModal'

interface Props extends Customer {
    index: number
}

export const CustomerListing: React.FC<Props> = ({ index, ...props }) => {
    const { customer_id: customerId, user, detail, created_at: createdTime, status } = props
    const { name, email } = detail
    const [detailModal, setDetailModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    const handleClickDelete = useCallback(() => {
        setDeleteModal(true)
    }, [])

    return (
        <tr>
            <td className="px-4 border-r border-b border-slate-200 py-2 text-center">{index}.</td>
            <td className="px-4 border-r border-b border-slate-200 py-2">
                <span onClick={() => setDetailModal(true)} className="cursor-pointer text-gray-500 hover:text-gray-400">
                    {customerId}
                </span>
            </td>
            <td className="px-4 border-r border-b border-slate-200 py-2 whitespace-nowrap">{name}</td>
            <td className="px-4 border-r border-b border-slate-200 py-2 whitespace-nowrap">{user}</td>
            <td className="px-4 border-r border-b border-slate-200 py-2 whitespace-nowrap">{email}</td>
            <td className="px-4 border-r border-b border-slate-200 py-2 whitespace-nowrap">{parseDate(createdTime)}</td>
            <td className="px-4 border-r border-b border-slate-200 py-2 whitespace-nowrap">
                <span className="bg-slate-200 text-gray-500 px-1 py-1 rounded text-sm">{toUpperFirst(status)}</span>
            </td>
            <td className="px-4 border-r border-b border-slate-200 py-2 whitespace-nowrap w-10">
                <div className="flex items-center">
                    <button onClick={handleClickDelete} className="bg-red-700 hover:bg-red-800 px-1.5 py-1.5 rounded-lg text-gray-100">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.07 5.23C19.46 5.07 17.85 4.95 16.23 4.86V4.85L16.01 3.55C15.86 2.63 15.64 1.25 13.3 1.25H10.68C8.35001 1.25 8.13 2.57 7.97 3.54L7.76 4.82C6.83 4.88 5.9 4.94 4.97 5.03L2.93001 5.23C2.51001 5.27 2.21 5.64 2.25 6.05C2.29 6.46 2.65 6.76 3.07 6.72L5.11001 6.52C10.35 6 15.63 6.2 20.93 6.73H21.01C21.39 6.73 21.72 6.44 21.76 6.05C21.7751 5.85024 21.7113 5.65253 21.5823 5.49925C21.4533 5.34596 21.2694 5.24931 21.07 5.23V5.23ZM19.23 8.14C18.99 7.89 18.66 7.75 18.32 7.75H5.68C5.34 7.75 5 7.89 4.77 8.14C4.54 8.39 4.41 8.73 4.43 9.08L5.05001 19.34C5.16001 20.86 5.3 22.76 8.79 22.76H15.21C18.7 22.76 18.84 20.87 18.95 19.34L19.57 9.09C19.59 8.73 19.46 8.39 19.23 8.14V8.14ZM13.66 17.75H10.33C9.92 17.75 9.58 17.41 9.58 17C9.58 16.59 9.92 16.25 10.33 16.25H13.66C14.07 16.25 14.41 16.59 14.41 17C14.41 17.41 14.07 17.75 13.66 17.75ZM14.5 13.75H9.5C9.09 13.75 8.75 13.41 8.75 13C8.75 12.59 9.09 12.25 9.5 12.25H14.5C14.91 12.25 15.25 12.59 15.25 13C15.25 13.41 14.91 13.75 14.5 13.75Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                    <div className="inline-flex ml-1.5 border-l border-gray-300 h-5"></div>
                    <button onClick={() => setDetailModal(true)} className="ml-1.5 bg-yellow-600 hover:bg-yellow-700 px-1.5 py-1.5 rounded-lg text-gray-100">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.3646 8.76874C18.1508 5.28999 14.9117 3.28708 11.5 3.28708C9.79416 3.28708 8.13624 3.78541 6.62207 4.715C5.10791 5.65416 3.74707 7.02458 2.63541 8.76874C1.67707 10.2733 1.67707 12.7171 2.63541 14.2217C4.84916 17.71 8.08832 19.7033 11.5 19.7033C13.2058 19.7033 14.8637 19.205 16.3779 18.2754C17.8921 17.3362 19.2529 15.9658 20.3646 14.2217C21.3229 12.7267 21.3229 10.2733 20.3646 8.76874V8.76874ZM11.5 15.3717C9.35332 15.3717 7.62832 13.6371 7.62832 11.5C7.62832 9.36291 9.35332 7.62833 11.5 7.62833C13.6467 7.62833 15.3717 9.36291 15.3717 11.5C15.3717 13.6371 13.6467 15.3717 11.5 15.3717Z"
                                fill="currentColor"
                            />
                            <path
                                d="M11.4981 8.75916C10.7725 8.75916 10.0765 9.04742 9.56342 9.56052C9.05032 10.0736 8.76205 10.7696 8.76205 11.4952C8.76205 12.2208 9.05032 12.9168 9.56342 13.4299C10.0765 13.943 10.7725 14.2312 11.4981 14.2312C13.0027 14.2312 14.2389 13.0046 14.2389 11.5C14.2389 9.9954 13.0027 8.75916 11.4981 8.75916V8.75916Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>

                {detailModal ? <CustomerDetailModal setModalState={setDetailModal} /> : null}
                {deleteModal ? <CustomerDeleteModal modalSetState={setDeleteModal} /> : null}
            </td>
        </tr>
    )
}
