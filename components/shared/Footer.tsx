import Image from "next/image"
import Link from "next/link"
import { TiSocialFacebookCircular } from "react-icons/ti"
import { LuMail } from "react-icons/lu"

import {
    RiBuilding2Fill,
    RiInstagramLine,
    RiMessengerLine,
} from "react-icons/ri"

const Footer = () => {
    return (
        <footer className='flex justify-center items-center w-full px-10 lg:px-32 py-5 border-t-[1px] border-black/30 dark:border-white/30 bg-gray-100 dark:bg-dark-600 drop-shadow-md'>
            <div className='flex w-full justify-center md:justify-between lg:justify-between items-center flex-col md:flex-row lg:flex-row gap-2'>
                <div className='flex items-center gap-5 px-5 justify-start md:flex-col md:items-start lg:flex-col lg:items-start'>
                    <Link
                        href='/'
                        className='flex items-center justify-center '
                    >
                        <RiBuilding2Fill className='font-bold drop-shadow text-3xl mx-2 text-tertiary' />
                        <span className='font-bold drop-shadow text-xl text-tertiary'>
                            Siridee
                        </span>
                    </Link>
                    <p className='text-xs capitalize select-none'>
                        &copy; 2023 Siridee Property. All Rights Reserved
                    </p>
                </div>
                <div className='flex items-center px-5 flex-col-reverse lg:items-end md:items-end'>
                    <div className='flex gap-2 justify-center'>
                        <Link
                            href='https://www.facebook.com/profile.php?id=100070025136262'
                            target='_blank'
                        >
                            <TiSocialFacebookCircular className='text-2xl' />
                        </Link>
                        <Link
                            href='https://instagram.com/siridee_property'
                            target='_blank'
                        >
                            <RiInstagramLine className='text-2xl' />
                        </Link>
                        <Link
                            href='https://www.facebook.com/messages/t/108694238122198'
                            target='_blank'
                        >
                            <RiMessengerLine className='text-2xl' />
                        </Link>
                        <Link
                            href='mailto:sirideedesign@gmail.com'
                            target='_blank'
                        >
                            <LuMail className='text-2xl' />
                        </Link>
                    </div>
                    <p className='text-sm capitalize mb-2'>+6691-949-9942</p>
                    <Link
                        href='https://maps.app.goo.gl/Pe5BZP7dP1Cp2rc49'
                        target='_blank'
                        className='text-sm text-center md:text-end lg:text-end'
                    >
                        Rim Tai Subdistrict, Mae Rim District,
                        <br /> Chiang Mai 50180
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
