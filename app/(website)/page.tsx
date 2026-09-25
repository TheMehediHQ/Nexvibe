import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhyWeStarted from "@/components/home/WhyWeStarted";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import LogoCloud from "@/components/home/Logo";


export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Services />
      <WhyChooseUs />
      <WhyWeStarted />
      <Pricing />
      <FAQ />
    </>
  );
}


//<div data-aos="fade-up"
//      data-aos-duration="3000">
// </div>
