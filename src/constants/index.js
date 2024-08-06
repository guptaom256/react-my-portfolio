import project1 from "../assets/assets/projects/project-1.jpg";
import project2 from "../assets/assets/projects/project-2.jpg";
import project3 from "../assets/assets/projects/project-3.jpg";
import project4 from "../assets/assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Hardworking and passionate tech-savvy Web Developer proficient in fundamental front-end languages and server-side languages. In-depth knowledge of MS SQL and MongoDB. Skillful creating servers and databases for functionality and designing and developing APIs. Hardworking and Collaborative team player with excellent technical abilities.`;

export const EXPERIENCES = [
  {
    year: "May 2023 - July 2023",
    role: "Product Engineer Intern",
    company: "HighRadius",
    description: `Created a full stack web-based product, focusing on React for frontend development, identifying user requirements, designing a user-friendly experience, and building data models and machine learning models. Utilized Java with JDBC framework for backend design. Employed ML techniques to predict and implement the best-suited models. Collaborated on UI components to enhance the overall app`,
    technologies: ["Java", "React.js", "Machine Learning", "JDBC"],
  },
  {
    year: "April 2022 - June 2022",
    role: "React.js Developer Intern",
    company: "Dream Filler Software Solution Pvt. Ltd.",
    description: `Worked with the development team. Made a Book E-Store responsive web application.
Used React, Javascript, and Node which contains registration-login, dashboard, user profile, and buying
options. Enhanced user experience by implementing responsive web designs and optimizing application
performance.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "MySQL"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Food Ordering Application",
    image: project2,
    description:
      "An application for ordering food, with features such as cart, payment, and progress tracking.",
    technologies: ["HTML", "CSS", "React", "MongoDB", "Node.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Job Application",
    image: project4,
    description:
      "A platform for creating and publishing job posts, with features like user profiles, job application, user view application, employer application view. etc",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Satna, Madhya Pradesh, India.",
  phoneNo: "+91-8839972425",
  email: "guptaom256@gmail.com",
};
