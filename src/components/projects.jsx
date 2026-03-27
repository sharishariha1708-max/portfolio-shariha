import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [cardsRef, isCardsVisible] = useScrollAnimation(0.1);

  const projects = [
    {
      title: "ATM - Python System",
      description: "Atm system with PIN verification, supporting withdrawal, deposit, balance inquiry. Includes robust error handling and transaction checks.",
      link: "https://github.com/VasanthBalasubramaniyan/ATM-Python",
      tags: ["Python", "Scripting"]
    },
    {
      title: "AWS ETL Pipeline Orchestration",
      description: "Automated data pipeline using AWS Glue and S3 to extract, transform, and load datasets, optimizing standard queries for analytics.",
      link: "#",
      tags: ["AWS Glue", "S3", "Data Processing"]
    },
    {
      title: "Data Warehouse Analytics",
      description: "A centralized data warehouse solution to aggregate business metrics, providing a single source of truth for downstream reporting dashboards.",
      link: "#",
      tags: ["MySQL", "ETL", "Analytics"]
    }
  ];

  const FolderIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#3B82F6]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
    </svg>
  );

  return (
    <div id="projects" className="projects-section__conatiner mt-20 px-4">
      <div 
        ref={headerRef}
        className={`fade-in-up md:ml-10 ${isHeaderVisible ? 'visible' : ''}`}
      >
        <h1 className="text-4xl font-extrabold text-[#0F172A] mb-8">PROJECTS</h1>
      </div>

      <div 
        ref={cardsRef}
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isCardsVisible ? 'visible' : ''}`}
      >
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className={`bg-white rounded-xl shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] border border-[#E5E7EB] hover:-translate-y-2 hover:shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)] transition-all duration-300 transform flex flex-col p-6 scale-in stagger-${(index % 6) + 1} ${
              isCardsVisible ? 'visible' : ''
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-[#F8FAFC] rounded-lg">
                {FolderIcon}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 text-[#64748B] hover:text-[#3B82F6] transition-colors rounded-full hover:bg-[#F3F4F6]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
            
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">
              {project.title}
            </h2>
            
            <p className="text-sm text-[#475569] leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-[#F3F4F6] text-[#475569] text-xs font-semibold rounded-full font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
