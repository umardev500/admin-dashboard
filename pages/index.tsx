import Head from 'next/head'
import { FeaturedList } from '../components'

export default function Home(): React.ReactNode {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <FeaturedList />
        </>
    )
}
