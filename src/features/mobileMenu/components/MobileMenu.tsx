"use client";

import { MobileMenuContext, TMobileMenu } from "@/src/providers";
import { useContext } from "react";


export default function MobileMenu() {
    const context = useContext<TMobileMenu | null>(MobileMenuContext);

    if (context === null) return null;

    const {isMenuOpen, toggleMenuState} = context;

    const click = () => {
        toggleMenuState(isMenuOpen);
    };

    return (
        <button
            type="button"
            title="Toggle mobile menu"
            className="w-[25px] h-[25px] flex flex-col justify-center items-end ml-auto md:hidden"
            onClick={click}
        >
            <span className={`w-full h-[2px] inline-block bg-[#FAFAFA] transition-all ${isMenuOpen ? "translate-y-1 rotate-45" : ""}`}></span>
            <span className={`w-4/5 h-[2px] inline-block bg-[#FAFAFA] mt-1 transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-full h-[2px] inline-block bg-[#FAFAFA] mt-1 transition-all ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}></span>
        </button>
    )
}