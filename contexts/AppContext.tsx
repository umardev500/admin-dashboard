import React, { useMemo, useState } from 'react'

interface Props {
    children?: React.ReactNode
}

export interface AppContextType {
    shown: boolean
    setShown: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = React.createContext({})

export const AppProvider: React.FC<Props> = ({ children }) => {
    const [shown, setShown] = useState(true)
    const data = useMemo<AppContextType>(() => {
        return {
            shown,
            setShown,
        }
    }, [shown])

    return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}
