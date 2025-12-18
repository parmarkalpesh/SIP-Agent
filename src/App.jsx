import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import WhySip from "./sections/WhySip";
import HowItWorks from "./sections/HowItWorks";
import Benefits from "./sections/Benefits";
import SipCalculator from "./sections/SipCalculator";
import Testimonials from "./sections/Testimonials";
import Faq from "./sections/Faq";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Ourservices from "./sections/Ourservices"

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-50 font-sans text-slate-900 selection:bg-green-100 selection:text-green-900">
      <Navbar />
      <main>
        <Hero />
        <WhySip />
        <HowItWorks />
        <Ourservices/>
        <Benefits />
        <SipCalculator />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
