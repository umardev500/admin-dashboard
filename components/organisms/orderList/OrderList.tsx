import React from 'react'
import { Order } from '../../../types'
import { OrderListing } from '../../molecules'

interface Props {
    orderList: Order[]
}

export const OrderList = React.memo((props: Props) => {
    const { orderList } = props
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
                        {orderList.map((val, index) => (
                            <OrderListing index={index + 1} {...val} key={val.order_id} />
                        ))}

                        {orderList.length < 1 ? (
                            <tr>
                                <td className="px-4 border-r border-b border-slate-200 py-2.5" colSpan={9}>
                                    No data
                                </td>
                            </tr>
                        ) : null}
                    </tbody>
                </table>
            </div>
        </div>
    )
})

OrderList.displayName = 'OrderList'
