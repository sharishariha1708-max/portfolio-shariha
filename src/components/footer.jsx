import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Footer() {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.15);

  const contactInfo = {
    email: "sharishariha1708@gmail.com",
    phone: "8667316857",
    linkedin: "https://www.linkedin.com/in/shariha-sri-s-shariha-sri-s-969abb280/",
    github: "https://github.com/sharishariha1708-max"
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" }
  ];

  return (
    <footer id="contact" className="bg-[#080c14] relative border-t border-[rgba(0,200,255,0.08)] pt-24 pb-12 overflow-hidden">
      {/* Background neon orb glow */}
      <div className="absolute bottom-[20%] right-[-10%] w-80 h-80 bg-[#00c8ff] rounded-full blur-[170px] opacity-[0.04] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10" ref={sectionRef}>
        
        {/* Let's Connect Contact Card */}
        <div className={`fade-in-up text-center mb-16 ${isSectionVisible ? 'visible' : ''}`}>
          <h2 className="text-sm font-bold font-mono-code text-[#00c8ff] uppercase tracking-[0.25em] mb-3">
            06. What's Next?
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Let's Connect
          </h3>
          <div className="w-16 h-[2px] bg-[#00c8ff] mt-4 mx-auto shadow-[0_0_8px_#00c8ff] mb-6"></div>
          
          <p className="text-[#94a3b8] text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Open to Cloud Engineering roles and collaboration opportunities. Whether you want to discuss server automation, networking architectures, or just say hello, my inbox is always open!
          </p>

          {/* Contact Methods Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20 text-left">
            
            {/* Email Card */}
            <a 
              href={`mailto:${contactInfo.email}`}
              className="glass-panel p-6 rounded-lg border border-[rgba(0,200,255,0.12)] hover:border-[#00c8ff]/40 flex flex-col justify-between group transition-all"
            >
              <div className="text-2xl text-[#00c8ff] mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <span className="block text-[10px] font-bold font-mono-code text-[#546e7a] uppercase tracking-widest mb-1">// Email Me</span>
                <span className="block text-sm font-bold text-white group-hover:text-[#00c8ff] transition-colors truncate">
                  {contactInfo.email}
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a 
              href={`tel:${contactInfo.phone}`}
              className="glass-panel p-6 rounded-lg border border-[rgba(0,200,255,0.12)] hover:border-[#00c8ff]/40 flex flex-col justify-between group transition-all"
            >
              <div className="text-2xl text-[#00c8ff] mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <span className="block text-[10px] font-bold font-mono-code text-[#546e7a] uppercase tracking-widest mb-1">// Call Me</span>
                <span className="block text-sm font-bold text-white group-hover:text-[#00c8ff] transition-colors">
                  {contactInfo.phone}
                </span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a 
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-lg border border-[rgba(0,200,255,0.12)] hover:border-[#00c8ff]/40 flex flex-col justify-between group transition-all"
            >
              <div className="text-2xl text-[#00c8ff] mb-4 group-hover:scale-110 transition-transform">
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div>
                <span className="block text-[10px] font-bold font-mono-code text-[#546e7a] uppercase tracking-widest mb-1">// LinkedIn Connect</span>
                <span className="block text-sm font-bold text-white group-hover:text-[#00c8ff] transition-colors">
                  Shariha Sri S
                </span>
              </div>
            </a>

            {/* GitHub Card */}
            <a 
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-lg border border-[rgba(0,200,255,0.12)] hover:border-[#00c8ff]/40 flex flex-col justify-between group transition-all"
            >
              <div className="text-2xl text-[#00c8ff] mb-4 group-hover:scale-110 transition-transform">
                <i className="fab fa-github"></i>
              </div>
              <div>
                <span className="block text-[10px] font-bold font-mono-code text-[#546e7a] uppercase tracking-widest mb-1">// Github Repos</span>
                <span className="block text-sm font-bold text-white group-hover:text-[#00c8ff] transition-colors">
                  sharishariha1708-max
                </span>
              </div>
            </a>

          </div>
        </div>

        {/* Footer bottom links and credits */}
        <div className={`border-t border-[rgba(255,255,255,0.06)] pt-12 flex flex-col md:flex-row justify-between items-center gap-6 fade-in-up stagger-1 ${
          isSectionVisible ? 'visible' : ''
        }`}>
          {/* Identity */}
          <div className="text-center md:text-left">
            <span className="text-lg font-black tracking-widest font-mono-code text-white">
              SHARIHA SRI S
            </span>
            <p className="text-xs text-[#546e7a] mt-1 font-mono-code">
              AWS Cloud Engineer | Python | Automation
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs font-bold tracking-[0.1em] font-mono-code">
            {quickLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[#94a3b8] hover:text-[#00c8ff] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Closing Signature */}
        <div className={`mt-12 border-t border-[rgba(255,255,255,0.03)] pt-6 text-center fade-in-up stagger-2 ${
          isSectionVisible ? 'visible' : ''
        }`}>
          <p className="text-xs text-[#546e7a] font-mono-code">
            Designed & Built by Shariha Sri S · 2026
          </p>
        </div>

      </div>
    </footer>
  );
}
