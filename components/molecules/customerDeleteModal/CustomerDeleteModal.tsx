import React, { useCallback } from 'react'
import { ConfirmModal } from '../confirmModal'

interface Props {
    modalSetState: React.Dispatch<React.SetStateAction<boolean>>
}

export const CustomerDeleteModal: React.FC<Props> = ({ modalSetState }) => {
    const msg = `Apakah kamu yakin? ini akan dihapus secara permanen`

    // Do delete
    const deleteBook = (closer: () => void): void => {}

    const confirmedCallback = useCallback((closer: () => void) => {
        deleteBook(closer)
    }, [])

    return <ConfirmModal confirmedCallback={confirmedCallback} modalSetState={modalSetState} text={msg} />
}
