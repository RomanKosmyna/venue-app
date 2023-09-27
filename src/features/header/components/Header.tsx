"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    if (pathname === "/signup" || pathname === "/signin") return null;

    return (
        <header className="w-full h-12">
            <nav className="w-full max-w-[90rem] mx-auto h-full px-5 flex items-center">
                <ul className="flex ml-auto bg-[#0a0a0a] text-grey-1 font-medium">
                    <li>
                        <Link href={"/"} className={`hover:underline ${pathname === "/" ? "text-white" : ""}`}>Home</Link>
                    </li>
                    <li className="mx-2">
                        <Link href={"/"} className={`hover:underline ${pathname === "/top" ? "text-white" : ""}`}>Top Venues</Link>
                    </li>
                    <li className="mx-2">
                        <Link href={"/"} className="hover:underline">News</Link>
                    </li>
                    <li className="mx-2">
                        <Link href={"/"} className="hover:underline">Puyachok</Link>
                    </li>
                    <li>
                        <Link href={"/"} className="hover:underline">Personal Account</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}