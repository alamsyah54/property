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
            className='w-full flex-col flex-center px-5 md:px-10 lg:px-32'
        >
            <div className='lg:p-10 mb-16 lg:shadow-lg lg:bg-[#f9f9f9] full flex-col flex-center'>
                <h1 className='text-3xl font-extrabold mb-10'>PROPERTIES</h1>
                {properties.map((property) => (
                    <div className='flex flex-col lg:flex-row items-start justify-center w-full my-16 mb lg:gap-10 max-h-full'>
                        <div className='flex flex-col items-start w-full overflow-hidden h-fit group'>
                            <div className='lg:hidden md:hidden relative group-hover:scale-105 duration-500 justify-center flex'>
                                <Image
                                    src={property.thumbnail}
                                    alt='Tumbnail'
                                    width={1000}
                                    height={1000}
                                    className='w-full bg-red-600'
                                />
                            </div>
                            <div className='hidden lg:grid md:grid grid-cols-2 w-full'>
                                {property.pictures
                                    .slice(0, 4)
                                    .map((picture, i) => (
                                        <div
                                            key={i}
                                            className='overflow-hidden h-full w-full'
                                        >
                                            <Image
                                                src={picture}
                                                alt='Tumbnail'
                                                width={1000}
                                                height={1000}
                                                className='w-full max-h-[300px] min-h-full duration-700 hover:scale-105 bg-cover bg-center bg-no-repeat'
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className='flex flex-col items-start justify-between w-full mt-5 lg:m-0'>
                            <div className='flex lg:flex-col gap-1 justify-between lg:items-start w-full mb-3 md:mb-6 '>
                                <h2 className='text-3xl font-black'>
                                    {property.name}
                                </h2>
                                <div className='flex flex-col items-end lg:items-start'>
                                    <h3 className='text-2xl font-bold italic lg:mb-2'>
                                        ฿{property.price}
                                    </h3>
                                    <Available available={property.available} />
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
            </div>
        </section>
    )
}

export default SalesSection
