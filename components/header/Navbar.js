import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <ul className="flex items-center gap-4">
                <li>
                    <Link
                        href="/#about"
                        className="flex items-center justify-center outline outline-1 p-2 w-28 rounded-xl text-zinc-500 hover:bg-violet-200/50 transition duration-300"
                    >
                        درباره من
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#portfolio"
                        className="flex items-center justify-center outline outline-1 p-2 w-28 rounded-xl text-zinc-500 hover:bg-indigo-200/50 transition duration-300"
                    >
                        نمونه کار ها
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#Ejucation"
                        className="flex items-center justify-center outline outline-1 p-2 w-28 rounded-xl text-zinc-500 hover:bg-violet-200/50 transition duration-300"
                    >
                        سوابق آموزشی
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar