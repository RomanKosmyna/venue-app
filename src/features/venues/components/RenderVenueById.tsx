"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getVenueById } from "../api";
import { useParams } from "next/navigation";
import { TVenue } from "../types";
import photo from "@/src/public/images/photo.jpg";
import location from "@/src/public/svg/location.svg";

export default function RenderVenueById() {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [venue, setVenue] = useState<TVenue | null>(null);

    useEffect(() => {
        const idAsString = Array.isArray(id) ? id[0] : id;
        getVenueById(idAsString, setVenue, setLoading);
    }, []);

    return (
        <>
            {loading ? (
                <div className="text-white">Loading...</div>
            ) : (
                venue !== null && (
                    <div className="w-full flex-1">
                        <div className='w-full max-w-[600px] h-[200px] relative'>
                            <Image src={photo} alt='some text' fill priority={true} />
                        </div>
                        <h2 className="font-medium text-clamp-heading-2 text-[#FAFAFA]">{venue.name}</h2>
                        <div className="flex gap-2">
                            <Image
                                src={location}
                                width={20}
                                height={20}
                                alt="Location Pointer"
                                priority={false}
                            />
                            <p className="text-grey-1">{venue.address}</p>
                        </div>
                        <span className="w-full block h-[1px] bg-hsla-grey-1 mt-3"></span>
                        <div className="mt-3">
                            <h3 className="font-medium text-clamp-heading-3 text-[#FAFAFA]">About the Venue</h3>
                            <p className="text-grey-1">Description</p>
                        </div>
                    </div>
                )
            )}
        </>
    )
}