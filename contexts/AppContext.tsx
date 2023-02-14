import React, { useEffect, useMemo, useState } from 'react'
import { PageProps, User, UserResponse } from '../types'

interface Props extends PageProps {
    children?: React.ReactNode
}

export interface AppContextType extends PageProps {
    shown: boolean
    setShown: React.Dispatch<React.SetStateAction<boolean>>
    userData?: User
}

export const AppContext = React.createContext({})

const MEMBERSHIP_API = process.env.MEMBERSHIP_API as string

export const AppProvider: React.FC<Props> = ({ children, ...pageProps }) => {
    const [shown, setShown] = useState(true)
    const [userData, setUserData] = useState<User>()

    const data = useMemo<AppContextType>(() => {
        return {
            shown,
            setShown,
            userData,
            ...pageProps,
        }
    }, [shown, userData])

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const target = `${MEMBERSHIP_API}/users/16678292763`

            try {
                const response = await fetch(target, { method: 'GET' })
                const jsonData: UserResponse = await response.json()
                const isEmpty = jsonData.data.is_empty ?? false
                if (!isEmpty) setUserData(jsonData.data.payload)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData().catch(() => {})
    }, [])

    return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}
