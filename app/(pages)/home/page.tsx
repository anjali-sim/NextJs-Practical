import HeroSection from "@/app/components/front-ui/Hero/Hero";
import Navbar from "@/app/components/front-ui/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "@/app/components/front-ui/Products/Products";
import Footer from "@/app/components/front-ui/Footer/Footer";

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Products />
            <Footer />
        </div>
    )
}