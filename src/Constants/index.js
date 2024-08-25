import { FaCss3Alt } from "react-icons/fa";
import IIITDM_KURNOOl from "../images/IIITDM_KURNOOl.png";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbLetterC } from "react-icons/tb";
import { SiThealgorithms } from "react-icons/si";
import Dhanbad_public_school from "../images/Dhanbad_public_school.jpeg";
import Holy_mother_acdemy from "../images/Holy_mother_acdemy.jpeg";





export const navLinks = [
  { linked: "home", label: "Home" },
  { linked: "about", label: "About" },
  { linked: "skills", label: "Skills" },
  { linked: "education", label: "Education" },
  { linked: "portfolio", label: "Portfolio" },
  { linked: "contact", label: "Contact" },


];

export const skillsInfo = [
  { 
    id: "1",
    dynamicBgColor : "#e01a1a",
    dynamicWidth : "80",
    dynamicTitle : "HTML",
    titleColour : "#E5552D",
    dynamicParagraph : "Proficient in creating well structured, semantic HTML layouts ",
    Icon : FaHtml5
  },
  { 
    id: "2",
    dynamicBgColor : "#b5ff16",
    dynamicWidth : "90",
    dynamicTitle : "CSS",
    titleColour : "#1C76B8",
    dynamicParagraph : "Skilled in Tailwind CSS, efficiently styling responsive web designs.",
    Icon : FaCss3Alt
  },
  {
    id: "3",
    dynamicBgColor : "#26e9ff",
    dynamicWidth : "75",
    dynamicTitle : "JavaScript",
    titleColour : "#FFDB44",
    dynamicParagraph : "Capable of developing interactive, dynamic web applications",
    Icon : IoLogoJavascript
  },
  {
    id: "4",
    dynamicBgColor : "#ff1495",
    dynamicWidth : "75",
    dynamicTitle : "React",
    titleColour : "#66DBFB",
    dynamicParagraph : "Expert in state management and UI logic separation from business logic.",
    Icon : FaReact
  },
  {
    id: "5",
    dynamicBgColor : "#6866ff",
    dynamicWidth : "80",
    dynamicTitle : "Redux",
    titleColour : "#7248B6",
    dynamicParagraph : "Adept at managing application state with React-Redux efficiently",
    Icon : SiRedux
  },
  {
    id: "6",
    dynamicBgColor : "#ffb432",
    dynamicWidth : "85",
    dynamicTitle : "C++",
    titleColour : "#005697",
    dynamicParagraph : "Strong foundation in C++ programming and problem-solving",
    Icon : TbLetterC
  },
  {
    id: "7",
    dynamicBgColor : "#ef47c5",
    dynamicWidth : "45",
    dynamicTitle : "DSA",
    titleColour : "#005697",
    dynamicParagraph : "Proficient in data structures, algorithms, and optimization",
    Icon : SiThealgorithms
  }


];



export const educationInfo =[ 

  {
  id : "5",
  logo: IIITDM_KURNOOl, 
  heading1: "IIITDM KURNOOL",
  heading2: "B.Tech CSE",
  description: "Currently pursuing B.Tech in Computer Science at IIITDM Kurnool, JEE Mains qualifier. Focused on honing programming, algorithm, and software development skills. Aspiring to innovate and contribute significantly to the tech sector."

 },
 {
   id : "9",
  logo: Holy_mother_acdemy, 
  heading1: "Holy Mother Academy",
  heading2: "Class-12th",
  description: "I graduated from Holy Mother Academy with a Science stream in Class 12. Passionate about science, I'm eager to explore and learn with curiosity and dedication. Ready to embark on my educational journey with a hunger for knowledge."

 },
 {
   id : "8",
  logo: Dhanbad_public_school, 
  heading1: "Dhanbad Public School",
  heading2: "Class-10",
  description: "I completed my 10th grade education at Shanbad Public School. With a solid foundation from my schooling . I am excited to keep learning with enthusiasm and dedication, aiming to do well in whatever I choose to do next."

 },


];


