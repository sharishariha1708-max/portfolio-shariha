import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Certifications() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [cardsRef, isCardsVisible] = useScrollAnimation(0.1);

  const certifications = [
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      year: "2023",
      icon: "🏆",
      description: "Validated proficiency in SQL queries, joins, filtering, and data retrieval.",
      badge: "Verified"
    }
  ];

  return (
    <div id="certifications" className="py-24 px-4 bg-deep-teal-gradient relative overflow-hidden">
      <div className="container">
        <div 
          ref={headerRef}
          className={`fade-in-up text-center mb-16 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl font-bold text-[#FFFFFF] inline-block relative">
            Certifications & Achievements
            <span className="absolute bottom-[-10px] left-1/4 w-1/2 h-[3px] bg-[#00BCD4]"></span>
          </h1>
        </div>

        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ${isCardsVisible ? 'visible' : ''}`}
        >
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`glass-panel p-8 rounded-xl hover-lift scale-in stagger-${(index % 4) + 1} ${isCardsVisible ? 'visible' : ''} relative`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {cert.badge && (
                <div className="absolute top-4 right-4 bg-[#00BCD4] text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(0,188,212,0.4)] tracking-wide">
                  {cert.badge}
                </div>
              )}
              
              <div className="flex flex-col gap-4">
                <div className="text-4xl mb-2">
                  {cert.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#FFFFFF] mb-2">{cert.title}</h2>
                  <p className="text-[#80DEEA] font-medium text-lg">{cert.issuer}</p>
                  <p className="text-[#9E9E9E] text-sm mt-1 mb-4">{cert.year}</p>
                  <p className="text-[#F5F5F5] leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fade-in-up visible">
          <a 
            href="https://drive.google.com/drive/folders/[YOUR_FOLDER_LINK]" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-primary rounded-lg font-bold tracking-wide ripple-effect"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
            </svg>
            📂 View All Certifications
          </a>
        </div>
      </div>
    </div>
  );
}
