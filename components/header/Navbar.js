"use client"
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()
    console.log(pathname)
    useEffect(() => {
        console.log("1")
    }, [pathname]);

    return (
        <nav>
            <ul className="flex flex-row items-center gap-4">
                <li
                    onClick={() => router.push("/#about")}
                    className="cursor-pointer relative flex items-center justify-center text-zinc-600 before:ease-in before:duration-300 before:h-0.5 before:w-full before:absolute before:bottom-0 before:right-[-100%] hover:before:right-0 before:bg-indigo-400 overflow-hidden"
                >
                    درباره من
                </li>
                <li
                    onClick={() => router.push("/#skills")}
                    className="cursor-pointer relative flex items-center justify-center text-zinc-600 before:ease-in before:duration-300 before:h-0.5 before:w-full before:absolute before:bottom-0 before:right-[-100%] hover:before:right-0 before:bg-indigo-400 overflow-hidden"
                >
                    مهارت های من
                </li>
                <li
                    onClick={() => router.push("/#portfolio")}
                    className="cursor-pointer relative flex items-center justify-center text-zinc-600 before:ease-in before:duration-300 before:h-0.5 before:w-full before:absolute before:bottom-0 before:right-[-100%] hover:before:right-0 before:bg-indigo-400 overflow-hidden"
                >
                    نمونه کار ها
                </li>
                <li
                    onClick={() => router.push("/#ejucation")}
                    className="cursor-pointer relative flex items-center justify-center text-zinc-600 before:ease-in before:duration-300 before:h-0.5 before:w-full before:absolute before:bottom-0 before:right-[-100%] hover:before:right-0 before:bg-indigo-400 overflow-hidden"
                >
                    سوابق آموزشی
                </li>
                <li
                    onClick={() => router.push("/#contact")}
                    className="cursor-pointer relative flex items-center justify-center text-zinc-600 before:ease-in before:duration-300 before:h-0.5 before:w-full before:absolute before:bottom-0 before:right-[-100%] hover:before:right-0 before:bg-indigo-400 overflow-hidden"
                >
                    اطلاعات تماس
                </li>
            </ul>
        </nav>
    )
}

export default Navbar