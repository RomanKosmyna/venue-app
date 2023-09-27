import Image from 'next/image';
import { TVenue } from "../types";
import photo from "@/src/public/images/photo.jpg";

type Props = {
    venue: TVenue;
};

export default function Venue({ venue }: Props) {
    return (
        <div className="border border-hsla-grey-1 rounded-md p-2">
            <h2 className="text-[2rem] text-white font-medium">{venue.name}</h2>
            <div className='relative'>
                <Image src={photo} alt='some text' fill />
            </div>
            <p>{venue.address}</p>
            <p>{venue.schedule}</p>
            <p>{venue.contacts}</p>
        </div>
    )
}