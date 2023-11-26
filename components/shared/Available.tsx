import React from "react"
import { FiCheckCircle } from "react-icons/fi"
import { MdOutlineSell } from "react-icons/md"

const Available = () => {
    const property = false

    return (
        <div className='w-fit px-1.5 py-0.5 flex justify-center items-center gap-1 border-[1px] rounded-full border-black cursor-pointer'>
            {property ? (
                <>
                    <FiCheckCircle className='text-green-600 text-xl' />
                    <p className='text-sm font-semibold'>Available</p>
                </>
            ) : (
                <>
                    <MdOutlineSell className='text-red-600 text-xl' />
                    <p className='text-sm font-semibold'>Sold Out</p>
                </>
            )}
        </div>
    )
}

export default Available
