import Link from "next/link"
import Navbar from "./Navbar"
import SocialMedia from "./SocialMedia"

const Header = () => {
    return (
        <header className="p-2 fixed top-0 z-50 w-full">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/#about" className="text-zinc-500 text-xl">Mohammad Kamran</Link>
                    <Navbar />
                </div>
                <SocialMedia />
            </div>
        </header>
    )
}

export default Header