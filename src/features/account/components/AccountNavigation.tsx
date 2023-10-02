import Link from "next/link";

export default function AccountNavigation() {
    return (
        <nav className="w-full">
            <ul className="w-full">
                <li className="w-full h-[64px] border-b border-hsla-grey-1">
                    <Link
                        href={"/account/general"}
                        className="w-full h-full flex items-center text-white"
                    >
                        General
                    </Link>
                </li>
                <li className="w-full h-[64px] border-b border-hsla-grey-1">
                    <Link
                        href={"/account/venues"}
                        className="w-full h-full flex items-center text-white"
                    >
                        Venues
                    </Link>
                </li>
            </ul>
        </nav>
    )
}