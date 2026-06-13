import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Projects from './components/Projects';
import Collectives from './components/Collectives';
import LegalFrameworks from './components/LegalFrameworks';
import StarterPacks from './components/StarterPacks';
import Directories from './components/Directories';
import Reading from './components/Reading';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white font-['Inter',sans-serif] scroll-smooth">
      <Navbar />
      <Hero />
      <Vision />
      <Projects />
      <Collectives />
      <LegalFrameworks />
      <StarterPacks />
      <Directories />
      <Reading />
      <Footer />
    </div>
  );
}
