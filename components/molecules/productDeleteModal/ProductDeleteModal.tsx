import React, { useCallback, useState } from 'react'
import { BasicAPIResponse } from '../../../types'
import { ConfirmModal } from '../confirmModal'

interface Props {
    productId: string
    modalSetState: React.Dispatch<React.SetStateAction<boolean>>
}

const MEMBERSHIP_API = process.env.MEMBERSHIP_API as string
const MODAL_RESPONSE_TIMEOUT = 1000

export const ProductDeleteModal: React.FC<Props> = ({ productId, modalSetState }) => {
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState('')
    const msg = `Apakah kamu yakin? ini akan dihapus secara permanen`

    // Do delete
    const deleteBook = async (closer: () => void): Promise<void> => {
        const target = `${MEMBERSHIP_API}/products/${productId}`
        const response = await fetch(target, { method: 'DELETE' })
        const data: BasicAPIResponse = await response.json()

        const statusCode = data.status_code
        if (statusCode !== 200) return await Promise.reject(data.message)
    }

    const confirmedCallback = useCallback((closer: () => void) => {
        deleteBook(closer)
            .then(() => {
                setLoading(false)
                setStatus('succeed')
                setTimeout(() => {
                    modalSetState(false)
                }, MODAL_RESPONSE_TIMEOUT)
            })
            .catch((err) => {
                setLoading(false)
                setStatus('error')
                setTimeout(() => {
                    modalSetState(false)
                }, MODAL_RESPONSE_TIMEOUT)
                console.log(err)
            })
    }, [])

    return <ConfirmModal loading={loading} status={status} confirmedCallback={confirmedCallback} modalSetState={modalSetState} text={msg} />
}
