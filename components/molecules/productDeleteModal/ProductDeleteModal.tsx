import React, { useCallback, useState } from 'react'
import { notify } from '../../../helpers'
import { BasicAPIResponse } from '../../../types'
import { ConfirmModal } from '../confirmModal'

interface Props {
    productId: string
    modalSetState: React.Dispatch<React.SetStateAction<boolean>>
}

const MEMBERSHIP_API = process.env.MEMBERSHIP_API as string

export const ProductDeleteModal: React.FC<Props> = ({ productId, modalSetState }) => {
    const [loading, setLoading] = useState(false)
    const msg = `Apakah kamu yakin? ini akan dihapus secara permanen`

    // Do delete
    const deleteBook = async (): Promise<void> => {
        const target = `${MEMBERSHIP_API}/products/${productId}`
        const response = await fetch(target, { method: 'DELETE' })
        const data: BasicAPIResponse = await response.json()

        const statusCode = data.status_code
        if (statusCode !== 200) return await Promise.reject(data.message)
    }

    const confirmedCallback = useCallback((closer: () => void) => {
        setLoading(true)
        notify
            .promise(
                deleteBook(),
                {
                    loading: 'Menghapus produk...',
                    success: 'Produk berhasil dihapus!',
                    error: 'Something went wrong!',
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

    return <ConfirmModal loading={loading} confirmedCallback={confirmedCallback} modalSetState={modalSetState} text={msg} />
}
