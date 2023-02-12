import React, { useMemo } from 'react'

interface Props {
    children?: React.ReactNode
}

export interface AccountContextType {
    data: string
}

export const AccountContext = React.createContext({})

export const AccountProvider: React.FC<Props> = ({ children }) => {
    const data = useMemo<AccountContextType>(() => {
        return {
            data: '12',
        }
    }, [])

    return <AccountContext.Provider value={data}>{children}</AccountContext.Provider>
}
