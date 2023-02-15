import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react'
import { Dashboard } from '../../../components'
import { OverviewEarning } from '../../../components/molecules'
import { AccountLayout } from '../../../components/template/AccountLayout'
import { setCookie } from '../../../helpers'
import { useEarning } from '../../../hooks/useEarning'
import { PageProps } from '../../../types'
import { NextPageWithLayout } from '../../_app'

const Earning: NextPageWithLayout = () => {
    const earning = useEarning()

    return (
        <>
            <Head>
                <title>Earning</title>
            </Head>
            <div className="mt-10">
                <OverviewEarning earning={earning} isPage />
            </div>
        </>
    )
}

Earning.getLayout = (page: ReactElement) => {
    return (
        <Dashboard>
            <AccountLayout>{page}</AccountLayout>
        </Dashboard>
    )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (ctx) => {
    const cipherText = setCookie(ctx)
    const userInfo = ctx.res.getHeader('user-data') as string

    return {
        props: {
            pageId: cipherText,
            userInfo,
        },
    }
}

export default Earning
