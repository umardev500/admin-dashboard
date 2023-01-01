import { NextPage } from 'next'
import { useCallback, useState } from 'react'
import { Search } from '../../components/atoms'
import { CreateProductModal } from '../../components/molecules'
import { ProductList } from '../../components/organisms/productList/ProductList'

const Product: NextPage = () => {
    const [createModal, setCreateModal] = useState(false)

    const searchHandler = useCallback((value: string) => {
        console.log(value)
    }, [])

    const savedHandler = useCallback(() => {}, [])

    return (
        <>
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

                    <ProductList />
                </div>
            </div>
            {createModal ? <CreateProductModal modalSetState={setCreateModal} callback={savedHandler} /> : null}
        </>
    )
}

export default Product
