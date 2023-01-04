import React, { useCallback, useState } from 'react'
import { ConfirmModal } from '../confirmModal'

interface Props {
    modalSetState: React.Dispatch<React.SetStateAction<boolean>>
}

export const CustomerDeleteModal: React.FC<Props> = ({ modalSetState }) => {
    const [loading] = useState(false)
    const [status] = useState('')
    const msg = `Apakah kamu yakin? ini akan dihapus secara permanen`

    // Do delete
    const deleteBook = (closer: () => void): void => {}

    const confirmedCallback = useCallback((closer: () => void) => {
        deleteBook(closer)
    }, [])

    return <ConfirmModal loading={loading} status={status} confirmedCallback={confirmedCallback} modalSetState={modalSetState} text={msg} />
}
