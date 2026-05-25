export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Publications", link: "#publications" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I bridge robotics, sustainability, and data science to build smarter manufacturing systems",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to global research collaborations across time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Always expanding my toolkit",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Researcher and engineer driven by curiosity and impact.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title:
      "Building an agentic LCA optimization framework for human-robot disassembly",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interested in collaborating on research or a project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Human-Robot Collaborative Disassembly (HRCD)",
    des: "Dual-arm robotic disassembly system with LCA-driven energy optimization for end-of-life electronics within a Circular Economy framework.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/noriegamonsc1",
  },
  {
    id: 2,
    title: "LCA Energy Analysis Pipeline",
    des: "Jupyter-based pipeline for automatic cycle detection, per-cycle energy analysis, and LCI table generation from ROS robot telemetry data.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/noriegamonsc1",
  },
  {
    id: 3,
    title: "Offshore Wind Energy & Remote Sensing",
    des: "ML-driven analysis of offshore wind potential using Landsat-8 and Sentinel-1 satellite imagery for the NJ DEA Wind Institute Fellowship.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/noriegamonsc1",
  },
  {
    id: 4,
    title: "AI-Powered Personal Website & Chatbot",
    des: "This website — built with Next.js, Three.js, and Aceternity UI. Features an agentic chatbot powered by Claude that can answer questions about my research.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://cristian-noriega.vercel.app",
  },
];

export const publications = [
  {
    quote:
      "Analysis of offshore wind energy potential using satellite remote sensing and machine learning techniques applied to the New Jersey coastline. Published in IEEE International Conference on Big Data.",
    name: "IEEE BigData",
    title: "Offshore Wind Energy Analysis via Remote Sensing & ML",
  },
  {
    quote:
      "Machine learning framework for wind resource assessment using Landsat-8 and Sentinel-1 data fusion. Published in IEEE International Conference on Data Mining Workshops.",
    name: "IEEE ICDMW",
    title: "ML Framework for Wind Resource Assessment",
  },
  {
    quote:
      "Life Cycle Assessment of Human-Robot Collaborative Disassembly systems for end-of-life electronics under Industry 5.0 and Circular Economy frameworks. Submitted to IEEE ISAIA 2026.",
    name: "ISAIA 2026 (Submitted)",
    title: "LCA of HRCD Systems for Circular Economy",
  },
];

export const companies = [
  {
    id: 1,
    name: "Montclair State",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "IEEE",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "ROS",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Python",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "SimaPro",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "PhD Researcher — CRoSS Lab, Montclair State University",
    desc: "Leading research on Human-Robot Collaborative Disassembly and Life Cycle Assessment for sustainable manufacturing under Dr. Weitian Wang.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "IEEE Region 1 Student Representative",
    desc: "Representing student interests across IEEE Region 1. Student Activity Chair for IEEE ISAIA 2026 conference.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Wind Institute Research Fellow — NJ DEA",
    desc: "Conducted ML-driven analysis of offshore wind energy potential using Landsat-8 and Sentinel-1 satellite remote sensing.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Teaching Assistant — CSIT, Montclair State University",
    desc: "TA across multiple Computer Science and Information Technology courses, supporting undergraduate student learning.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/noriegamonsc1",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://scholar.google.com",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/cristian-c-noriega-m-data-science/",
  },
];
