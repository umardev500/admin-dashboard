import Head from 'next/head'
import { ReactElement } from 'react'
import { AuthContent, Dashboard, ProfileLayout } from '../../../../components'
import { AccountLayout } from '../../../../components/template/AccountLayout'
import { NextPageWithLayout } from '../../../_app'

const Authentication: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Authentication</title>
            </Head>
            <AuthContent />
        </>
    )
}

Authentication.getLayout = (page: ReactElement) => {
    return (
        <Dashboard>
            <AccountLayout>
                <ProfileLayout title="Pengaturan autentikasi">{page}</ProfileLayout>
            </AccountLayout>
        </Dashboard>
    )
}

export default Authentication
