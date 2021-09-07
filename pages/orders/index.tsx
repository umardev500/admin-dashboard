import { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import { OrderList } from '../../components'
import { Search } from '../../components/atoms'
import { OrderFilterModal, TableDataInfo } from '../../components/molecules'
import { Pagination } from '../../components/molecules/pagination/Pagination'
import { Order, OrderResponse } from '../../types'

const API_URL = process.env.API_URL as string

const Orders: NextPage = () => {
    const [pages, setPages] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)
    const [rows, setRows] = useState<number>(0)
    const [loading] = useState<boolean>(false)
    const [filterModalShown, setFilterModalShown] = useState(false)
    const [orderList, setOrderList] = useState<Order[]>([])

    const searchHandler = useCallback((value: string) => {
        console.log(value)
    }, [])

    const filterHandler = useCallback((value: string) => {
        console.log(value)
    }, [])

    // Fetch customers order
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const target = `${API_URL}/orders`
            const response = await fetch(target)
            const data: OrderResponse = await response.json()

            if (data.status_code !== 200) return await Promise.reject(data.message)
            const ordersData = data.data
            const orderList = ordersData.orders
            if (orderList !== undefined) setOrderList(orderList)
            if (orderList === undefined) setOrderList([])
            if (orderList !== undefined) setPages(ordersData.pages)
            if (orderList !== undefined) setTotal(ordersData.total)
            if (orderList !== undefined) setRows(ordersData.rows)
            if (orderList !== undefined) setPerPage(ordersData.per_page ?? 0)
        }

        fetchData().catch((err) => console.log('error catched', err))
    }, [])

    return (
        <>
            <Head>
                <title>Orders</title>
            </Head>

            <div className="pt-4">
                <div className="bg-white pt-4 pb-2 px-10 rounded-lg">
                    <h1 className="text-2xl font-bold text-gray-500 mb-6 mt-2 roboto">Data Pemesanan</h1>

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-5">
                        <button
                            onClick={() => setFilterModalShown(true)}
                            className="outline-none bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded-md font-medium roboto whitespace-nowrap mb-4 lg:mb-0 flex items-center justify-center lg:justify-start"
                        >
                            Filter tampilan
                        </button>
                        <Search callback={searchHandler} title="Search" placeholder="Search here..." />
                    </div>
                    <OrderList orderList={orderList} />
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <TableDataInfo loading={loading} total={total} perPage={perPage} rows={rows} />

                        <Pagination pageCount={pages} />
                    </div>
                </div>
            </div>

            {filterModalShown ? <OrderFilterModal saveCallback={filterHandler} modalSetState={setFilterModalShown} /> : null}
        </>
    )
}

export default Orders
