import Benefits from "@/components/Benefits";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceCards from "@/components/ServiceCards";
import MeetShane from "@/components/MeetShane";
export default function Home() {
  return (
    <div>
      <Header />
      <Benefits />
      <ServiceCards />
      <FAQAccordion />
      <MeetShane />
      <Footer />
    </div>

  );
}
