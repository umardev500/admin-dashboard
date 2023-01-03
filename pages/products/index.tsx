import { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import { Search } from '../../components/atoms'
import { CreateProductModal, TableDataInfo } from '../../components/molecules'
import { ProductList } from '../../components/organisms'
import { Product, ProductResponse } from '../../types'

const MEMBERSHIP_API = process.env.MEMBERSHIP_API as string
// const DEFAULT_PER_PAGE = 10

const ProductPage: NextPage = () => {
    const [perPage] = useState<number>(0)
    const [total] = useState<number>(0)
    const [rows] = useState<number>(0)
    const [loading] = useState<boolean>(false)
    const [createModal, setCreateModal] = useState(false)
    const [productList, setProductList] = useState<Product[]>([])

    const searchHandler = useCallback((value: string) => {
        console.log(value)
    }, [])

    const savedHandler = useCallback(() => {}, [])

    // Fetch product data
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const target = `${MEMBERSHIP_API}/products`
            const response = await fetch(target)
            const data: ProductResponse = await response.json()
            console.log(data)

            if (data.status_code !== 200) return await Promise.reject(data.message)
            const productsData = data.data
            const products = productsData.products
            if (products !== undefined) {
                setProductList(products)
            }
            if (products === undefined) {
                if (productList.length > 0) setProductList([])
            }
        }

        fetchData().catch((err) => console.log('err catched', err))
    }, [])

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
                            className="outline-none bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded-md font-medium roboto whitespace-nowrap mb-4 lg:mb-0 flex items-center justify-center lg:justify-start"
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

export default ProductPage
