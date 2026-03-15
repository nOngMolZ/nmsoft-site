import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
  }, []);
  return (
    <section id="work" ref={sectionRef} className="app-showcase bg-black-50 py-24 border-t border-white/5 relative z-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 text-center mb-16">
          <h2 className="text-sm md:text-base font-bold tracking-widest uppercase text-blue-50">Selected Work</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
            Engineering <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient-accent)' }}>Excellence</span>
          </h3>
        </div>
        <div className="showcaselayout mt-10">
          {/* left */}
          <div className="first-project-wrapper group cursor-pointer" ref={project1Ref}>
            <div className="image-wrapper overflow-hidden rounded-2xl border border-white/10 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black-100/90 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img src="/images/project1.png" alt="Enterprise Software" className="group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="text-content mt-8 relative z-20">
              <h2 className="text-3xl font-bold text-white group-hover:text-blue-50 transition-colors duration-300">
                รับพัฒนาและให้คำปรึกษาระบบซอฟต์แวร์และเครือข่ายสำหรับองค์กร
              </h2>
              <p className="text-text-muted mt-4 text-lg leading-relaxed">
                เรารับออกแบบและพัฒนาระบบซอฟต์แวร์ พร้อมวางโครงสร้างระบบเครือข่ายครบวงจร รองรับทุกความต้องการขององค์กร ตั้งแต่ระบบภายในจนถึงการเชื่อมต่อข้อมูลระหว่างระบบ พร้อมบริการดูแลหลังการขายอย่างมืออาชีพ
              </p>
            </div>
          </div>
          {/* right */}
          <div className="project-list-wrapper overflow-hidden flex flex-col gap-10">
            <div className="project group cursor-pointer" ref={project2Ref}>
              <div className="image-wrapper bg-[#1a1a24] border border-white/5 overflow-hidden rounded-2xl flex items-center justify-center p-8 group-hover:border-purple-500/30 transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/images/project2.png" alt="Library Management" className="group-hover:scale-105 transition-transform duration-700 ease-out h-[80%] object-contain drop-shadow-2xl" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mt-6 group-hover:text-blue-50 transition-colors duration-300">
                ให้คำปรึกษาในการแก้ปัญหาและจัดการสร้างโปรแกรม
              </h2>
            </div>
            <div className="project group cursor-pointer" ref={project3Ref}>
              <div className="image-wrapper bg-[#1a1a24] border border-white/5 overflow-hidden rounded-2xl flex items-center justify-center p-8 group-hover:border-blue-500/30 transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/images/project3.png" alt="YC Directory" className="group-hover:scale-105 transition-transform duration-700 ease-out h-[80%] object-contain drop-shadow-2xl" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mt-6 group-hover:text-blue-50 transition-colors duration-300">
                ทำ MVP ให้ลูกค้าเห็นสินค้าจริงและทดลองใช้ก่อนซื้อสินค้า
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
