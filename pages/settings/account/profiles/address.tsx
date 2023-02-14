import Head from 'next/head'
import { ReactElement } from 'react'
import { AddressContent, Dashboard, ProfileLayout } from '../../../../components'
import { AccountLayout } from '../../../../components/template/AccountLayout'
import { NextPageWithLayout } from '../../../_app'

const Address: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Address</title>
            </Head>

            <AddressContent />
        </>
    )
}

Address.getLayout = (page: ReactElement) => {
    return (
        <Dashboard>
            <AccountLayout>
                <ProfileLayout title="Pengaturan alamat">{page}</ProfileLayout>
            </AccountLayout>
        </Dashboard>
    )
}

export default Address
