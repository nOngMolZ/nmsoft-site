import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTheme } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const { isDarkMode } = useTheme();

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
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="ryde" />
            </div>
            <div className="text-content">
              <h2>รับพัฒนาและให้คำปรึกษาระบบซอฟต์แวร์และเครือข่ายสำหรับองค์กร</h2>
              <p className={`${isDarkMode ? "text-white-50" : "text-gray-700"} md:text-xl`}>
                เรารับออกแบบและพัฒนาระบบซอฟต์แวร์ พร้อมวางโครงสร้างระบบเครือข่ายครบวงจร รองรับทุกความต้องการขององค์กร ตั้งแต่ระบบภายในจนถึงการเชื่อมต่อข้อมูลระหว่างระบบ พร้อมบริการดูแลหลังการขายอย่างมืออาชีพ
              </p>
            </div>
          </div>
          {/* right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Library Management" />
              </div>
              <h2>ให้คำปรึกษาในการแก้ปัญหาและจัดการสร้างโปรแกรม</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="YC Directory" />
              </div>
              <h2>ทำ MVP ให้ลูกค้าเห็นสินค้าจริงและทดลองใช้ก่อนซื้อสินค้า</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
