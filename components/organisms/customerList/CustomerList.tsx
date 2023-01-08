import React from 'react'
import { Customer } from '../../../types'
import { CustomerListing } from '../../molecules'

interface Props {
    customerList: Customer[]
}

export const CustomerList = React.memo((props: Props) => {
    const { customerList } = props
    // const [data] = useState([])

    return (
        <div>
            <div className="bg-white overflow-auto rounded-lg border-l border-r border-b mb-5">
                <table className="min-w-full table table-nohover">
                    <thead>
                        <tr className="">
                            <th className="text-center border-r py-3 px-4 w-16 whitespace-nowrap">No.</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap w-60">Nomor Pelanggan</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Nama</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Username</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Email</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Pendaftaran</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Status</th>
                            <th className="text-left border-r py-3 px-4 whitespace-nowrap">Tindakan</th>
                        </tr>
                    </thead>

                    <tbody>
                        {customerList.map((val, index) => (
                            <CustomerListing index={index + 1} {...val} key={val.customer_id} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
})

CustomerList.displayName = 'CustomerList'
