import { useCallback } from 'react'
import { getServerTime } from '../helpers'

export const useSyncServerTime = (): (() => Promise<any>) => {
    const handleSyncServerTime = useCallback(async () => {
        try {
            const time = await getServerTime()
            return time
        } catch (err) {
            return err
        }
    }, [])

    return handleSyncServerTime
}
