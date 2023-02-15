import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react'
import { AccountContent, Dashboard } from '../../../components'
import { AccountLayout } from '../../../components/template/AccountLayout'
import { setCookie } from '../../../helpers'
import { PageProps } from '../../../types'
import { NextPageWithLayout } from '../../_app'

const Account: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Account</title>
            </Head>

            <AccountContent />
        </>
    )
}

Account.getLayout = (page: ReactElement) => {
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

export default Account
