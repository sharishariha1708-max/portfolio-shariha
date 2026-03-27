import about from "../assets/img/banner/about-us.png"
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
    const [imageRef, isImageVisible] = useScrollAnimation(0.2);
    const [textRef, isTextVisible] = useScrollAnimation(0.3);

    return (
        <>
            <div id='about' className="about-section__container mt-20 flex justify-between gap-10">
                <div>

                    <div 
                        ref={imageRef}
                        className={`header-section__img fade-in-left ${isImageVisible ? 'visible' : ''}`}
                    >
                        <img 
                            className="hidden md:flex float-left w-[130] md:w-100 float-animation hover-scale"  
                            src={about} 
                            alt="Home right" 
                        />
                    </div>

                    <div 
                        ref={textRef}
                        className={`about-section__desc flex flex-col justify-center fade-in-right ${isTextVisible ? 'visible' : ''}`}
                    >
                        <h1 className="text-4xl font-extrabold text-[#0F172A] mb-8">ABOUT ME</h1>
                        
                        <div className="bg-white p-8 rounded-xl shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] border border-[#E5E7EB]">
                            <p className="text-lg text-[#475569] leading-relaxed mb-6">
                                I’m a motivated Data Engineering and Cloud enthusiast, currently pursuing an AWS Internship to gain hands-on experience building scalable data solutions. My passion lies in working with data, structuring databases, and learning how to architect efficient pipelines in the cloud.
                            </p>
                            
                            <p className="text-lg text-[#475569] leading-relaxed mb-6">
                                I possess foundational and growing expertise in <strong className="text-[#0F172A] font-semibold">Python, SQL, and core AWS services (S3, EC2, IAM)</strong>. I enjoy exploring data-driven projects that require cleaning, automated extraction, basic ETL processing, and structured storage. I’m comfortable working with <strong className="text-[#0F172A] font-semibold">MySQL</strong> and focus on writing optimized queries ensuring data integrity.
                            </p>
                            
                            <p className="text-lg text-[#475569] leading-relaxed">
                                I am highly passionate about continuous learning and eager to actively contribute to cloud and data projects. My goal is to orchestrate reliable data flows and continuously mature as a professional Data Engineer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}