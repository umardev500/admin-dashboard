import React, { useEffect, useMemo, useState } from 'react'
import { PageProps } from '../types'

interface Props extends PageProps {
    children?: React.ReactNode
}

export interface AppContextType extends PageProps {
    shown: boolean
    setShown: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = React.createContext({})

export const AppProvider: React.FC<Props> = ({ children, ...pageProps }) => {
    const [shown, setShown] = useState(false)

    const data = useMemo<AppContextType>(() => {
        return {
            shown,
            setShown,
            ...pageProps,
        }
    }, [shown])

    useEffect(() => {
        console.log('Provider rendered')
    }, [])

    return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}
