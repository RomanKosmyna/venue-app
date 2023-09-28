import React from "react";

export default function VenueLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}