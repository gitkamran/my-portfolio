import { useRouter } from "next/navigation"

const NavbarMobile = ({ setShowMenu }) => {
    const router = useRouter()
    return (
        <nav>
            <ul className="flex flex-col items-start gap-8">
                <li
                    onClick={() => { router.push("/#about"), setShowMenu(false) }}
                    className="flex items-center justify-center text-zinc-600"
                >
                    درباره من
                </li>
                <li
                    onClick={() => { router.push("/#skills"), setShowMenu(false) }}
                    className="flex items-center justify-center text-zinc-600"
                >
                    مهارت های من
                </li>
                <li
                    onClick={() => { router.push("/#portfolio"), setShowMenu(false) }}
                    className="flex items-center justify-center text-zinc-600"
                >
                    نمونه کار ها
                </li>
                <li
                    onClick={() => { router.push("/#ejucation"), setShowMenu(false) }}
                    className="flex items-center justify-center text-zinc-600"
                >
                    سوابق آموزشی
                </li>
                <li
                    onClick={() => { router.push("/#contact"), setShowMenu(false) }}
                    className="flex items-center justify-center text-zinc-600"
                >
                    اطلاعات تماس
                </li>
            </ul>
        </nav>
    )
}

export default NavbarMobile