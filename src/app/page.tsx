import Benefits from "@/components/Benefits";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceCards from "@/components/ServiceCards";
import MeetShane from "@/components/MeetShane";
import Timeline from "@/components/Timeline";
import BookTour from "@/components/BookTour";
import Pricing from "@/components/Pricing";



export default function Home() {
  return (
    <div>
      <Header />
      <Benefits />
      <ServiceCards />
      <FAQAccordion />
      <MeetShane />
      <BookTour buttonText="Book Now" />
      <Pricing />
      <Timeline />
      <Footer />

    </div>

  );
}
