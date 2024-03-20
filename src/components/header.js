import Link from "next/link";

export default function Header() {
    return (
        <header className="md:mt-10 w-full fixed max-w-[800px] border-2 ">
            <nav>
                <ul className="flex space-x-2">
                    <li>
                        <Link href={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/work"}>
                            projects
                        </Link>
                        
                    </li>
                    <li>
                        <Link href={"/posts"}>
                            Posts
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}