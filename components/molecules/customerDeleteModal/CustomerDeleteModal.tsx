import React, { useCallback, useState } from 'react'
import { notify } from '../../../helpers'
import { BasicAPIResponse, modifyingResponse } from '../../../types'
import { ConfirmModal } from '../confirmModal'

interface Props {
    id: string
    deletedTime?: number
    modalSetState: React.Dispatch<React.SetStateAction<boolean>>
}

const MEMBERSHIP_API = process.env.MEMBERSHIP_API as string

export const CustomerDeleteModal: React.FC<Props> = ({ id, deletedTime, modalSetState }) => {
    const [loading] = useState(false)
    const [status] = useState('')
    const isPermanent = deletedTime !== undefined
    const deletedType = isPermanent ? 'permanen' : 'sementara'
    const msg = `Apakah kamu yakin? ini akan dihapus secara ${deletedType}`

    // Do delete
    const deleteHandler = async (): Promise<any> => {
        const target = `${MEMBERSHIP_API}/customers/${id}?hard=${isPermanent ? 'false' : 'false'}`

        try {
            const response = await fetch(target, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const data: BasicAPIResponse & modifyingResponse = await response.json()
            const isAffected = data.data.is_affected
            const ms = 'something went wrong' as unknown

            if (isAffected === undefined) return await Promise.reject(ms)
        } catch (err) {
            return await Promise.reject(err)
        }
    }

    const confirmedCallback = useCallback((closer: () => void) => {
        // deleteHandler(closer).catch(() => {})
        notify
            .promise(
                deleteHandler(),
                {
                    loading: 'Menghapus customer...',
                    error: 'Oops something went wrong!',
                    success: 'Berhasil dihapus',
                },
                {
                    className: 'roboto',
                    position: 'bottom-right',
                }
            )
            .catch(() => {})
            .finally(() => {
                setTimeout(() => {
                    closer()
                }, 1000)
            })
    }, [])

    return (
        <>
            <ConfirmModal loading={loading} status={status} confirmedCallback={confirmedCallback} modalSetState={modalSetState} text={msg} />
        </>
    )
}
