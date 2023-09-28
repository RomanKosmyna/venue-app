"use client";

import { useContext } from "react";
import { MobileMenuContext, TMobileMenu } from "@/src/providers";

export default function RenderMobileMenu() {
    const context = useContext<TMobileMenu | null>(MobileMenuContext);

    if (context === null) return null;

    const { isMenuOpen } = context;
    return (
        <>
            {isMenuOpen && (
                <div className="w-full min-h-[calc(100vh-3rem)] bg-background fixed left-0 bottom-0 z-10">

                </div>
            )}
        </>
    )
}