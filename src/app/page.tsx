import Benefits from "@/components/Benefits";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceCards from "@/components/ServiceCards";
import MeetShane from "@/components/MeetShane";
import Timeline from "@/components/Timeline";
import BookTour from "@/components/BookTour";
import Pricing from "@/components/Pricing";
import Slider from "@/components/Slider";
import Gallery from "@/components/Gallery";
import Image from "next/image";

export default function Home() {
  const images = [
    { src: "/ragallodairy1.JPG", alt: "Ragallo Dairy 1" },
    { src: "/ragallodairy2.JPG", alt: "Ragallo Dairy 2" },
    { src: "/ragallodairy3.JPG", alt: "Ragallo Dairy 3" },
    { src: "/ragallodairy4.JPG", alt: "Ragallo Dairy 4" },
    { src: "/ragallodairy5.JPG", alt: "Ragallo Dairy 5" },
    { src: "/ragallodairy6.JPG", alt: "Ragallo Dairy 6" },
  ];

  return (
    <div>
      <Header />
      <Benefits />
      <ServiceCards />
      <Slider />
      <MeetShane />
      <BookTour buttonText="Book Now" />
      <Pricing />
      <Timeline />
      <Gallery images={images} />
      <FAQAccordion />
      <Footer />

    </div>

  );
}
