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
                        <h1 className="about-section__head text-6xl font-bold md:text-5xl gradient-text">ABOUT ME</h1>
                        <p className="about-section__desc mt-6 text-2xl text-justify md:text-xl leading-relaxed">
                            I’m a motivated and detail-oriented Data Engineering & Analytics enthusiast, currently pursuing an AWS Internship, where I’m gaining hands-on experience with cloud technologies and building scalable data solutions. I am actively learning and working with Big Data technologies, strengthening my understanding of distributed data processing and cloud-based data architectures.
                            <br/><br/>
                            I have strong skills in <span className="font-bold text-[#1F3A8A]">Python, SQL, PySpark, and AWS (S3, Glue)</span>, and I enjoy building data-driven projects involving data cleaning, automation, ETL pipelines, and dashboard creation. I’m comfortable working with databases such as <span className="font-bold text-[#1F3A8A]">MySQL</span>, and I focus on writing efficient, optimized queries.
                            <br/><br/>
                            Alongside my data expertise, I also work with ReactJS and GitHub, and I’ve deployed full-stack applications on platforms like Render. I enjoy building responsive, user-friendly interfaces and writing clean, maintainable code.I’m passionate about continuous learning and eager to contribute to real-world cloud and data projects while continuously growing as a Data Engineer and Big Data professional.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}