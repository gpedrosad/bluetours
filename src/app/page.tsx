
//import Benefits from "@/components/Benefits";
//import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
//import ServiceCards from "@/components/ServiceCards";
import MeetShane from "@/components/MeetShane";
import Timeline from "@/components/Timeline";
import BookTour from "@/components/BookTour";
import Pricing from "@/components/Pricing";
import Slider from "@/components/Slider";
//import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import ReviewSlider from "@/components/ReviewSlider";
import ActivitiesGrid from "@/components/ActivitiesGrid";



export default function Home() {
  const images = [
    { src: "/ragallodairy1.JPG", alt: "Ragallo Dairy 1" },
    { src: "/ragallodairy2.JPG", alt: "Ragallo Dairy 2" },
    { src: "/ragallodairy3.JPG", alt: "Ragallo Dairy 3" },
    { src: "/ragallodairy4.JPG", alt: "Ragallo Dairy 4" },
    { src: "/ragallodairy5.JPG", alt: "Ragallo Dairy 5" },
    { src: "/ragallodairy6.JPG", alt: "Ragallo Dairy 6" },
    { src: "/lakebarrine1.JPG", alt: "Lake Barrine 1" },
    { src: "/lakebarrine2.JPG", alt: "Lake Barrine 2" },
    { src: "/lakebarrine3.JPG", alt: "Lake Barrine 3" },
    { src: "/forlanding1.JPG", alt: "Lake Barrine" },
    { src: "/forlanding2.JPG", alt: "Lake Barrine" },
    { src: "/forlanding3.JPG", alt: "Lake Barrine" },
    { src: "/wallaby1.JPG", alt: "wallaby" },
    { src: "/wallaby2.JPG", alt: "wallaby" },
    { src: "/wallaby3.JPG", alt: "wallaby" },
    { src: "/wallaby4.JPG", alt: "wallaby" },
    { src: "/wallaby5.JPG", alt: "wallaby" },
    { src: "/winetasting1.JPG", alt: "Wine Tasting"},
    { src: "/winetasting2.JPG", alt: "Wine Tasting"},
    { src: "/winetasting3.JPG", alt: "Wine Tasting"},








    
  ];

  return (
    <div>
      <Header />
      <Hero/>
      {/* <Benefits /> */}
      {/* <ServiceCards /> */}
      <Slider />
      <ActivitiesGrid />
      <MeetShane />
      <BookTour buttonText="予約する" />
      <Pricing />
      <ReviewSlider />
      <Timeline />
      {/* <Gallery images={images} /> */}
      {/* <FAQAccordion /> */}
      <Footer />

    </div>

  );
}
