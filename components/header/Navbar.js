import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <ul className="flex flex-row items-center gap-4">
                <li>
                    <Link
                        href="/#about"
                        className="relative flex items-center justify-center text-zinc-600 before:ease-in before:duration-300 before:h-0.5 before:w-full before:absolute before:bottom-0 before:right-[-100%] hover:before:right-0 before:bg-indigo-400 overflow-hidden"
                    >
                        درباره من
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#skills"
                        className="relative flex items-center justify-center text-zinc-600 before:ease-in before:duration-300 before:h-0.5 before:w-full before:absolute before:bottom-0 before:right-[-100%] hover:before:right-0 before:bg-indigo-400 overflow-hidden"
                    >
                        مهارت های من
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#portfolio"
                        className="relative flex items-center justify-center text-zinc-600 before:ease-in before:duration-300 before:h-0.5 before:w-full before:absolute before:bottom-0 before:right-[-100%] hover:before:right-0 before:bg-indigo-400 overflow-hidden"
                    >
                        نمونه کار ها
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#Ejucation"
                        className="relative flex items-center justify-center text-zinc-600 before:ease-in before:duration-300 before:h-0.5 before:w-full before:absolute before:bottom-0 before:right-[-100%] hover:before:right-0 before:bg-indigo-400 overflow-hidden"
                    >
                        سوابق آموزشی
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#contact"
                        className="relative flex items-center justify-center text-zinc-600 before:ease-in before:duration-300 before:h-0.5 before:w-full before:absolute before:bottom-0 before:right-[-100%] hover:before:right-0 before:bg-indigo-400 overflow-hidden"
                    >
                        اطلاعات تماس
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar