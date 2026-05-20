import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Skills() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.15);
  const [cardsRef, isCardsVisible] = useScrollAnimation(0.2);

  const skillCategories = [
    {
      title: "Cloud Platforms",
      desc: "Architecting, managing, and securing compute and storage services.",
      items: ["AWS EC2", "Amazon S3", "AWS IAM", "AWS VPC", "AWS CloudWatch"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
        </svg>
      )
    },
    {
      title: "Programming",
      desc: "Developing utility scripts and software triggers using modern tools.",
      items: ["Python", "Boto3 (AWS SDK)", "Shell Scripting (Bash)"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    },
    {
      title: "Database Systems",
      desc: "Structuring structured datasets and optimizing relational tables.",
      items: ["MySQL", "Relational Database Structure", "SQL Query Writing"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      )
    },
    {
      title: "Tools & OS",
      desc: "System management, custom automation, and environment setup.",
      items: ["Linux Administration", "Cron Scheduling", "Log Monitoring", "Cloud Automation"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0Z" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="py-28 px-6 bg-[#080c14] relative border-t border-[rgba(0,200,255,0.08)]">
      {/* Glow highlight */}
      <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-[#00c8ff] rounded-full blur-[170px] opacity-[0.04] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`fade-in-up text-center mb-20 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h2 className="text-sm font-bold font-mono-code text-[#00c8ff] uppercase tracking-[0.25em] mb-3">
            04. Core Competencies
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Technical Skills
          </h3>
          <div className="w-16 h-[2px] bg-[#00c8ff] mt-4 mx-auto shadow-[0_0_8px_#00c8ff]"></div>
        </div>

        {/* Skills Cards Grid */}
        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isCardsVisible ? 'visible' : ''}`}
        >
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`glass-panel rounded-lg p-8 flex flex-col hover:border-[#00c8ff]/40 stagger-${(index % 4) + 1} ${
                isCardsVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-5 border-b border-[rgba(255,255,255,0.06)] pb-5">
                <div className="p-3 bg-[rgba(0,200,255,0.06)] border border-[rgba(0,200,255,0.2)] rounded text-[#00c8ff] flex items-center justify-center">
                  {category.icon}
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white font-mono-code tracking-wide">
                    {category.title}
                  </h4>
                  <p className="text-xs text-[#546e7a] mt-1 font-mono-code">// {category.desc}</p>
                </div>
              </div>
              
              {/* Skill Items Monospace pills */}
              <div className="flex flex-wrap gap-3 mt-2">
                {category.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="tech-badge px-4 py-2 rounded text-sm font-medium cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
