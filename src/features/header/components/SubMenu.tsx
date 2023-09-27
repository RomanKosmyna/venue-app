"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubMenu() {
    const pathname = usePathname();

    if (pathname !== "/") return null;

    return (
        <div className="w-full h-11 bg-[#0a0a0a]">
            <nav className="w-full max-w-[90rem] mx-auto h-full px-5 flex items-center">
                <ul className="flex relative -left-4 text-[#888888]">
                    <li className="relative px-4 py-2">
                        <Link href={"/overview"}>Overview</Link>
                    </li>
                    <li className="px-4 py-2">
                        <Link href={"/news"}>News</Link>
                    </li>
                    <li className="px-4 py-2">
                        <Link href={"/search"}>Search</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}