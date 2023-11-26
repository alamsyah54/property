import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { nav } from "@/constants"
import Link from "next/link"
import { IoMenu } from "react-icons/io5"
import { RiBuilding2Fill } from "react-icons/ri"

const NavContent = () => {
    return (
        <nav className='flex h-screen w-full flex-col pt-10 pb-20 justify-between'>
            <div>
                {nav.map((n) => (
                    <SheetClose asChild key={n.url} className='flex'>
                        <div className='flex items-start'>
                            <Link
                                href={n.url}
                                className='flex gap-2 text-xl w-full p-4 my-4 text-gray-900 items-center'
                            >
                                {n.mobileIcon}
                                <p>{n.title}</p>
                            </Link>
                        </div>
                    </SheetClose>
                ))}
            </div>
        </nav>
    )
}

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <IoMenu className='text-2xl md:hidden lg:hidden' />
            </SheetTrigger>
            <SheetContent
                //@ts-ignore
                side='left'
                className='border-none text-red-500 bg-gray-100 dark:bg-dark-700 drop-shadow-lg'
            >
                <Link
                    href='/'
                    className='flex items-center justify-start text-gray-800 px-5'
                >
                    <RiBuilding2Fill className='text-4xl mx-2 drop-shadow text-tertiary' />
                    <span className='font-bold drop-shadow text-xl text-tertiary'>
                        Property
                    </span>
                </Link>
                <div className='text-gray-900 dark:text-gray-300'>
                    <NavContent />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
