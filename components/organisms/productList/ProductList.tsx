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
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap w-60">Nomor Produk</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Nama Produk</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Harga</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Durasi</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Dibuat Pada</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Tindakan</th>
                        </tr>
                    </thead>

                    <tbody>
                        <ProductListing
                            productId="16667839839487"
                            name="Paket Ultimate"
                            price={500000}
                            duration={100}
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores aperiam facilis"
                            createdAt={1672567928}
                            updatedAt={1672623354}
                        />
                    </tbody>
                </table>
            </div>
        </div>
    )
})

ProductList.displayName = 'ProductList'
