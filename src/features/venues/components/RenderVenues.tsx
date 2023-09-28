"use client";

import { useEffect, useState } from "react";
import { TVenue } from "../types";
import VenueCard from "./VenueCard";
import { getVenues } from "../api";

export default function RenderVenues() {
    const [loading, setLoading] = useState<boolean>(true);
    const [venues, setVenues] = useState<TVenue[]>([]);

    useEffect(() => {
        getVenues(setVenues, setLoading);
    }, []);

    return (
        <section className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
            {loading ? (
                <div className="text-white">Loading...</div>
            ) : (
                venues?.map((venue: TVenue, index) => (
                    <VenueCard key={index} venue={venue} />
                ))
            )}

        </section>
    )
}