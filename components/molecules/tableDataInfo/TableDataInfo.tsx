import React from 'react'

interface Props {
    total: number
    perPage: number
    rows: number
    loading: boolean
}

export const TableDataInfo = React.memo(({ total, perPage, rows, loading }: Props) => {
    return (
        <div className="flex flex-wrap">
            <span className="text-gray-500 roboto whitespace-nowrap mr-5 mb-1.5 lg:mb-0">Total: {total}</span>
            <span className="text-gray-500 roboto whitespace-nowrap mr-5 mb-1.5 lg:mb-0">Perpage: {perPage}</span>
            <span className="text-gray-500 roboto whitespace-nowrap mr-5 mb-1.5 lg:mb-0">Data size: {rows}</span>
            {loading ? <span className="text-gray-500 roboto">Loading...</span> : null}
        </div>
    )
})

TableDataInfo.displayName = 'TableDataInfo'
