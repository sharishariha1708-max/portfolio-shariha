import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const closeMenu = () => setIsOpen(false);

  // Handle scroll event to apply glass style to navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <>
      <header className={`w-full fixed top-0 z-[200] transition-all duration-300 ${
        scrolled 
          ? 'bg-[#080c14]/80 backdrop-blur-md border-b border-[rgba(0,200,255,0.12)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            {/* SEO-friendly layout: Brand is a styled span, not H1 (leaving H1 for the Hero section) */}
            <a href="#home" className="text-xl font-black text-white tracking-[0.2em] hover:text-[#00c8ff] transition-colors cursor-pointer font-mono-code flex items-center gap-2">
              <span className="text-[#00c8ff]">&lt;</span>
              <span>SHARIHA</span>
              <span className="text-[#00c8ff]/70">/&gt;</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Hamburger for mobile & tablet */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden p-2 text-white hover:text-[#00c8ff] focus:outline-none transition-all duration-300 z-[210]"
            >
              <div className="relative w-6 h-6 flex flex-col justify-between">
                <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-[11px]' : ''
                }`}></span>
                <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-[11px]' : ''
                }`}></span>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-8 text-xs font-bold tracking-[0.15em] font-mono-code">
                {navLinks.map((link) => (
                  <li key={link.name} className="relative group">
                    <a href={link.href} className="text-[#94a3b8] hover:text-[#00c8ff] transition-colors duration-300">
                      {link.name}
                    </a>
                    <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#00c8ff] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00c8ff]"></span>
                  </li>
                ))}
              </ul>
              
              {/* Sleek CTA on Navbar */}
              <a 
                href="#contact" 
                className="hidden xl:inline-block border border-[rgba(0,200,255,0.4)] hover:border-[#00c8ff] text-[#00c8ff] hover:bg-[#00c8ff]/10 px-4 py-1.5 rounded text-xs font-bold tracking-[0.15em] font-mono-code transition-all duration-300"
              >
                CONNECT
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-[#080c14]/90 backdrop-blur-sm z-[198] lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Sidebar */}
      <aside
        id="mobile-sidebar"
        className={`fixed top-0 right-0 h-full w-72 bg-[#0d1527] shadow-2xl z-[199] transform transition-transform duration-300 ease-out lg:hidden border-l border-[rgba(0,200,255,0.15)] flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-[rgba(0,200,255,0.1)]">
          <span className="text-sm font-bold tracking-[0.2em] text-[#00c8ff] font-mono-code">&lt;NAVIGATION/&gt;</span>
          <button
            type="button"
            onClick={closeMenu}
            className="p-2 text-[#94a3b8] hover:text-[#00c8ff] transition-colors"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-8 flex-grow">
          <ul className="flex flex-col gap-6 font-mono-code tracking-[0.15em] text-sm font-bold">
            {navLinks.map((link, index) => (
              <li key={link.name} className={`transform transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: `${index * 40}ms` }}>
                <a 
                  href={link.href} 
                  onClick={closeMenu} 
                  className="block py-2 text-[#94a3b8] hover:text-[#00c8ff] border-b border-transparent hover:border-[#00c8ff]/20 transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-8 border-t border-[rgba(0,200,255,0.1)] text-center">
          <p className="text-xs text-[#546e7a] font-mono-code mb-4">Shariha Sri S · 2026</p>
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="block btn-primary text-center py-2.5 rounded text-xs font-bold font-mono-code tracking-[0.15em] text-black"
          >
            GET IN TOUCH
          </a>
        </div>
      </aside>
    </>
  );
}
