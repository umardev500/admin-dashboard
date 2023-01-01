import { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useState } from 'react'
import { Search } from '../../components/atoms'
import { OrderFilterModal, TableDataInfo } from '../../components/molecules'
import { Pagination } from '../../components/molecules/pagination/Pagination'

const Orders: NextPage = () => {
    const [pages] = useState<number>(18)
    const [, setPage] = useState<number>(0)
    const [perPage] = useState<number>(0)
    const [total] = useState<number>(0)
    const [rows] = useState<number>(0)
    const [loading] = useState<boolean>(false)
    const [filterModalShown, setFilterModalShown] = useState(false)

    const searchHandler = useCallback((value: string) => {
        console.log(value)
    }, [])

    const filterHandler = useCallback((value: string) => {
        console.log(value)
    }, [])

    console.log('RENDER')

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
                    {/* <OrderList /> */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <TableDataInfo loading={loading} total={total} perPage={perPage} rows={rows} />

                        <Pagination pageCount={pages} setPage={setPage} />
                    </div>
                </div>
            </div>

            {filterModalShown ? <OrderFilterModal saveCallback={filterHandler} modalSetState={setFilterModalShown} /> : null}
        </>
    )
}

export default Orders
