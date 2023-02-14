import Head from 'next/head'
import { ReactElement } from 'react'
import { Dashboard, ProfileLayout } from '../../../../components'
import { AccountLayout } from '../../../../components/template/AccountLayout'
import { NextPageWithLayout } from '../../../_app'

const Address: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Address</title>
            </Head>

            <div className="bg-white rounded-lg p-6 roboto">address</div>
        </>
    )
}

Address.getLayout = (page: ReactElement) => {
    return (
        <Dashboard>
            <AccountLayout>
                <ProfileLayout>{page}</ProfileLayout>
            </AccountLayout>
        </Dashboard>
    )
}

export default Address
