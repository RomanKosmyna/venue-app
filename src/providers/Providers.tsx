"use client";

import MobileMenuProvider from "./MobileMenuProvider";

type Props = {
    children: React.ReactNode;
};

export default function Providers({ children }: Props) {

    return (
        <MobileMenuProvider>
            {children}
        </MobileMenuProvider>
    )
}