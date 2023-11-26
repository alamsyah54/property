import { properties } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Available from "./shared/Available"
import { FaListCheck, FaRegStar } from "react-icons/fa6"

const SalesSection = () => {
    return (
        <section
            id='sales'
            className='w-full flex-col flex-center px-5 md:px-10 lg:px-20'
        >
            <h1 className='text-3xl font-extrabold mb-10'>PROPERTIES</h1>
            {properties.map((property) => (
                <div className='flex flex-col lg:flex-row items-start justify-center w-full my-10 lg:gap-10'>
                    <div className='flex flex-col items-center w-full overflow-hidden h-fit group '>
                        <div className='relative group-hover:scale-105 duration-500'>
                            <Image
                                src={property.thumbnail}
                                alt='Tumbnail'
                                width={1000}
                                height={1000}
                                className='w-full h-full lg:h-[750px]'
                            />
                            <Link
                                href='/asd'
                                className='absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-1000 flex justify-center items-center'
                            >
                                <div className='px-3 py-1 bg-white shadow-lg shadow-black/50'>
                                    See More
                                </div>
                            </Link>
                        </div>
                        <div className='w-full'>
                            <p className='mt-5 font-medium'>
                                {property.location}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-between w-full mt-5'>
                        <div className='flex lg:flex-col gap-1 justify-between lg:items-start w-full mb-3 md:mb-6 '>
                            <h2 className='text-3xl font-black'>
                                {property.name}
                            </h2>
                            <div className='flex flex-col items-end lg:items-start'>
                                <h3 className='text-2xl font-bold italic lg:mb-2'>
                                    ฿{property.price}
                                </h3>
                                <Available />
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-2 pr-5'>
                            <p className='text-gray-500 font-sarabun'>
                                {property.description}
                            </p>
                            <Link
                                href='/sales'
                                className='flex text-sm bg-gray-200 sm:text-base border-[2px] gap-1 py-2 px-4 sm:py-1 sm:px-2 drop-shadow-lg cursor-pointer my-3'
                            >
                                View Details
                            </Link>
                            {/* <div className='mt-5 w-full gap-2'>
                                <h2 className='font-semibold flex gap-2 items-center'>
                                    <FaListCheck className='text-xl' />
                                    Additional Features
                                </h2>
                                {property.additionalFeatures.map((features) => (
                                    <div className='px-3 font-sarabun items-start flex gap-2 my-3 '>
                                        <span className='text-xl'>•</span>
                                        <p>{features}</p>
                                    </div>
                                ))}
                                <h2 className='font-semibold flex gap-2 items-center'>
                                    <FaRegStar className='text-xl' /> Property
                                    Highlights
                                </h2>
                                {property.propertyHighlights.map(
                                    (properties) => (
                                        <div className='px-3 font-sarabun items-start flex gap-2 my-3 '>
                                            <span className='text-xl'>•</span>
                                            <p>{properties}</p>
                                        </div>
                                    ),
                                )}
                            </div> */}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default SalesSection
