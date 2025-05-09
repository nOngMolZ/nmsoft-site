const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  // {
  //   name: "Experience",
  //   link: "#experience",
  // },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 14, suffix: "+", label: "Years of Experience" },
  { value: 124, suffix: "+", label: "Satisfied Clients" },
  { value: 78, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
];

const abilities = [
  {
    imgPath: "/images/teamwork.png",
    title: "พัฒนาร่วมกับลูกค้า",
    desc: "ทำงานร่วมกับลูกค้าอย่างใกล้ชิด เพื่อเข้าใจความต้องการและพัฒนาโซลูชันที่ตอบโจทย์ธุรกิจจริง",
  },
  {
    imgPath: "/images/communication.png",
    title: "สื่อสารชัดเจน เข้าใจง่าย",
    desc: "เรามุ่งเน้นการสื่อสารที่เข้าใจง่าย และโปร่งใสในทุกขั้นตอนของการทำงาน เพื่อสร้างความมั่นใจให้กับลูกค้า",
  },
  {
    imgPath: "/images/problem-solving.png",
    title: "ออกแบบโซลูชันเฉพาะทาง",
    desc: "วิเคราะห์ปัญหาอย่างรอบด้าน และออกแบบระบบหรือบริการที่ตอบโจทย์เฉพาะของแต่ละธุรกิจ",
  },
  {
    imgPath: "/images/adaptability.png",
    title: "ยืดหยุ่นและปรับตัวได้",
    desc: "พร้อมปรับกระบวนการทำงานให้เหมาะสมกับความเปลี่ยนแปลงของตลาดและความต้องการของลูกค้า",
  },
  {
    imgPath: "/images/initiative.png",
    title: "เสนอแนวทางเชิงรุก",
    desc: "ไม่เพียงรอรับคำสั่ง แต่เรายังเสนอแนวคิดใหม่ ๆ ที่ช่วยเพิ่มมูลค่าให้กับธุรกิจของคุณ",
  },
  {
    imgPath: "/images/detail.png",
    title: "ใส่ใจทุกรายละเอียด",
    desc: "ใส่ใจตั้งแต่การวางแผน ออกแบบ พัฒนา จนถึงการส่งมอบ เพื่อให้ผลงานออกมามีคุณภาพสูงสุด",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/golang_3d.glb",
    scale: 3,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];
const expCards = [
  {
    review: "Kan has been an incredible asset to Generation Thailand, guiding students with both technical knowledge and personal development. His dedication to fostering growth and resilience in learners is admirable.",
    imgPath: "/images/logo-generation.png",
    logoPath: "/images/genlogo.jpg",
    title: "Teaching Assistant",
    date: "November 2023 - Present",
    responsibilities: [
      "Supported students in a web development bootcamp with both technical and soft skills development.",
      "Guided learners on Future Orientation, Time Management, Teamwork, and Persistence.",
      "Promoted critical soft skills like Personal Responsibility, Orientation to Detail, Proactiveness, and Growth Mindset.",
      "Assisted students in adapting to the rapidly evolving tech landscape through mentorship and project support.",
    ],
  },
  {
    review: "Kan consistently delivers high-quality software solutions as an independent engineer. His ability to manage projects end-to-end showcases both his technical expertise and entrepreneurial mindset.",
    imgPath: "/images/golang.png",
    logoPath: "/images/logo-freelance.png",
    title: "Freelance Software Engineer",
    date: "January 2024 - Present",
    responsibilities: [
      "Developed scalable backend services and RESTful APIs using Golang.",
      "Built and maintained full-stack web applications with React, Tailwind CSS, and Go-based APIs.",
      "Designed efficient database schemas and queries using PostgreSQL and MongoDB.",
      "Managed project scoping, client communication, and deployment pipelines independently.",
      "Optimized system performance and ensured code quality through testing and refactoring.",
    ],
  },
  {
    review: "Kan demonstrated strong technical and communication skills during his apprenticeship. His work showed great promise and a solid foundation in backend and frontend technologies.",
    imgPath: "/images/logo-generation.png",
    logoPath: "/images/genlogo.jpg",
    title: "Junior Software Developer",
    date: "July 2023 - October 2023",
    responsibilities: [
      "Built responsive web applications using Express.js and Tailwind CSS.",
      "Worked in agile teams to deliver functional features on time.",
      "Utilized SQL and other backend technologies to manage data and APIs.",
      "Applied best practices in full-stack development within an apprenticeship model.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "MontonK3",
    mentions: "@Mock",
    review: "บริการของ NMSoft.co เกินความคาดหมาย ทีมงานเข้าใจความต้องการของเราอย่างรวดเร็ว และพัฒนาเว็บไซต์ที่ตรงใจลูกค้าของเรามาก การออกแบบสวยงาม ใช้งานง่าย และรองรับอุปกรณ์ทุกขนาด ขอบคุณทีมงานทุกคนที่ทำให้ธุรกิจของเราดีขึ้นมาก",
    imgPath: "/images/tanatut.png",
  },
  {
    name: "Mockuser2",
    mentions: "@Mock",
    review:
      "ประทับใจมากกับการทำงานของทีม NMSoft ตั้งแต่เริ่มพูดคุยจนถึงส่งมอบงาน ทุกขั้นตอนรวดเร็ว ทำงานเป็นระบบ และใส่ใจในทุกรายละเอียด เว็บแอปพลิเคชันของเราตอบโจทย์การใช้งาน ลูกค้าชื่นชมกันมาก แนะนำ 100% สำหรับธุรกิจที่ต้องการยกระดับออนไลน์",
    imgPath: "/images/alisa.png",
  },
  {
    name: "Mockuser3",
    mentions: "@Mock",
    review: "ผมเคยลองใช้บริการหลายบริษัทมาแล้ว แต่ NMSoft เป็นทีมที่เข้าใจเทคโนโลยีและธุรกิจได้ดีที่สุด พวกเขาไม่เพียงสร้างเว็บไซต์ แต่ยังให้คำแนะนำด้านกลยุทธ์ออนไลน์ที่ช่วยให้ธุรกิจเติบโตขึ้นอย่างมาก คุ้มค่าทุกบาทที่ลงทุนไป",
    imgPath: "/images/tanatut2.png",
  },
  {
    name: "Mockuser4",

    mentions: "@Mock",
    review: "ทีม NMSoft ทำให้โปรเจกต์ของเราเสร็จทันเวลาพร้อมคุณภาพที่เกินคาด หัวข้อที่ซับซ้อนกลายเป็นเรื่องง่ายเมื่อได้ทำงานกับทีมนี้ ขอบคุณที่ช่วยให้เราก้าวหน้าในยุคดิจิทัล",
    imgPath: "/images/kanjana.png",
  },
  {
    name: "Mockuser5",
    mentions: "@Mock",
    review: "เว็บไซต์ที่ทีมสร้างให้เร็ว แรง และตอบโจทย์ครบถ้วน มีระบบหลังบ้านที่ใช้งานง่าย ทีมตอบกลับเร็วมาก ไม่เคยปล่อยให้เรารอนานเลยครับ ประทับใจจริงๆ",
    imgPath: "/images/ronchai.png",
  },
  {
    name: "Mockuser6",
    mentions: "@Mock",
    review: "ดีไซน์ของ NMSoft สวยเกินเบอร์! ทั้ง UX และ UI ถูกคิดมาอย่างดี ทีมเข้าใจผู้ใช้งานจริงๆ และมีความใส่ใจในดีเทลมาก แนะนำสำหรับใครที่ต้องการเว็บไซต์ที่ทั้งสวยและใช้งานได้จริง",
    imgPath: "/images/araya.png",
  },
  {
    name: "Mockuser6",
    mentions: "@Mock",
    review: "ตั้งแต่เริ่มต้นโปรเจกต์ ทีมงานให้คำปรึกษาอย่างมืออาชีพ ทำงานเร็ว และปรับตามความต้องการของเราได้ทันที ที่สำคัญคือไม่ทิ้งงานหลังจากส่งมอบ แถมยังดูแลต่อเนื่อง ดีมากครับ",
    imgPath: "/images/witaya.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export { words, abilities, logoIconsList, counterItems, expCards, expLogos, testimonials, socialImgs, techStackIcons, techStackImgs, navLinks };
