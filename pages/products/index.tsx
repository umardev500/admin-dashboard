import Head from 'next/head'
import { ReactElement, useCallback, useEffect, useState } from 'react'
import { Dashboard } from '../../components'
import { Search } from '../../components/atoms'
import { CreateProductModal, TableDataInfo } from '../../components/molecules'
import { ProductList } from '../../components/organisms'
import { Product, ProductResponse } from '../../types'
import { NextPageWithLayout } from '../_app'

const MEMBERSHIP_API = process.env.MEMBERSHIP_API as string
const DEFAULT_PER_PAGE = 10

const ProductPage: NextPageWithLayout = () => {
    const [perPage] = useState<number>(DEFAULT_PER_PAGE)
    const [total, setTotal] = useState<number>(0)
    const [rows, setRows] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)
    const [keyword, setKeyword] = useState('')
    const [createModal, setCreateModal] = useState(false)
    const [productList, setProductList] = useState<Product[]>([])

    const searchHandler = useCallback((value: string) => {
        setLoading(true)
        setKeyword(value)
    }, [])

    const savedHandler = useCallback(() => {}, [])

    // Fetch product data
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            let target = `${MEMBERSHIP_API}/products`
            if (keyword !== '') target += `?search=${keyword}`

            const response = await fetch(target)
            const data: ProductResponse = await response.json()

            if (data.status_code !== 200) return await Promise.reject(data.message)
            const productsData = data.data
            const products = productsData.products
            if (products !== undefined) {
                setProductList(products)
                setTotal(productsData.total)
                setRows(productsData.rows)
            }
            if (products === undefined) {
                if (productList.length > 0) setProductList([])
                if (total > 0) setTotal(0)
                if (rows > 0) setRows(0)
            }
        }

        fetchData()
            .then(() => {
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                console.log('err catched', err)
            })
    }, [keyword])

    return (
        <>
            <Head>
                <title>Products</title>
            </Head>
            <div className="pt-4">
                <div className="bg-white pt-4 pb-2 px-10 rounded-lg">
                    <h1 className="text-2xl font-bold text-gray-500 mb-6 mt-2 roboto">Data Produk</h1>

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-5">
                        <button
                            onClick={() => setCreateModal(true)}
                            className="outline-none bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md font-medium roboto whitespace-nowrap mb-4 lg:mb-0 flex items-center justify-center lg:justify-start"
                        >
                            Tambah data
                        </button>
                        <Search callback={searchHandler} title="Search" placeholder="Search" />
                    </div>

                    <ProductList productList={productList} />
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <TableDataInfo loading={loading} total={total} perPage={perPage} rows={rows} />
                    </div>
                </div>
            </div>
            {createModal ? <CreateProductModal modalSetState={setCreateModal} callback={savedHandler} /> : null}
        </>
    )
}

ProductPage.getLayout = (page: ReactElement) => {
    return <Dashboard>{page}</Dashboard>
}

export default ProductPage
