import { NextRouter } from 'next/router'

export const checkPath = (router: NextRouter, path: string): boolean => {
    const curPath = router.pathname

    return curPath === path
}
