import Link from "next/link"

const Navbar = ({ setColor }) => {
    return (
        <nav>
            <ul className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-4">
                <li>
                    <Link
                        href="/#about"
                        className="flex items-center justify-center text-zinc-600"
                    >
                        درباره من
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#skills"
                        className="flex items-center justify-center text-zinc-600"
                    >
                        مهارت های من
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#portfolio"
                        className="flex items-center justify-center text-zinc-600"
                    >
                        نمونه کار ها
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#Ejucation"
                        className="flex items-center justify-center text-zinc-600"
                    >
                        سوابق آموزشی
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#contact"
                        className="flex items-center justify-center text-zinc-600"
                    >
                        اطلاعات تماس
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar