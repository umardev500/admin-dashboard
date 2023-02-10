export const getCustomerStatusClass = (status: string, expiredTime?: boolean): string => {
    if ((expiredTime !== undefined && expiredTime) || status === 'expired') return 'bg-amber-400'
    if (status === 'pending') return 'bg-indigo-300'
    if (status === 'active') return 'bg-green-400'

    return ''
}
