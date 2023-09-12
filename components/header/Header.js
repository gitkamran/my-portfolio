"use client"

import Link from "next/link"
import Navbar from "./Navbar"
import SocialMedia from "./SocialMedia"
import { BsList, BsX } from "react-icons/bs"
import { useState } from "react"
import NavbarMobile from "./NavbarMobile"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const menuHandler = () => {
        setShowMenu(!showMenu)
    }
    return (
        <header className={`p-2 fixed top-0 z-50 w-full bg-indigo-100`}>
            <div className="flex items-center gap-4">
                <Link href="/#about" className="text-zinc-600 text-lg font-bold whitespace-nowrap">Mohammad Kamran</Link>
                <div className="hidden md:flex items-center justify-between w-full">
                    <Navbar />
                    <SocialMedia />
                </div>
                <div className="md:hidden flex items-center justify-end w-full">
                    <BsList onClick={menuHandler} className="text-3xl" />
                </div>
            </div>
            <div className={showMenu ?
                "bg-black/70 fixed top-0 left-0 w-full h-screen md:hidden" : ""}>
                <div className={showMenu ?
                    "bg-indigo-100 fixed top-0 left-0 w-[75%] sm:w-[60%] h-screen ease-in duration-500 delay-100 z-20" :
                    "bg-indigo-100 fixed top-0 left-[-100%] ease-out duration-500 w-[75%] sm:w-[60%]"
                }>
                    <div className="w-full min-h-screen flex flex-col justify-between gap-4 p-2 shadow-md">
                        <div className="flex flex-col justify-between gap-4">
                            <div className="flex items-center justify-between border-b border-indigo-500 pb-2">
                                <BsX onClick={menuHandler} className="text-3xl text-gray-500" />
                                <SocialMedia />
                            </div>
                            <NavbarMobile setShowMenu={setShowMenu} />
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header