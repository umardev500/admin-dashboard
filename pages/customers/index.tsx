import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement, useCallback, useEffect, useState } from 'react'
import { CustomerList, Dashboard } from '../../components'
import { Search } from '../../components/atoms'
import { CustomerFilterModal, TableDataInfo } from '../../components/molecules'
import { Pagination } from '../../components/molecules/pagination/Pagination'
import { setCookie } from '../../helpers'
import { Customer, CustomerResponse, PageProps } from '../../types'
import { NextPageWithLayout } from '../_app'

const MEMBERSHIP_API = process.env.MEMBERSHIP_API as string
const DEFAULT_PER_PAGE = 10

const Customers: NextPageWithLayout = () => {
    const [pages, setPages] = useState<number>(0)
    const [perPage] = useState<number>(DEFAULT_PER_PAGE)
    const [total, setTotal] = useState<number>(0)
    const [rows, setRows] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)
    const [keyword, setKeyword] = useState('')
    const [customerList, setCustomerList] = useState<Customer[]>([])
    const [filterModal, setFilterModal] = useState(false)

    const router = useRouter()
    const params = router.query
    const PAGE = params.page as string
    const SORT = (params.sort as string) ?? 'asc'
    const STATUS = (params.status as string) ?? 'none'

    const searchHandler = useCallback((value: string) => {
        setKeyword(value)
        setLoading(true)
    }, [])

    const filterSaveHandler = useCallback(() => {}, [])

    // Fetch cusomters data
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            let target = `${MEMBERSHIP_API}/customers?per_page=${DEFAULT_PER_PAGE}`
            if (PAGE !== undefined) target += `&page=${PAGE}`
            if (SORT !== undefined) target += `&sort=${SORT}`
            if (STATUS !== undefined) target += `&status=${STATUS}`
            if (keyword !== '') target += `&search=${keyword}`

            const response = await fetch(target)
            const jsondData: CustomerResponse = await response.json()

            if (jsondData.status_code !== 200) return await Promise.reject(jsondData.message)
            const payload = jsondData.data.payload
            const isEmpty = jsondData.data.is_empty
            const customers = payload.customers
            if (!isEmpty) {
                setCustomerList(customers)
                setPages(payload.pages)
                setTotal(payload.total)
                setRows(payload.rows)
            }
            if (isEmpty) {
                if (customerList.length > 0) setCustomerList([])
                if (pages > 0) setPages(0)
                if (total > 0) setTotal(0)
                if (rows > 0) setRows(0)
            }
        }

        fetchData()
            .then(() => {
                setLoading(false)
            })
            .catch((err) => {
                console.log('catched error', err)
                setLoading(false)
            })
    }, [keyword, PAGE, SORT, STATUS])

    return (
        <>
            <Head>
                <title>Customers</title>
            </Head>
            <div className="pt-4">
                <div className="bg-white pt-4 pb-2 px-10 rounded-lg">
                    <h1 className="text-2xl font-bold text-gray-500 mb-6 mt-2 roboto">Data Pelanggan</h1>

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-5">
                        <button
                            onClick={() => setFilterModal(true)}
                            className="outline-none bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md font-medium roboto whitespace-nowrap mb-4 lg:mb-0 flex items-center justify-center lg:justify-start"
                        >
                            Filter tampilan
                        </button>
                        <Search callback={searchHandler} title="Search" placeholder="Search here..." />
                    </div>

                    <CustomerList customerList={customerList} />
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <TableDataInfo loading={loading} total={total} perPage={perPage} rows={rows} />

                        <Pagination pageCount={pages} />
                    </div>
                </div>
            </div>

            {filterModal ? <CustomerFilterModal saveCallback={filterSaveHandler} modalSetState={setFilterModal} /> : null}
        </>
    )
}

Customers.getLayout = (page: ReactElement) => {
    return <Dashboard>{page}</Dashboard>
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (ctx) => {
    const cipherText = setCookie(ctx)
    const userInfo = ctx.res.getHeader('user-data') as string

    return {
        props: {
            pageId: cipherText,
            userInfo,
        },
    }
}

export default Customers
