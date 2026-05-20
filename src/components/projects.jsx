import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.15);
  const [cardsRef, isCardsVisible] = useScrollAnimation(0.2);

  const projectsList = [
    {
      title: "Cloud-Based Log Monitoring System using AWS & Python",
      status: "In Development",
      objective: "Build a cloud-based log monitoring and automation system to collect, analyze, and manage server logs using AWS services and Python scripting.",
      description: "Designed and implemented a monitoring solution by deploying Linux-based EC2 instances within a secure AWS environment. Configured IAM roles and policies to enable secure access between AWS services. Developed Python automation scripts using Boto3 to continuously read application and system log files, detect warning/error patterns, and upload logs to Amazon S3 for centralized storage and backup. Automated periodic log monitoring tasks using Cron scheduling and planned CloudWatch integration for real-time monitoring and alerting. Implemented secure cloud infrastructure concepts including VPC networking and controlled access management.",
      tags: ["AWS (IAM, EC2, S3, VPC, CloudWatch)", "Python", "Boto3", "Linux", "Shell Scripting", "Cron Scheduling", "Log Monitoring", "Cloud Automation"],
      githubLink: "https://github.com/sharishariha1708-max"
    },
    {
      title: "Automated AWS Resource Provisioning System",
      status: "Completed",
      objective: "Build an infrastructure automation system to automatically create and manage AWS resources using Python and AWS SDK.",
      description: "Developed Python scripts using Boto3 to automate provisioning of core AWS services such as EC2 instances, S3 buckets, IAM users, and security groups. Implemented reusable automation modules to reduce manual cloud configuration tasks and improve deployment efficiency. Added robust logging and validation mechanisms to track infrastructure creation events and ensure secure, policy-compliant access management.",
      tags: ["AWS (EC2, IAM, S3, VPC)", "Python", "Boto3", "Linux", "Cloud Automation"],
      githubLink: "https://github.com/sharishariha1708-max"
    }
  ];

  return (
    <section id="projects" className="py-28 px-6 bg-[#080c14] relative border-t border-[rgba(0,200,255,0.08)] bg-grid-lines">
      {/* Background radial highlight */}
      <div className="absolute inset-0 radial-glow z-0 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`fade-in-up text-center mb-20 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h2 className="text-sm font-bold font-mono-code text-[#00c8ff] uppercase tracking-[0.25em] mb-3">
            03. Feature Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            What I Have Built
          </h3>
          <div className="w-16 h-[2px] bg-[#00c8ff] mt-4 mx-auto shadow-[0_0_8px_#00c8ff]"></div>
        </div>

        {/* Project Cards Grid */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 ${isCardsVisible ? 'visible' : ''}`}
        >
          {projectsList.map((project, index) => (
            <div
              key={index}
              className={`glass-panel rounded-lg flex flex-col p-8 stagger-${index + 1} ${
                isCardsVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Header Info */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <h4 className="text-xl md:text-2xl font-black text-white hover:text-[#00c8ff] transition-colors leading-snug">
                  {project.title}
                </h4>
                
                {/* Custom glowing status pill */}
                <span className={`flex items-center gap-1.5 px-3 py-1 bg-[rgba(255,255,255,0.03)] border rounded-full text-[10px] font-bold font-mono-code uppercase tracking-wider ${
                  project.status === "Completed" 
                    ? "border-[#22c55e]/30 text-[#22c55e]" 
                    : "border-[#f59e0b]/30 text-[#f59e0b]"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    project.status === "Completed" ? "bg-[#22c55e] animate-pulse" : "bg-[#f59e0b] animate-ping"
                  }`}></span>
                  {project.status}
                </span>
              </div>

              {/* Monospace Objective Badge */}
              <div className="mb-6 p-4 rounded bg-[#080c14]/65 border-l-2 border-[#00c8ff] text-xs font-mono-code text-[#94a3b8] leading-relaxed">
                <strong className="text-white block mb-1">OBJECTIVE:</strong>
                {project.objective}
              </div>

              {/* Project Description */}
              <p className="text-[#94a3b8] leading-relaxed text-sm md:text-base mb-8">
                {project.description}
              </p>

              {/* Technologies Monospace Badges */}
              <div className="mt-auto">
                <h5 className="text-xs font-bold font-mono-code text-[#00c8ff] uppercase tracking-widest mb-3">
                  // Technologies Used:
                </h5>
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="tech-badge px-3 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Actions */}
                <div className="pt-6 border-t border-[rgba(255,255,255,0.05)] flex items-center justify-between">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-outline px-5 py-2.5 rounded text-xs font-bold font-mono-code tracking-[0.1em] flex items-center gap-2"
                  >
                    <i className="fab fa-github text-sm"></i>
                    VIEW CODEBASE
                  </a>
                  
                  <span className="text-[10px] text-[#546e7a] font-mono-code font-bold tracking-wider uppercase">
                    AWS-SDK-INTEGRATION
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
