import React, { useEffect, useMemo, useState } from 'react'
import { useSyncServerTime } from '../hooks'

interface Props {
    children?: React.ReactNode
}

export interface AppContextType {
    shown: boolean
    setShown: React.Dispatch<React.SetStateAction<boolean>>
    serverTime: number
}

export const AppContext = React.createContext({})

export const AppProvider: React.FC<Props> = ({ children }) => {
    const [shown, setShown] = useState(false)
    const [serverTime, setServerTime] = useState(0)

    const handleSyncServerTime = useSyncServerTime()

    const data = useMemo<AppContextType>(() => {
        return {
            shown,
            setShown,
            serverTime,
        }
    }, [shown, serverTime])

    useEffect(() => {
        handleSyncServerTime()
            .then((res) => {
                setServerTime(parseInt(res))
            })
            .catch((err) => console.log('error getting server time:', err))
    }, [])

    return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}
