'use client'
import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname()

    const isActive = (href) => pathname === href

    return (
        <header className="flex  w-full fixed max-w-[800px] justify-between  p-3 backdrop-blur-md">
            <Logo />
            <nav>
                <ul className="flex space-x-5">
                    <li className={`${isActive("/") ? "bg-green-300 bg-opacity-25" : ""} p-2 rounded `}>
                        <Link href={"/"} className={`hover:border-b-2 ease-in duration-200 border-green-300 `}>
                            Home
                        </Link>
                    </li>
                    <li className={`${isActive("/work") ? "bg-green-300 bg-opacity-25" : ""} p-2 rounded `}>
                        <Link href={"/work"} className={`hover:border-b-2 ease-in duration-200 border-green-300 `} >
                            Projects
                        </Link>
                        
                    </li>
                    <li className={`${isActive("/posts") ? "bg-green-300 bg-opacity-25" : ""} p-2 rounded`}>
                        <Link href={"/posts"} className={`hover:border-b-2 ease-in duration-200 border-green-300 `}>
                            Posts
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}