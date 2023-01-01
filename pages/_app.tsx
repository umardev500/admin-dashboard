import '../styles/app.scss'
import type { AppProps } from 'next/app'
import { AppProvider } from '../contexts'
import { Dashboard } from '../components'

export default function App({ Component, pageProps }: AppProps): React.ReactNode {
    return (
        <AppProvider>
            <Dashboard>
                <Component {...pageProps} />
            </Dashboard>
        </AppProvider>
    )
}
