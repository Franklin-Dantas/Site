import { CategoryProvider } from '@/contexts/CategoryContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Qualifications from '@/components/Qualifications';
import Recommendations from '@/components/Recommendations';
import Footer from '@/components/Footer';
import GalaxyBackground from '@/components/GalaxyBackground';

const Index = () => {
  return (
    <LanguageProvider>
      <CategoryProvider>
        <div className="min-h-screen relative">
          <GalaxyBackground />
          <div className="relative z-10">
            <Header />
            <main>
              <Hero />
              <About />
              <Projects />
              <Qualifications />
              <Recommendations />
            </main>
            <Footer />
          </div>
        </div>
      </CategoryProvider>
    </LanguageProvider>
  );
};

export default Index;
