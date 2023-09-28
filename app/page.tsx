import RenderVenues from "@/src/features/venues/components/RenderVenues";

export default function HomePage() {
  return (
    <main className="w-full max-w-[90rem] mx-auto px-5 pt-6 flex flex-1 flex-col">
      <RenderVenues/>
    </main>
  )
}
