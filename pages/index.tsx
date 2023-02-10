import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ReactElement, useEffect, useState } from 'react'
import { Dashboard, FeaturedList } from '../components'
import { setCookie } from '../helpers'
import { CustomerResponse } from '../types'
import { NextPageWithLayout } from './_app'

const MEMBERSHIP_API = process.env.MEMBERSHIP_API as string

interface GetServerSidePropsResult {
    pageId: string
    userData: any
}

const Home: NextPageWithLayout = () => {
    const [customerCount, setCustomerCount] = useState(0)
    const [newMemberCount, setNewMemberCount] = useState(0)
    const [expiredCount, setExpiredCount] = useState(0)
    const [orderPendingCount, setOrderPendingCount] = useState(0)

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
        const batchUpdate = async (): Promise<void> => {
            let total = 0
            let today = 0
            let expired = 0
            let pending = 0

            try {
                const response = await fetchData('/customers?status=none&count_only=true')
                total = response
            } catch (err) {
                console.log(err)
            }

            try {
                const response = await fetchData('/customers?status=today&count_only=true')
                today = response
            } catch (err) {
                console.log(err)
            }

            try {
                const response = await fetchData('/customers?status=expired&count_only=true')
                expired = response
            } catch (err) {
                console.log(err)
            }

            try {
                const response = await fetchData('/customers?status=pending&count_only=true')
                pending = response
            } catch (err) {
                console.log(err)
            }

            setCustomerCount(total)
            setNewMemberCount(today)
            setExpiredCount(expired)
            setOrderPendingCount(pending)
        }

        batchUpdate().catch(() => {})
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
            pageId: cipherText,
            userData,
        },
    }
}

export default Home
