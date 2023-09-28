import { Metadata } from "next";
import RenderVenueById from "@/src/features/venues/components/RenderVenueById";

export const metadata: Metadata = {
    title: 'Venue details',
    description: 'Venue information',
}

export default function VenuePage() {
    return (
        <main className="w-full max-w-[90rem] mx-auto flex flex-1 flex-col px-5 pt-6">
            <RenderVenueById/>
        </main>
    )
}