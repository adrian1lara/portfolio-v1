import Link from "next/link";

export default function Header() {
    return (
        <header className="flex  w-full fixed max-w-[800px] justify-center p-3 border-2">
            <nav>
                <ul className="flex space-x-2">
                    <li>
                        <Link href={"/"} className="hover:border-b-2 ease-in duration-200 border-[#183D3D]">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/work"} className="hover:border-b-2 ease-in duration-200 border-[#183D3D]" >
                            Work
                        </Link>
                        
                    </li>
                    <li>
                        <Link href={"/posts"} className="hover:border-b-2 ease-in duration-200 border-[#183D3D]">
                            Posts
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}