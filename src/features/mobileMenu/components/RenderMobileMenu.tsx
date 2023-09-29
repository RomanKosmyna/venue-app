"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import { MobileMenuContext, TMobileMenu } from "@/src/providers";
import userImage from "@/src/public/images/user.jpg";

export default function RenderMobileMenu() {
    const context = useContext<TMobileMenu | null>(MobileMenuContext);
    const route = usePathname();
    
    if (context === null) return null;

    const { isMenuOpen, closeMenu } = context;

    useEffect(() => {
        if (route === "/signin" || route === "/signup") {
            closeMenu(false);
        }
    }, [route]);


    return (
        <>
            {isMenuOpen && (
                <nav className={`w-full min-h-[calc(100vh-3rem)] flex bg-background fixed bottom-0 z-10 ${isMenuOpen ? "left-0" : "-left-full"}`}>
                    <ul className="w-full flex-1 py-10 px-5">
                        <li className="w-full h-[70px] flex justify-between items-center border-b border-hsla-grey-1">
                            <p className="text-sm text-grey-1">Username email</p>
                            <span className="w-[30px] h-[30px] relative rounded-full">
                                <Image src={userImage} alt="User profile avatar" fill className="rounded-full" />
                            </span>
                        </li>
                        <li className="w-full h-[48px] border-b border-hsla-grey-1">
                            <Link href={"/account/venues"} className="w-full h-full flex items-center text-grey-1">Your Venues</Link>
                        </li>
                        <li className="w-full h-[48px] border-b border-hsla-grey-1">
                            <Link href={"/account"} className="w-full h-full flex items-center text-grey-1">Settings</Link>
                        </li>
                        <li className="w-full h-[48px] border-b border-hsla-grey-1">
                            <Link href={"/signin"} className="w-full h-full flex items-center text-grey-1">Log Out</Link>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    )
}