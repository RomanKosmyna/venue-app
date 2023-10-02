import AccountGeneral from "@/src/features/account/components/AccountGeneral";
import BackToAccountSettings from "@/src/features/account/components/BackToAccountSettings";

export default function AccountGeneralPage() {
  return (
    <main className="w-full max-w-[90rem] mx-auto px-5 flex flex-1 flex-col">
      <BackToAccountSettings/>
      <AccountGeneral/>
    </main>
  )
}