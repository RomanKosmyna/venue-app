import { Metadata } from "next";
import BackToAccountVenuesSettings from "@/src/features/account/components/BackToAccountVenuesSettings";
import CreateVenueForm from "@/src/features/account/components/CreateVenueForm";

export const metadata: Metadata = {
    title: 'Venue App | Create',
    description: 'Create venue',
}

export default function AccountVenuesCreatePage() {
    return (
      <main className="w-full max-w-[90rem] mx-auto px-5 flex flex-1 flex-col">
        <BackToAccountVenuesSettings/>
        <CreateVenueForm/>
      </main>
    )
  }