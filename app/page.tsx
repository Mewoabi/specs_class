import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CourseOutline from './components/CourseOutline';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Closing from './components/Closing';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <CourseOutline />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Closing />
        <Footer />
      </main>
    </>
  );
}
