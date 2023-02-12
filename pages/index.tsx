import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ReactElement, useEffect, useState } from 'react'
import { Dashboard, FeaturedList } from '../components'
import { setCookie } from '../helpers'
import { CustomerResponse } from '../types'
import { NextPageWithLayout } from './_app'

const MEMBERSHIP_API = process.env.MEMBERSHIP_API as string

interface GetServerSidePropsResult {
    page_id: string
    user_data: any
}

const Home: NextPageWithLayout = () => {
    const [customerCount, setCustomerCount] = useState(0)
    const [expiredCount, setExpiredCount] = useState(0)
    const [orderPendingCount, setOrderPendingCount] = useState(0)
    const [newMemberCount, setNewMemberCount] = useState(0)

    const fetchData = async (route: string): Promise<number> => {
        // localhost:8000/membership/api/customers?status=none&count_only=true
        const target = `${MEMBERSHIP_API}${route}`
        const response = await fetch(target)
        const data: CustomerResponse = await response.json()

        if (data.status_code !== 200) return await Promise.reject(data.message)
        const customersData = data.data
        const rows = customersData.rows
        if (rows !== undefined) {
            return await Promise.resolve(rows)
        }

        // if undefined or no data
        return await Promise.resolve(0)
    }

    // Fetch customer count
    useEffect(() => {
        fetchData('/customers?status=none&count_only=true')
            .then((rows) => {
                setCustomerCount(rows)
            })
            .catch((err) => {
                console.log(err)
                setCustomerCount(0)
            })
        fetchData('/customers?status=today&count_only=true')
            .then((rows) => {
                setNewMemberCount(rows)
            })
            .catch((err) => {
                console.log(err)
                setNewMemberCount(0)
            })
        fetchData('/customers?status=expired&count_only=true')
            .then((rows) => {
                setExpiredCount(rows)
            })
            .catch((err) => {
                console.log(err)
                setExpiredCount(0)
            })
        fetchData('/orders?status=pending&count_only=true')
            .then((rows) => {
                setOrderPendingCount(rows)
            })
            .catch((err) => {
                console.log(err)
                setOrderPendingCount(0)
            })
    }, [])

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <FeaturedList customerCount={customerCount} newMemberCount={newMemberCount} expiredCount={expiredCount} orderPendingCount={orderPendingCount} />
        </>
    )
}

Home.getLayout = (page: ReactElement) => {
    return <Dashboard>{page}</Dashboard>
}

export const getServerSideProps: GetServerSideProps<GetServerSidePropsResult> = async (ctx) => {
    const cipherText = setCookie(ctx)
    const userData = ctx.res.getHeader('user-data')

    return {
        props: {
            page_id: cipherText,
            user_data: userData,
        },
    }
}

export default Home
