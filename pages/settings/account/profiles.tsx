import { ReactElement } from 'react'
import { Dashboard } from '../../../components'
import { AccountLayout } from '../../../components/template/AccountLayout'
import { NextPageWithLayout } from '../../_app'

const Profiles: NextPageWithLayout = () => {
    return <></>
}

Profiles.getLayout = (page: ReactElement) => {
    return (
        <Dashboard>
            <AccountLayout>{page}</AccountLayout>
        </Dashboard>
    )
}

export default Profiles
