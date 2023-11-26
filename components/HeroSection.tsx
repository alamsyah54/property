"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"

// https://coolors.co/palette/ffe169-fad643-edc531-dbb42c-c9a227-b69121-ad881e-a47e1b-926c15-805b10
// https://coolors.co/palette/ffe169-fad643-edc531-dbb42c-b69121-a47e1b-926c15

export default function HeroSection() {
    return (
        <AnimatePresence mode='wait'>
            <section id='hero' className='duration-500 w-full'>
                {/* Desktop HeroSection */}
                <div
                    className='flex h-fit w-full justify-between items-end md:items-center lg:items-center'
                    style={{
                        background: "url(/images/house1.jpg)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top center",
                        width: "100%",
                        height: "100vh",
                    }}
                >
                    <div className='w-full flex justify-between'>
                        <div className='justify-center items-start flex flex-col h-full p-7 lg:p-20 md:p-14 sm:p-10'>
                            <h1 className='text-white font-bold font-sarabun py-2 text-4xl lg:text-6xl md:text-5xl sm:text-3xl drop-shadow-lg'>
                                Discover Exceptional Houses for Sale in Chiang
                                Mai
                            </h1>
                            <p className='lg:text-xl md:text-md sm:text-base text-white drop-shadow-lg py-2 backdrop-blur-sm'>
                                Brand New Fully-Furnished House with Swimming
                                Pool, Breathtaking Mountain Views{" "}
                                <br className='hidden lg:block' /> in Mae Rim,
                                Chiang Mai, Thailand - Unbeatable Value at
                                ฿14.9M
                            </p>
                            <Link
                                href='#sales'
                                className='flex fonts text-white text-xl sm:text-base border-[2px] gap-1 py-2 px-4 sm:py-1 sm:px-2 bg-white/20 drop-shadow-lg cursor-pointer hover:bg-white/50 hover:text-tertiary hover:border-tertiary duration-500 my-3'
                            >
                                <p>Explore Now</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatePresence>
    )
}
