import React from 'react'
import { ProductListing } from '../../molecules'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const ProductList = React.memo((props: Props) => {
    // const [data] = useState([])

    return (
        <div>
            <div className="bg-white overflow-auto rounded-lg border-l border-r border-b mb-5">
                <table className="min-w-full table table-nohover">
                    <thead>
                        <tr className="">
                            <th className="text-center border-r py-3 px-4 w-16 whitespace-nowrap">No.</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap w-60">ID Produk</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Nama Produck</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Harga Produk</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Durasi</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Dibuat Pada</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Tindakan</th>
                        </tr>
                    </thead>

                    <tbody>
                        <ProductListing />
                    </tbody>
                </table>
            </div>
        </div>
    )
})

ProductList.displayName = 'ProductList'
