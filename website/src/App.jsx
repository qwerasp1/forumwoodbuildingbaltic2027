import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Speakers from './components/Speakers';
import Exhibition from './components/Exhibition';
import Registration from './components/Registration';
import Destination from './components/Destination';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <a href="#home" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Program />
        <Speakers />
        <Exhibition />
        <Registration />
        <Destination />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
