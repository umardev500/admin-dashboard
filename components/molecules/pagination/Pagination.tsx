import { useRouter } from 'next/router'
import React, { Dispatch, SetStateAction, useCallback } from 'react'
import ReactPaginate from 'react-paginate'

interface Props {
    pageCount: number
    setPage: Dispatch<SetStateAction<number>>
}

export const Pagination: React.FC<Props> = ({ pageCount, setPage }) => {
    const router = useRouter()
    const currentPath = router.pathname

    const handlePageChange = useCallback(({ selected }: { selected: number }) => {
        setPage(selected)
        if (selected === 0) {
            router.push(`${currentPath}`).catch((err) => console.log(err))
        } else {
            router.push(`${currentPath}?page=${selected}`).catch((err) => console.log(err))
        }
    }, [])

    return (
        <div className="py-5 flex lg:justify-end overflow-auto">
            <ReactPaginate
                onPageChange={handlePageChange}
                className="react-paginate"
                breakLabel="..."
                nextLabel="Next"
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="Prev"
                renderOnZeroPageCount={undefined}
                activeClassName="active"
            />
        </div>
    )
}
