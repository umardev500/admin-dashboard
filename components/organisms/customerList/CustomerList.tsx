import React, { useEffect, useState } from 'react'
import { useSyncServerTime } from '../../../hooks'
import { Customer } from '../../../types'
import { NoDataTable } from '../../atoms'
import { CustomerListing } from '../../molecules'

interface Props {
    customerList: Customer[]
}

export const CustomerList = React.memo((props: Props) => {
    const { customerList } = props
    const [serverTime, setServerTime] = useState(0)
    const handleSyncServerTime = useSyncServerTime()

    // const [data] = useState([])

    useEffect(() => {
        handleSyncServerTime()
            .then((dt) => {
                setServerTime(dt)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

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
                            <CustomerListing serverTime={serverTime} index={index + 1} {...val} key={val.customer_id} />
                        ))}

                        <NoDataTable list={customerList} />
                    </tbody>
                </table>
            </div>
        </div>
    )
})

CustomerList.displayName = 'CustomerList'
