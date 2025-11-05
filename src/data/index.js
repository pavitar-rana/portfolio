import { drlife, oscs, abarta } from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Full stack Developer and Instructor",
    company_name: "TenC Coding Campus",
    date: "Januray 2024 - November 2024",
    details: [
      "Helped <span style='color: white;'> 5 batches of </span> students in learning coding fundamentals through engaging, hands-on projects.",
      "Designed and delivered full stack development curriculum focusing on the <span style='color: white;'>MERN Stack</span> and some additional technologies .",
      "Assessed and graded student projects and assignments, offering feedback to improve their  <span style='color: white;'>coding skills</span> and problem-solving abilities.",
    ],
  },
  {
    title: "Full stack Developer Intern",
    company_name: "Axenta ",
    date: "August 2023 - Januray 2024",
    details: [
      "Developed APIs using <span style='color: white;'>Flask and NodeJS</span> for <span style='color: white;'>CRUD</span> operations and calculations.",
      "<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
      "Worked on <span style='color: white;'>Different projects </span>  and <span style='color: white;'>different Tech stacks</span> according to client requirements.",
    ],
  },
];

const portfolio = [
  // {
  //     name: "Open Source Computer Science Repo",
  //     description:
  //         "A GitHub repo with over 17,000 stars containing a curated list of free online courses from reputable universities that satisfy undergraduate computer science requirements.",
  //     image: oscs,
  // },
  {
    name: "Lovable - AI Website Builder",
    description:
      "An AI-powered website builder that generates and customizes websites automatically based on user prompts and preferences.",
    image: lovable,
  },
  {
    name: "Exness – CFD Trading Platform",
    description:
      "A real-time CFD (Contract for Difference) trading platform with live market data streaming using WebSocket and Node.js.",
    image: exness,
  },
  {
    name: "Abarta AI",
    description: "GPT4-turbo for Irish students: syllabus chatbot, paper helper, vision-based grader, study buddy.",
    image: abarta,
  },
  {
    name: "Dr Life",
    description: "Mental health app: therapy chatbot, mood tracker, journal, meditation helper, calendar.",
    image: drlife,
  },
];

export { experiences, portfolio };
