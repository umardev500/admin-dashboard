import React, { useEffect, useMemo, useState } from 'react'
import { useSyncServerTime } from '../hooks'
import { PageProps } from '../types'

interface Props extends PageProps {
    children?: React.ReactNode
}

export interface AppContextType extends PageProps {
    shown: boolean
    setShown: React.Dispatch<React.SetStateAction<boolean>>
    serverTime: number
}

export const AppContext = React.createContext({})

export const AppProvider: React.FC<Props> = ({ children, ...pageProps }) => {
    const [shown, setShown] = useState(false)
    const [serverTime, setServerTime] = useState(0)

    const handleSyncServerTime = useSyncServerTime()

    const data = useMemo<AppContextType>(() => {
        return {
            shown,
            setShown,
            serverTime,
            ...pageProps,
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
