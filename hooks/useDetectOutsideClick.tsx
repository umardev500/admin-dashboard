import { removeAllListeners } from 'process'
import React, { useEffect } from 'react'

interface Props {
    parent: React.RefObject<HTMLElement>
    target: React.RefObject<HTMLElement>
    status: React.Dispatch<React.SetStateAction<boolean>>
    setOutsideClicked?: React.Dispatch<React.SetStateAction<boolean>>
}

export const useDetectOutsideClick = ({ parent, target, status, setOutsideClicked }: Props): void => {
    useEffect(() => {
        const ev = parent.current?.addEventListener('click', (e) => {
            const isInner = target.current?.contains(e.target as Node)

            if (isInner !== undefined && !isInner) {
                if (setOutsideClicked != null) setOutsideClicked(true)
                status(isInner as boolean)
            }
        })

        return () => {
            removeAllListeners(ev as any)
        }
    }, [])
}
