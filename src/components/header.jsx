import { useEffect, useState } from 'react';
import ParticleBackground from './ParticleBackground';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#080c14] bg-grid-lines"
    >
      {/* Background elements */}
      <div className="absolute inset-0 radial-glow z-0"></div>
      
      {/* Dynamic Network Nodes Background */}
      <ParticleBackground />

      {/* Decorative Blur Orbs */}
      <div className="particles-layer">
        <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-[#00c8ff] rounded-full blur-[140px] opacity-[0.06]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-[#38bdf8] rounded-full blur-[150px] opacity-[0.07]"></div>
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 w-full px-6">
        
        {/* Left Column: Headline & Bio */}
        <div className={`w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,200,255,0.06)] border border-[rgba(0,200,255,0.2)] mb-6 hover:border-[#00c8ff]/40 transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#00c8ff] animate-ping"></span>
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#00c8ff] font-mono-code uppercase">
              AWS CLOUD ENGINEER
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            Building Secure, Scalable <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c8ff] to-[#38bdf8] drop-shadow-[0_0_15px_rgba(0,200,255,0.15)]">
              Cloud Solutions
            </span>
          </h1>

          <p className="text-xs sm:text-sm font-bold font-mono-code text-[#00c8ff] mb-6 tracking-wider uppercase">
            Python &nbsp;|&nbsp; EC2 &nbsp;|&nbsp; S3 &nbsp;|&nbsp; IAM &nbsp;|&nbsp; VPC &nbsp;|&nbsp; Automation
          </p>

          <p className="text-base sm:text-lg text-[#94a3b8] mb-8 max-w-xl leading-relaxed">
            Hi, I'm <strong className="text-white font-semibold">Shariha Sri S</strong>. I specialize in cloud infrastructure engineering, automation scripting, and secure resource deployment on AWS, focused on designing robust environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
            <a 
              href="#projects" 
              className="btn-primary px-8 py-3.5 rounded text-xs font-bold tracking-[0.15em] font-mono-code transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              VIEW PROJECTS
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-y-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </a>
            <a 
              href="#contact" 
              className="btn-outline px-8 py-3.5 rounded text-xs font-bold tracking-[0.15em] font-mono-code transition-all duration-300 flex items-center justify-center gap-2"
            >
              CONTACT ME
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 items-center">
            <a 
              href="https://www.linkedin.com/in/shariha-sri-s-shariha-sri-s-969abb280/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#94a3b8] hover:text-[#00c8ff] transition-all transform hover:scale-110"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a 
              href="https://github.com/sharishariha1708-max" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#94a3b8] hover:text-[#00c8ff] transition-all transform hover:scale-110"
              title="GitHub"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a 
              href="mailto:sharishariha1708@gmail.com" 
              className="text-[#94a3b8] hover:text-[#00c8ff] transition-all transform hover:scale-110"
              title="Email"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Right Column: Premium Mock AWS Cloud Terminal Visualizer */}
        <div className={`w-full lg:w-[45%] flex justify-center transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="w-full max-w-[460px] rounded-lg border border-[rgba(0,200,255,0.15)] bg-[#0d1527]/75 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden font-mono-code text-[12px]">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#080c14]/90 border-b border-[rgba(0,200,255,0.1)]">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444] opacity-80"></span>
                <span className="w-3 h-3 rounded-full bg-[#f59e0b] opacity-80"></span>
                <span className="w-3 h-3 rounded-full bg-[#22c55e] opacity-80"></span>
              </div>
              <span className="text-[#546e7a] text-[10px] tracking-wider uppercase font-bold">
                aws-resource-builder.py
              </span>
              <span className="w-4"></span>
            </div>

            {/* Terminal Code Body */}
            <div className="p-5 text-[#94a3b8] space-y-2 bg-[#0d1527]/40 leading-relaxed overflow-x-auto">
              <p className="text-gray-500"># Automated AWS Resource Provisioning</p>
              <p><span className="text-[#f43f5e]">import</span> boto3</p>
              <p><span className="text-[#f43f5e]">from</span> botocore.exceptions <span className="text-[#f43f5e]">import</span> ClientError</p>
              <br />
              <p><span className="text-[#38bdf8]">def</span> <span className="text-[#34d399]">create_secure_s3_bucket</span>(bucket_name, region):</p>
              <p className="pl-4">s3_client = boto3.client(<span className="text-[#e2e8f0]">'s3'</span>, region_name=region)</p>
              <p className="pl-4"><span className="text-[#f43f5e]">try</span>:</p>
              <p className="pl-8 text-gray-500"># Provisioning centralized bucket</p>
              <p className="pl-8">s3_client.create_bucket(</p>
              <p className="pl-12">Bucket=bucket_name,</p>
              <p className="pl-12">CreateBucketConfiguration={"{"}</p>
              <p className="pl-16"><span className="text-[#e2e8f0]">'LocationConstraint'</span>: region</p>
              <p className="pl-12">{"}"}</p>
              <p className="pl-8">)</p>
              <p className="pl-8 text-[#00c8ff]">print(<span className="text-[#e2e8f0]">f"S3 Bucket &#123;bucket_name&#125; created!"</span>)</p>
              <p className="pl-4"><span className="text-[#f43f5e]">except</span> ClientError <span className="text-[#f43f5e]">as</span> e:</p>
              <p className="pl-8 text-rose-400">log_error(e)</p>
              <br />
              <div className="pt-2 border-t border-[rgba(0,200,255,0.08)] text-[11px] space-y-1">
                <p className="text-[#00c8ff] font-bold">&gt; python aws-resource-builder.py</p>
                <p className="text-gray-400">[INFO] Initializing AWS Session... Success.</p>
                <p className="text-gray-400">[INFO] Checking VPC networking configurations...</p>
                <p className="text-[#34d399]">[OK] VPC 'vpc-00c8ff' active (Subnets defined)</p>
                <p className="text-gray-400">[INFO] Deploying secure Amazon S3 Central Log Bucket...</p>
                <p className="text-[#00c8ff]">[SUCCESS] Bucket 'shariha-cloud-logs-2026' provisioned.</p>
                <p className="text-gray-400">[INFO] Applying IAM Access Policy (least privilege)... Done.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Animated Scroll Down Arrow */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 delay-700 z-10 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <a 
          href="#about" 
          aria-label="Scroll to About section" 
          className="text-[#00c8ff]/60 hover:text-[#00c8ff] transition-colors block animate-bounce"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
