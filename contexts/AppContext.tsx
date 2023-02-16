import React, { useEffect, useMemo, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { PageProps, User, UserInfo, UserResponse } from '../types'

interface Props extends PageProps {
    children?: React.ReactNode
}

export interface AppContextType extends PageProps {
    shown: boolean
    setShown: React.Dispatch<React.SetStateAction<boolean>>
    userData?: User
    setReload: React.Dispatch<React.SetStateAction<number>>
}

export const AppContext = React.createContext({})

const MEMBERSHIP_API = process.env.MEMBERSHIP_API as string

export const AppProvider: React.FC<Props> = ({ children, ...pageProps }) => {
    const [shown, setShown] = useState(false)
    const [userData, setUserData] = useState<User>()
    const [reload, setReload] = useState<number>(0)
    const [loading, setLoading] = useState(true)

    const userInfo: UserInfo = JSON.parse(pageProps.userInfo ?? '{}')

    const data = useMemo<AppContextType>(() => {
        return {
            shown,
            setShown,
            userData,
            setReload,
            ...pageProps,
        }
    }, [shown, userData])

    useEffect(() => {
        if (pageProps.userInfo !== undefined) {
            const fetchData = async (): Promise<void> => {
                const target = `${MEMBERSHIP_API}/users/${userInfo.user_id}`

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
        }
    }, [pageProps.userInfo, reload])

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <AppContext.Provider value={data}>
            {!loading ? (
                <>
                    {children}
                    <Toaster />
                </>
            ) : null}
        </AppContext.Provider>
    )
}
