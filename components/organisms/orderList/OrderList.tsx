import React from 'react'
import { OrderListing } from '../../molecules'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const OrderList = React.memo((props: Props) => {
    // const router = useRouter()
    // const currentPage = router.query.page ?? '0' // get current page

    return (
        <div>
            <div className="bg-white overflow-auto rounded-lg border-l border-r border-b mb-5">
                <table className="min-w-full table table-nohover">
                    <thead>
                        <tr className="">
                            <th className="text-center border-r py-3 px-4 w-16 whitespace-nowrap">No.</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap w-60">Nomor Pesanan</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap w-60">Nama Pemesan</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Produk</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Harga Produk</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Status Pesanan</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Tanggal Pemesanan</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Tindakan</th>
                        </tr>
                    </thead>

                    <tbody>
                        <OrderListing />
                    </tbody>
                </table>
            </div>
        </div>
    )
})

OrderList.displayName = 'OrderList'
