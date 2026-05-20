import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';
import Education from './components/education';
import Footer from './components/footer';
import { useState, useEffect } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for initial build visual effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#080c14] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto relative flex items-center justify-center">
              {/* Outer spin rings */}
              <div className="absolute inset-0 rounded-full border-[2px] border-[rgba(0,200,255,0.15)] shadow-[0_0_20px_rgba(0,200,255,0.1)]"></div>
              <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#00c8ff] border-r-[#00c8ff] animate-spin"></div>
              <div className="absolute inset-3 bg-[#0d1527] rounded-full flex items-center justify-center border border-[rgba(0,200,255,0.2)] shadow-[0_0_15px_rgba(0,200,255,0.15)]">
                <span className="text-3xl font-extrabold text-[#ffffff] font-mono-code tracking-widest pulse-glow">SS</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-xs font-bold text-[#00c8ff] font-mono-code uppercase tracking-[0.25em]">Cloud Init...</p>
            <div className="w-44 h-[3px] bg-[#0d1527] overflow-hidden mx-auto rounded-full border border-[rgba(255,255,255,0.05)]">
              <div className="h-full bg-gradient-to-r from-[#00c8ff] to-[#38bdf8] w-[45%] shimmer-loading rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#080c14] text-white selection:bg-[#00c8ff]/30 selection:text-[#00c8ff] relative">
      {/* Dynamic Navigation */}
      <Navbar />

      {/* Sections in correct ordered layout */}
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      
      {/* Footer contains the Connect Section + Footer Bottom */}
      <Footer />
    </div>
  );
}
