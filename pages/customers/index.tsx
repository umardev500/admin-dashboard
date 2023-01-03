import { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useState } from 'react'
import { CustomerList } from '../../components'
import { Search } from '../../components/atoms'
import { CustomerFilterModal } from '../../components/molecules'

const Customers: NextPage = () => {
    const [filterModal, setFilterModal] = useState(false)

    const searchHandler = useCallback((value: string) => {
        console.log(value)
    }, [])

    const filterSaveHandler = useCallback(() => {}, [])

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
                            className="outline-none bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded-md font-medium roboto whitespace-nowrap mb-4 lg:mb-0 flex items-center justify-center lg:justify-start"
                        >
                            Filter tampilan
                        </button>
                        <Search callback={searchHandler} title="Search" placeholder="Search here..." />
                    </div>

                    <CustomerList />
                </div>
            </div>

            {filterModal ? <CustomerFilterModal saveCallback={filterSaveHandler} modalSetState={setFilterModal} /> : null}
        </>
    )
}

export default Customers