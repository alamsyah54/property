"use client"

import Link from "next/link"
import { RiBuilding2Fill } from "react-icons/ri"
import { nav } from "@/constants"
import MobileNav from "./MobileNavbar"
import Image from "next/image"

const Nav = () => {
    return (
        <>
            {/* Desktop Navigation */}
            <nav className='lg:block md:block top-0 fixed left-0 w-full p-3 border-b border-white/70 bg-white/50 backdrop-blur-sm shadow-md shadow-gray-500/10 z-10'>
                <div className='flex items-center justify-between lg:justify-evenly md:justify-evenly '>
                    <Link
                        href='/'
                        className='flex items-center justify-center text-gray-800 px-5'
                    >
                        <Image
                            alt='Siridee'
                            width={50}
                            height={50}
                            src='https://static.wixstatic.com/media/ad9f2a_7ff642de1db54105a51db11f6f6b4356~mv2.jpg/v1/crop/x_67,y_22,w_384,h_387/fill/w_111,h_112,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/LINE_ALBUM_15166_%E0%B9%92%E0%B9%93%E0%B9%90%E0%B9%91%E0%B9%91%E0%B9%95_0_edited.jpg'
                        />
                        <span className='font-bold drop-shadow text-xl text-tertiary'>
                            Siridee
                        </span>
                    </Link>
                    <div className='lg:gap-10 gap-7 items-center px-5 flex-between'>
                        <ul className='gap-10 font-bold hidden lg:flex md:flex '>
                            {nav.map((nav) => (
                                <li className='group py-2'>
                                    <Link
                                        key={nav.title}
                                        className='py-2 px-2 hover:bg-gray-300/40 rounded-full'
                                        href={nav.url}
                                    >
                                        {nav.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
