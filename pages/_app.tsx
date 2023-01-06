import '../styles/app.scss'
import type { AppProps } from 'next/app'
import { AppProvider } from '../contexts'
import { Dashboard } from '../components'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps): React.ReactNode {
    return (
        <AppProvider>
            <Dashboard>
                <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                    <Component {...pageProps} />
                </AnimatePresence>
            </Dashboard>
        </AppProvider>
    )
}
