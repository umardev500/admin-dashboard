import '../styles/app.scss'
import type { AppProps } from 'next/app'
import { AppProvider, MainProvider } from '../contexts'
import { Dashboard } from '../components'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }: AppProps): React.ReactNode {
    const { pathname } = router

    const noAuth = ['/auth', '/register']

    const isOk = noAuth.find((val) => val === pathname)

    return (
        <MainProvider>
            <AppProvider>
                {isOk === undefined ? (
                    <Dashboard>
                        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                            <Component {...pageProps} />
                        </AnimatePresence>
                    </Dashboard>
                ) : (
                    <Component {...pageProps} />
                )}
            </AppProvider>
        </MainProvider>
    )
}
