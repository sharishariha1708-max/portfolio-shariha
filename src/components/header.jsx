import Me from '../assets/img/Me.JPG';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Header() {
  const [textRef, isTextVisible] = useScrollAnimation(0.2);
  const [imageRef, isImageVisible] = useScrollAnimation(0.3);

  const handleDownload = () => {
    const now = new Date();
    const timestamp = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;
    const link = document.createElement('a');
    link.href = '/resume/Vasanth - Resume.pdf';
    link.download = `Vasanth_Resume_${timestamp}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div id="home" className="header-section__container mt-10 flex justify-between gap-10">
        <div 
          ref={textRef}
          className={`header-section__desc flex flex-col justify-center gap-4 leading-[26px] fade-in-left ${isTextVisible ? 'visible' : ''}`}
        >
          <p className="text-2xl font-semibold text-[#475569] mb-2">HELLO!</p>
          <div className="text-5xl md:text-6xl font-extrabold flex">
            <h1 className="text-[#0F172A]">
              I'M VASANTH B
            </h1>
          </div>
          <h2 className="text-3xl font-bold text-[#3B82F6] mt-2">Aspiring Data Engineer | Cloud Enthusiast</h2>
          <p className="text-lg text-[#64748B] mt-4 max-w-2xl leading-relaxed">
            Skilled in Python, MySQL, and AWS. Currently pursuing an AWS Cloud Internship to apply academic knowledge and build scalable cloud architectures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={handleDownload}
              className="px-8 py-3 bg-[#0F172A] text-white font-medium rounded-md hover:bg-[#1E293B] transition-colors duration-200"
            >
              Resume / CV
            </button>
            <button
              onClick={() => (window.location.href = 'tel:+918248577533')}
              className="px-8 py-3 bg-white text-[#0F172A] border border-[#CBD5E1] font-medium rounded-md hover:bg-[#F8FAFC] transition-colors duration-200"
            >
              CONTACT
            </button>
          </div>
        </div>
        <div 
          ref={imageRef}
          className={`header-section__img fade-in-right ${isImageVisible ? 'visible' : ''}`}
        >
          <img 
            className="w-130 rounded-full shadow-2xl sm:w-100 float-animation hover-scale" 
            src={Me} 
            alt="Profile" 
          />
        </div>
      </div>
    </>
  );
}
