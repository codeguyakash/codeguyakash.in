import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import About from '../../components/About';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className="w-2/3 mx-auto" id="home">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
