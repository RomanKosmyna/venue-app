import Image from 'next/image';
import Link from 'next/link';
import { TVenue } from "../types";
import photo from "@/src/public/images/photo.jpg";

type Props = {
    venue: TVenue;
};

export default function VenueCard({ venue }: Props) {
    return (
        <Link href={`/venue/${String(venue.id)}`}>
            <div className="bg-background border border-hsla-grey-1 rounded-md p-2 cursor-pointer hover:bg-hover-card-background transition-all">
                <div className='w-full h-[200px] relative'>
                    <Image src={photo} alt='some text' fill priority />
                </div>
                <h2 className="text-[2rem] text-[#FAFAFA] font-medium">{venue.name}</h2>
                <div className='flex gap-x-2 mt-2'>
                    <p className='text-grey-1'>{venue.address}</p>
                    <p className='text-grey-1'>{venue.schedule}</p>
                </div>
            </div>
        </Link>
    )
}