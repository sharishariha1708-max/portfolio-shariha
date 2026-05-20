import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.15);

  const stats = [
    {
      value: "~30%",
      label: "Deployment Efficiency Improved",
      desc: "Optimized through configuration management and service alignment."
    },
    {
      value: "~25%",
      label: "Manual Effort Reduced",
      desc: "Automated manual setups using Boto3 Python infrastructure scripts."
    },
    {
      value: "2",
      label: "Cloud Projects Built",
      desc: "End-to-end automation and monitoring platforms deployed on AWS."
    },
    {
      value: "5+",
      label: "AWS Services Mastered",
      desc: "Deep knowledge in core systems: EC2, S3, IAM, VPC, and CloudWatch."
    }
  ];

  const corePillars = [
    {
      title: "Cloud Infrastructure Setup",
      desc: "Configuring secure, isolated VPC virtual networking architectures, subnets, and internet gateways.",
      icon: "🌐"
    },
    {
      title: "Resource Management",
      desc: "Provisioning and lifecycle management of cloud resources including EC2 instances and S3 storage classes.",
      icon: "💾"
    },
    {
      title: "Access Control & Security",
      desc: "Enforcing AWS IAM least-privilege standards using custom role policies, groups, and permission boundaries.",
      icon: "🔐"
    },
    {
      title: "Log Analysis & Automation",
      desc: "Writing custom Python (Boto3) scripts to monitor systems and trigger automated backups and alerts.",
      icon: "🤖"
    }
  ];

  return (
    <section id="about" className="py-28 px-6 bg-[#080c14] relative border-t border-[rgba(0,200,255,0.08)]">
      {/* Glow highlight */}
      <div className="absolute top-[40%] right-[-10%] w-72 h-72 bg-[#00c8ff] rounded-full blur-[160px] opacity-[0.04] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10" ref={sectionRef}>
        
        {/* Title */}
        <div className={`fade-in-up mb-16 text-center lg:text-left ${isSectionVisible ? 'visible' : ''}`}>
          <h2 className="text-sm font-bold font-mono-code text-[#00c8ff] uppercase tracking-[0.25em] mb-3">
            01. Professional Profile
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            About Me
          </h3>
          <div className="w-16 h-[2px] bg-[#00c8ff] mt-4 mx-auto lg:mx-0 shadow-[0_0_8px_#00c8ff]"></div>
        </div>

        {/* Content columns */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 fade-in-up stagger-1 ${
          isSectionVisible ? 'visible' : ''
        }`}>
          {/* Summary Text */}
          <div className="lg:col-span-7 space-y-6 text-[#94a3b8] text-base md:text-lg leading-relaxed">
            <p>
              I am an <strong className="text-white font-semibold">AWS Cloud Engineer</strong> with hands-on experience in Python, SQL, and AWS infrastructure services. I specialize in setting up secure cloud environments, organizing resource management, and implementing automation scripts to optimize deployment architectures.
            </p>
            <p>
              Through my cloud engineering role, I work closely with core AWS services such as <span className="text-[#00c8ff] font-mono-code text-sm">EC2</span>, <span className="text-[#00c8ff] font-mono-code text-sm">S3</span>, <span className="text-[#00c8ff] font-mono-code text-sm">IAM</span>, and <span className="text-[#00c8ff] font-mono-code text-sm">VPC</span>. I am highly familiar with distributed systems concepts and actively developing advanced cloud architecture strategies for resilient and secure software setups.
            </p>
            <p>
              Gaining practical exposure through an AWS Cloud Internship, my focus remains on building secure, scalable, and cost-efficient cloud solutions. I am deeply passionate about deploying reliable cloud environments and engineering robust backend structures.
            </p>

            <div className="inline-flex items-center gap-3 bg-[#0d1527] border border-[rgba(0,200,255,0.15)] text-[#94a3b8] px-5 py-3 rounded text-sm font-mono-code self-start">
              <span className="text-[#00c8ff] animate-pulse">📍</span>
              <span>Based in Tamil Nadu, India | Available for Relocation & Remote</span>
            </div>
          </div>

          {/* Highlights Checklist */}
          <div className="lg:col-span-5">
            <div className="bg-[#0d1527]/55 border border-[rgba(0,200,255,0.1)] p-8 rounded-lg shadow-lg relative overflow-hidden">
              <h4 className="text-lg font-bold mb-6 text-white tracking-wide border-b border-[rgba(255,255,255,0.06)] pb-4 font-mono-code">
                &lt;Core Focus Area&gt;
              </h4>
              <ul className="space-y-6">
                {corePillars.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="text-xl bg-[#080c14] w-10 h-10 rounded flex items-center justify-center border border-[rgba(0,200,255,0.12)] text-[#00c8ff]">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-sm text-white font-mono-code tracking-wide">{item.title}</h5>
                      <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stat counters grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-up stagger-2 ${
          isSectionVisible ? 'visible' : ''
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 rounded-lg border border-[rgba(0,200,255,0.12)] text-center relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <span className="block text-4xl md:text-5xl font-extrabold text-[#00c8ff] font-mono-code mb-2 tracking-tight drop-shadow-[0_0_8px_rgba(0,200,255,0.2)]">
                  {stat.value}
                </span>
                <span className="block text-xs font-bold text-white tracking-[0.1em] font-mono-code uppercase mb-3">
                  {stat.label}
                </span>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed border-t border-[rgba(255,255,255,0.05)] pt-3 mt-auto">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}