import Head from 'next/head'
import { useEffect, useState } from 'react'
import { FeaturedList } from '../components'
import { CustomerResponse } from '../types'

const MEMBERSHIP_API = process.env.MEMBERSHIP_API as string

export default function Home(): React.ReactNode {
    const [customerCount, setCustomerCount] = useState(0)
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
        fetchData('/customers?status=none&count_only=true')
            .then((rows) => {
                setCustomerCount(rows)
            })
            .catch((err) => {
                console.log(err)
                setCustomerCount(0)
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
            <FeaturedList customerCount={customerCount} expiredCount={expiredCount} orderPendingCount={orderPendingCount} />
        </>
    )
}
