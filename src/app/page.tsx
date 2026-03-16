import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingActions from "@/components/FloatingActions"

import Hero from "@/sections/Hero"
import Products from "@/sections/Products"
import EventShowcase from "@/sections/EventShowcase"
import About from "@/sections/About"
import Testimonials from "@/sections/Testimonials"
import Certifications from "@/sections/Certifications"
import Contact from "@/sections/Contact"

export default function Page() {
  return (
    <>
      <Header />

      <main
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-section.png')" }}
      >
        <Hero />
        <Products />
        <About />
        <EventShowcase />
        <Testimonials />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </>
  )
}