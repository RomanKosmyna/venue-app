import Link from "next/link";
import BackToAccountSettings from "@/src/features/account/components/BackToAccountSettings";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Venue App | Your Venues',
    description: 'Control your venues',
  }

export default function AccountVenuesPage() {
    const baseAccountUrl = "/account/venues";

    return (
        <main className="w-full max-w-[90rem] mx-auto px-5 flex flex-1 flex-col">
            <BackToAccountSettings />
            <nav className="w-full flex-1 pt-7">
                <ul className="w-full text-hsla-white-1">
                    <li className="w-full h-[50px] border-b border-hsla-grey-1">
                        <Link
                            href={`${baseAccountUrl}/create`}
                            className="w-full h-full flex items-center">Add Venue</Link>
                    </li>
                    <li className="w-full h-[50px] border-b border-hsla-grey-1">
                        <Link
                            href={`${baseAccountUrl}/update`}
                            className="w-full h-full flex items-center">Update Venues</Link>
                    </li>
                    <li className="w-full h-[50px] border-b border-hsla-grey-1">
                        <Link
                            href={`${baseAccountUrl}/delete`}
                            className="w-full h-full flex items-center">Delete Venues</Link>
                    </li>
                </ul>
            </nav>
        </main>
    )
}