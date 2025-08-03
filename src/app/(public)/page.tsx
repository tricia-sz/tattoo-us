import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from './_components/hero'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

        <Hero />

      <Footer />
     
    </div>
  )
}