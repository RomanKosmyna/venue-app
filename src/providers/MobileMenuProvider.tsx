"use client";

import { createContext, useEffect, useState } from "react";

type Props = {
    children: React.ReactNode;
};

export type TMobileMenu = {
    isMenuOpen: boolean;
    toggleMenuState: React.Dispatch<React.SetStateAction<boolean>>;
    closeMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileMenuContext = createContext<TMobileMenu | null>(null);

export default function MobileMenuProvider({ children }: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenuState = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "visible";
            }
        }
    }, [isMenuOpen]);

    return (
        <MobileMenuContext.Provider value={{ isMenuOpen, toggleMenuState, closeMenu }}>
            {children}
        </MobileMenuContext.Provider>
    )
}