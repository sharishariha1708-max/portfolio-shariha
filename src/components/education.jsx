import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Education() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.15);
  const [contentRef, isContentVisible] = useScrollAnimation(0.2);

  const educationList = [
    {
      degree: "Bachelor of Business Administration (Aviation & Ground Handling)",
      institution: "Bishop Heber College",
      year: "2021 – 2024",
      icon: "🎓",
      detail: "Focused on management concepts, systems organization, and operational coordination foundations."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Syed Ammal Matric Hr Sec School",
      year: "2020 – 2021",
      icon: "🏫",
      detail: "Focused on science and analytical curricula, strengthening logical reasoning frameworks."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "A.V.M.S Matric Hr Sec School",
      year: "2017 – 2018",
      icon: "📚",
      detail: "General core academic foundation establishing problem-solving skills."
    }
  ];

  return (
    <section id="education" className="py-28 px-6 bg-[#080c14] relative border-t border-[rgba(0,200,255,0.08)] bg-grid-lines">
      {/* Radial highlight */}
      <div className="absolute inset-0 radial-glow z-0 pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`fade-in-up text-center mb-20 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h2 className="text-sm font-bold font-mono-code text-[#00c8ff] uppercase tracking-[0.25em] mb-3">
            05. Academic Journey
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Education
          </h3>
          <div className="w-16 h-[2px] bg-[#00c8ff] mt-4 mx-auto shadow-[0_0_8px_#00c8ff]"></div>
        </div>

        {/* Education Timeline/List Container */}
        <div 
          ref={contentRef}
          className={`max-w-4xl mx-auto flex flex-col gap-6 ${isContentVisible ? 'visible' : ''}`}
        >
          {educationList.map((edu, index) => (
            <div 
              key={index}
              className={`glass-panel rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#00c8ff]/40 fade-in-up stagger-${(index % 3) + 1} ${
                isContentVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Left detail cluster */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-[rgba(0,200,255,0.05)] rounded flex items-center justify-center text-2xl flex-shrink-0 border border-[rgba(0,200,255,0.2)] text-[#00c8ff]">
                  {edu.icon}
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white tracking-wide leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-bold text-[#00c8ff] font-mono-code mt-1.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[#94a3b8] mt-2 max-w-xl leading-relaxed">
                    {edu.detail}
                  </p>
                </div>
              </div>
              
              {/* Right Year Badge */}
              <div className="md:text-right mt-2 md:mt-0 flex-shrink-0 self-start md:self-center">
                <span className="inline-block bg-[rgba(0,200,255,0.06)] border border-[rgba(0,200,255,0.25)] text-[#00c8ff] px-4 py-1.5 rounded font-mono-code font-bold text-xs uppercase tracking-wider shadow-[0_0_10px_rgba(0,200,255,0.05)]">
                  {edu.year}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
