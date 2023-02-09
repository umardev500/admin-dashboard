import React, { useCallback, useState } from 'react'
import { ConfirmModal } from '../confirmModal'

interface Props {
    modalSetState: React.Dispatch<React.SetStateAction<boolean>>
    deletedTime?: number
}

export const CustomerDeleteModal: React.FC<Props> = ({ modalSetState, deletedTime }) => {
    const [loading] = useState(false)
    const [status] = useState('')
    const isPermanent = deletedTime !== undefined ? 'permanen' : 'sementara'
    const msg = `Apakah kamu yakin? ini akan dihapus secara ${isPermanent}`

    // Do delete
    const deleteHandler = (closer: () => void): void => {}

    const confirmedCallback = useCallback((closer: () => void) => {
        deleteHandler(closer)
    }, [])

    return <ConfirmModal loading={loading} status={status} confirmedCallback={confirmedCallback} modalSetState={modalSetState} text={msg} />
}
