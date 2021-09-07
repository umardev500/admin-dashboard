import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { OrderList } from '../../components'
import { Search } from '../../components/atoms'
import { OrderFilterModal, TableDataInfo } from '../../components/molecules'
import { Pagination } from '../../components/molecules/pagination/Pagination'
import { Order, OrderResponse } from '../../types'

const API_URL = process.env.API_URL as string
const DEFAULT_PER_PAGE = 10

const Orders: NextPage = () => {
    const [pages, setPages] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)
    const [rows, setRows] = useState<number>(0)
    const [loading] = useState<boolean>(false)
    const [keyword, setKeyword] = useState('')
    const [filterModalShown, setFilterModalShown] = useState(false)
    const [orderList, setOrderList] = useState<Order[]>([])

    const router = useRouter()
    const params = router.query
    const PAGE = params.page as string
    const SORT = (params.sort as string) ?? 'asc'
    const STATUS = (params.status as string) ?? 'none'

    const searchHandler = useCallback((value: string) => {
        setKeyword(value)
    }, [])

    const filterHandler = useCallback((value: string) => {
        console.log(value)
    }, [])

    // Fetch customers order
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            let target = `${API_URL}/orders?per_page=${DEFAULT_PER_PAGE}&page=${PAGE}&sort=${SORT}&status=${STATUS}`
            if (keyword !== '') target += `&search=${keyword}`

            const response = await fetch(target)
            const data: OrderResponse = await response.json()

            if (data.status_code !== 200) return await Promise.reject(data.message)
            const ordersData = data.data
            const orderList = ordersData.orders
            if (orderList !== undefined) {
                setOrderList(orderList)
                setPages(ordersData.pages)
                setTotal(ordersData.total)
                setRows(ordersData.rows)
                setPerPage(ordersData.per_page ?? 0)
            }
            if (orderList === undefined) {
                setOrderList([])
                setPages(0)
                setTotal(0)
                setRows(0)
                setPerPage(0)
            }
        }

        fetchData().catch((err) => console.log('error catched', err))
    }, [PAGE, SORT, STATUS, keyword])

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
