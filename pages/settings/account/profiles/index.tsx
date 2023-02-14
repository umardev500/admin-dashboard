import Head from 'next/head'
import { ReactElement } from 'react'
import { Dashboard, ProfileContent, ProfileLayout } from '../../../../components'
import { AccountLayout } from '../../../../components/template/AccountLayout'
import { NextPageWithLayout } from '../../../_app'

const Profiles: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Address</title>
            </Head>

            <ProfileContent />
        </>
    )
}

Profiles.getLayout = (page: ReactElement) => {
    return (
        <Dashboard>
            <AccountLayout>
                <ProfileLayout title="Pengaturan profil">{page}</ProfileLayout>
            </AccountLayout>
        </Dashboard>
    )
}

export default Profiles
