import Link from "next/link"

const NavbarMobile = ({ setShowMenu }) => {
    return (
        <nav>
            <ul className="flex flex-col items-start gap-8">
                <li>
                    <Link
                        href="/#about"
                        onClick={() => setShowMenu(false)}
                        className="flex items-center justify-center text-zinc-600"
                    >
                        درباره من
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#skills"
                        onClick={() => setShowMenu(false)}
                        className="flex items-center justify-center text-zinc-600"
                    >
                        مهارت های من
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#portfolio"
                        onClick={() => setShowMenu(false)}
                        className="flex items-center justify-center text-zinc-600"
                    >
                        نمونه کار ها
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#Ejucation"
                        onClick={() => setShowMenu(false)}
                        className="flex items-center justify-center text-zinc-600"
                    >
                        سوابق آموزشی
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#contact"
                        onClick={() => setShowMenu(false)}
                        className="flex items-center justify-center text-zinc-600"
                    >
                        اطلاعات تماس
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarMobile