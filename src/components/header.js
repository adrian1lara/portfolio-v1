import Link from "next/link";
import Logo from "./logo";

export default function Header() {
    return (
        <header className="flex  w-full fixed max-w-[800px] justify-between  p-3 backdrop-blur-md">
            <Logo />
            <nav>
                <ul className="flex space-x-5">
                    <li>
                        <Link href={"/"} className="hover:border-b-2 ease-in duration-200 border-green-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/work"} className="hover:border-b-2 ease-in duration-200 border-green-300" >
                            Work
                        </Link>
                        
                    </li>
                    <li>
                        <Link href={"/posts"} className="hover:border-b-2 ease-in duration-200 border-green-300">
                            Posts
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}