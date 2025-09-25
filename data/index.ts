
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
  // { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "I’m Mussadiq Khan, a creative mind with a disciplined approach to problem-solving. I thrive on turning ideas into sleek, functional web experiences, blending design sense with clean code. Always curious and constantly learning, I see every project as a chance to grow and push boundaries. Through freelancing and client collaborations, I focus on delivering digital solutions that are not only visually engaging but also purposeful and result-driven",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[73vh]",
    imgClassName: "",
    titleClassName: "justify-end mt-5",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Services",
    description: "Improving Daily",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Running own freelancing Agency",
    description: "Scrupulous",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "dark:bg-transparent bg-gray-500 absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 text-white dark:text-white md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Promptopia ",
    des: "Create and Search AI Prompts for your daily use.",
    img: "/promptPic.png",
    iconLists: ["/tail.svg", "/next.svg", "/ts.svg", "/MongoDB.png", "/nextauth.png"],
    link: "https://promptopiaai-coral.vercel.app/",
  },
  {
    id: 2,
    title: "Cryptoverse",
    des: "Check Cryptos Real time Latest News and Market level for your next investment, Friendly UI and UX.",
    img: "/cryPic.png",
    iconLists: ["/re.svg", "/tail.svg", "/Redux.png", "/Ant Design.png", "/icons8-javascript-48.png"],
    link: "https://cryptoverseredux.netlify.app/",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    des: "Admin Dashboard optimized then before with products and user tables and data to represent with charts.",
    img: "/adminPic.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/icons8-material-ui-48.png", "/Sass.png"],
    link: "https://typescriptadmindashbaord.netlify.app/",
  },
  {
    id: 4,
    title: "Zayphire",
    des: "Professional SEO optimized fullstack Ecommerce store for Client, Used cloudinary to host image",
    img: "/zayphire.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/MongoDB.png", "/nextauth.png", "/cloudinary.png"],
    link: "https://zayphiretesting.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Mussadiq Khan’s work is excellent! I received it a day before the deadline, and it turned out to be awesome—responsive, fast, and very user-friendly. I’m truly impressed with his skills and professionalism. The design is clean, modern, and exactly what I envisioned. His work has helped expand my startup, and he really knows how to turn ideas into something functional and attractive.",
    name: "Abdul Basit",
    title: "Client",
    src: "/t1.png"
  },
  {
    quote:
      "Giving work to mussadiq is peaceful u just have to put requirements and idea and he will bring that to internet. His work is professional and have 24/7 customer support. His creativity and work is outstanding have no doubt to come back to him and give him more work and impress me. Beyond being talented he's an amazing person to work with.",
    name: "Hashir Khan",
    title: "Student Bahria University",
    src: "/t2.png"
  },
  {
    quote:
      "I started my startup Ecommerce and I asked mussadiq to build me website and he did wonderful leaving me impress and wonder he is one of talented man and discipline to his work. No deadlines, he give you work on exact time i asked for he is wonderful man and good developer",
    name: "Khushal Khan",
    title: "Client",
    src: "/t3.png"
  },
  {
    quote:
      "Mussadiq Khan is a hardworking individual with a sharp mind. His work truly impressed me. Collaborating with him was easy, efficient, and always on time.",
    name: "Uzair Ahmad",
    title: "Senior backend developer at sequenx b.v.",
    src: "/t4.png"
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Assisted in the development of a web-based platform using Javascript, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    desc: "Designed, Developed and maintained user-facing features using modern frontend technologies",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Web development Freelancer",
    desc: "Experienced Freelancer with satisfied clients and always bringing clients ideas to web.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Graphic Design Freelancer",
    desc: "Creative Designer, Created Logos and businesses digital product Designs with Modern Technologies",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/mussadiqkhan6886"
  },
  {
    id: 2,
    img: "/insta.svg",
    url: "https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1"
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/mussadiq-khan-2815aa34a/"
  },
];


export const icons = [
  "/three.svg", "/Sass.png", "/Redux.png", "/re.svg", "/nextauth.png", "/fm.svg", "/MongoDB.png", "/ts.svg", "/Ant Design.png", "/icons8-bootstrap-48.png", "/icons8-c++-48.png", "/icons8-css-48.png", "/git.svg", "/icons8-figma-48.png", "/icons8-html-48.png", "/icons8-illustrator-48.png", "/icons8-javascript-48.png", "/icons8-material-ui-48.png", "/next.svg", "/icons8-photoshop-48.png", "/icons8-python-48.png", "/tail.svg", "/cloudinary.png"
]