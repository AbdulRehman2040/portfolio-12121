import CallToAction from "@/sections/CallToAction"
import Features from "@/sections/Features"
import Footer from "@/sections/Footer"
import Hero from "@/sections/Hero"
import Integrations from "@/sections/Integrations"
import Introduction from "@/sections/Introduction"
import LogoTicker from "@/sections/LogoTicker"
import Navbar from "@/sections/Navbar"
import Recentproject from "@/sections/Recentproject"

export default function Home() {
    return  <>
    <Navbar />
    <Hero />
    <LogoTicker/>
    <Introduction/>
    <Features/>
    <Integrations />
    <Recentproject/>
    <CallToAction />
    <Footer/>

    </>
}
