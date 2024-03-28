'use client'
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
    const router = useRouter();

    return (
        <div id='page-buttons' className='flex justify-between mt-4'>
            <button
                className='border-2 py-1 px-4 border-blue-400 text-white hover:blue-red-700 shadow-md  hover:shadow-lg transition-all bg-blue-400 bg-opacity-75 hover:bg-opacity-100'
                onClick={() => router.replace(`?page=${page - 1}`)}
                disabled={!hasPrev}
            >
                Previous
            </button>
            <button
                className='border-2 py-1 px-4 border-blue-400 text-white hover:blue-red-700 shadow-md  hover:shadow-lg transition-all bg-blue-400 bg-opacity-75 hover:bg-opacity-100'
                onClick={() => router.replace(`?page=${page + 1}`)}
                disabled={!hasNext}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination