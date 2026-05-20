import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Experience() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.15);
  const [contentRef, isContentVisible] = useScrollAnimation(0.2);

  const experiences = [
    {
      title: "AWS Cloud App Developer Intern (TN Skills)",
      company: "Scope Tech Software Solutions",
      location: "Tamil Nadu, India",
      duration: "January 2026 – Present",
      bullets: [
        "Configured and managed core AWS services (EC2, S3, IAM, VPC) for cloud-based environments, improving deployment efficiency by ~30%.",
        "Implemented secure access control protocols using IAM roles, policies, and groups to establish absolute least-privilege standards.",
        "Designed and configured custom VPC networking architecture, including isolated subnets, routing tables, and gateways.",
        "Deployed and rigorously tested cloud resources, reducing overall manual configuration effort by ~25% using cloud automation paradigms."
      ],
      tags: ["AWS EC2", "S3", "IAM", "VPC Subnets", "Resource Provisioning", "Access Security"]
    },
    {
      title: "Process Trainee (Credit Management)",
      company: "Capgemini Technology Services Ltd.",
      location: "Trichy, Tamil Nadu, India",
      duration: "April 2025 – October 2025",
      bullets: [
        "Completed structured corporate training in Credit Management operations.",
        "Improved call handling efficiency through structured communication and process adherence.",
        "Maintained over 95% data accuracy while updating customer records.",
        "Developed strong communication, attention to detail, and customer interaction skills."
      ],
      tags: ["Credit Management", "Customer Relations", "Data Accuracy", "Process Adherence", "Corporate Operations"]
    }
  ];

  return (
    <section id="experience" className="py-28 px-6 bg-[#080c14] relative border-t border-[rgba(0,200,255,0.08)]">
      {/* Background glow orbs */}
      <div className="absolute bottom-[10%] left-[-5%] w-72 h-72 bg-[#00c8ff] rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`fade-in-up text-center mb-16 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h2 className="text-sm font-bold font-mono-code text-[#00c8ff] uppercase tracking-[0.25em] mb-3">
            02. Work History
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Professional Experience
          </h3>
          <div className="w-16 h-[2px] bg-[#00c8ff] mt-4 mx-auto shadow-[0_0_8px_#00c8ff]"></div>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div 
          ref={contentRef}
          className={`relative pl-8 md:pl-12 timeline-line max-w-3xl mx-auto space-y-12 fade-in-up ${
            isContentVisible ? 'visible' : ''
          }`}
        >
          {experiences.map((exp, idx) => (
            /* Experience Item */
            <article 
              key={idx}
              className="relative bg-[#0d1527]/55 rounded-lg p-8 border border-[rgba(0,200,255,0.12)] shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-[#00c8ff]/40 transition-all duration-300 group"
            >
              {/* Glowing neon dot on Timeline */}
              <div className="absolute left-[-41px] md:left-[-57px] top-10 w-4 h-4 bg-[#080c14] border-2 border-[#00c8ff] rounded-full shadow-[0_0_10px_rgba(0,200,255,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
              
              {/* Header info */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 border-b border-[rgba(255,255,255,0.06)] pb-5">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-[#00c8ff] transition-colors">
                    {exp.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-[#94a3b8]">
                    <span className="font-bold text-[#00c8ff] font-mono-code">{exp.company}</span>
                    <span className="text-gray-600">|</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="self-start px-4 py-1.5 rounded bg-[rgba(0,200,255,0.06)] border border-[rgba(0,200,255,0.2)] whitespace-nowrap">
                  <span className="text-[#00c8ff] font-bold text-xs font-mono-code uppercase tracking-wider">
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="text-[#94a3b8] text-base leading-relaxed">
                <ul className="space-y-4">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-3">
                      <span className="text-[#00c8ff] font-bold mt-1 select-none font-mono-code text-sm">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tag badges */}
              <div className="mt-8 pt-5 border-t border-[rgba(255,255,255,0.05)] flex flex-wrap gap-2.5">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tech-badge px-3 py-1 rounded text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
