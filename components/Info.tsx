import { FiLayers } from "react-icons/fi"
import { CgNotes } from "react-icons/cg"
import { TfiMapAlt } from "react-icons/tfi"

const Info = () => {
    return (
        <section
            id='Information'
            className='flex justify-evenly gap-5 md:gap-16 lg:gap-24 py-10 my-20'
        >
            <div className='flex gap-3 flex-col items-center text-center'>
                <CgNotes className='text-4xl text-tertiary' />
                <p className='text-xs md:text-md lg:text-lg'>
                    FREE REGISTRATION <br /> NO HIDDEN FEES
                </p>
            </div>
            <div className='flex gap-3 flex-col items-center text-center'>
                <FiLayers className='text-4xl text-tertiary' />
                <p className='text-xs md:text-md lg:text-lg'>
                    PROPERTY APPRAISAL <br /> FREE OF CHARGE
                </p>
            </div>
            <div className='flex gap-3 flex-col items-center text-center'>
                <TfiMapAlt className='text-4xl text-tertiary' />
                <p className='text-xs md:text-md lg:text-lg'>
                    LARGE COVERAGE <br /> OFFICES IN 2 LOCATIONS
                </p>
            </div>
        </section>
    )
}

export default Info
