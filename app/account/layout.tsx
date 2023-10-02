import React from "react";
import AccountHeader from "@/src/features/account/components/AccountHeader";
import BorderSpan from "@/src/components/Elements/BorderSpan";

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <React.Fragment>
            <AccountHeader/>
            <BorderSpan/>
            {children}
        </React.Fragment>
    )
}