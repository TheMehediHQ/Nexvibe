import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhyWeStarted from "@/components/home/WhyWeStarted";
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
      <FAQ />
     
    </>
  );
}