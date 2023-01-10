import React, { useEffect } from 'react'

interface Props {
    parent: React.RefObject<HTMLElement>
    target: React.RefObject<HTMLElement>
    status: React.Dispatch<React.SetStateAction<boolean>>
    setOutsideClicked?: React.Dispatch<React.SetStateAction<boolean>>
    toActivate?: boolean
}

export const useDetectOutsideClick = ({ parent, target, status, setOutsideClicked, toActivate }: Props): void => {
    useEffect(() => {
        const handleClick = (e: MouseEvent): void => {
            const isInner = target.current?.contains(e.target as Node)
            console.log('click again here')
            // if (toActivate === true && isInner === true) status(true)

            if (isInner !== undefined && !isInner) {
                if (setOutsideClicked != null) setOutsideClicked(true)
                status(isInner as boolean)
            }
        }

        const element = parent.current
        if (element !== undefined && element !== null) {
            element.addEventListener('click', handleClick)
        }

        return () => {
            if (element !== undefined && element !== null) element.removeEventListener('click', handleClick)
        }
    }, [])
}
