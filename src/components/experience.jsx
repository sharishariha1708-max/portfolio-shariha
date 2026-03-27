import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Experience() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [contentRef, isContentVisible] = useScrollAnimation(0.3);

  return (
    <div id="experience" className="experience-section__container mt-20 px-4">
      <div 
        ref={headerRef}
        className={`fade-in-up md:ml-10 ${isHeaderVisible ? 'visible' : ''}`}
      >
        <h1 className="text-4xl font-extrabold text-[#0F172A] mb-8">EXPERIENCE</h1>
      </div>

      <div 
        ref={contentRef}
        className={`max-w-6xl mx-auto bg-white rounded-xl p-8 shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] border border-[#E5E7EB] transition-all hover:shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)] duration-300 fade-in-up ${isContentVisible ? 'visible' : ''}`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-[#F3F4F6] pb-4">
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A]">AWS Cloud Internship</h2>
            <h3 className="text-lg font-medium text-[#3B82F6] mt-1 space-x-2">
              <span>TN Skills Program</span>
            </h3>
          </div>
          <div className="mt-3 md:mt-0 bg-[#F3F4F6] px-4 py-1.5 rounded-full border border-[#E5E7EB]">
            <span className="text-[#475569] font-medium text-sm tracking-wide uppercase">Present</span>
          </div>
        </div>
        
        <div className="text-[#475569] leading-relaxed">
          <p className="mb-4">
            Participating in an intensive cloud training program focused on real-world infrastructure scaling and architecting. 
            Emphasizing practical exposure to AWS services to build fault-tolerant, highly available systems.
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li>Gaining hands-on expertise in provisioning and managing core AWS services including EC2, S3, and IAM.</li>
            <li>Studying cloud security fundamentals and infrastructure as code principles.</li>
            <li>Applying theoretical cloud computation logic to simulated real-world data pipelines and storage solutions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
