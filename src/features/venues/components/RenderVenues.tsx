"use client";

import { API_URL, API_METHODS } from "@/src/config";
import { useEffect, useState } from "react";
import { TVenue } from "../types";
import Venue from "./Venue";

const getVenues = (setter: any, loadingSetter: any) => {
    fetch(API_URL + API_METHODS.venue.getVenues).then(response => response.json())
        .then(data => {
            setter(data)
            loadingSetter(false)
        });
};

export default function RenderVenues() {
    const [loading, setLoading] = useState<boolean>(true);
    const [venues, setVenues] = useState<TVenue[]>([]);

    useEffect(() => {
        getVenues(setVenues, setLoading);
    }, []);

    useEffect(() => {
        console.log(venues);
    }, [venues]);

    return (
        <section className="w-full grid md:grid-cols-2 gap-x-5 gap-y-5">
            {loading ? (
                <div className="text-white">Loading...</div>
            ) : (
                venues?.map((venue: TVenue, index) => (
                    <Venue key={index} venue={venue} />
                ))
            )}

        </section>
    )
}