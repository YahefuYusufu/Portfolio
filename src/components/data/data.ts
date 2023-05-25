// This file contains the data for the projects and navbarbar items.
import { TypeMyData, TypeNavbar } from "./Models"
import calculator from "../assets/calculator.png"
import Snake from "../assets/Snake1.png"
import Retro from "../assets/Draw.png"
import Stranger from "../assets/Strange.png"
import UserHub from "../assets/Userhub.png"
import ArtCollector from "../assets/art.png"
import Animation from "../assets/animation.png"
import Fitness from "../assets/Fitness.png"
import Task from "../assets/Task.png"
import inprogress from "../assets/inprogress.jpg"
import quizApp from "../assets/quizApp.png"

export const data: TypeMyData[] = [
  {
    id: 1,
    title: "Quiz App_react-typ",
    img_url: `${quizApp}`,
    link: "https://quiz-react-typ.netlify.app/",
    gitHub: "https://github.com/YahefuYusufu/react_ty_quizApp",
  },
  {
    id: 2,
    title: "In Progress",
    img_url: `${inprogress}`,
    link: "https://github.com/YahefuYusufu",
    gitHub: "https://github.com/YahefuYusufu",
  },
  {
    id: 3,
    title: "In Progress",
    img_url: `${inprogress}`,
    link: "https://github.com/YahefuYusufu",
    gitHub: "https://github.com/YahefuYusufu",
  },
  {
    id: 4,
    title: "In Progress",
    img_url: `${inprogress}`,
    link: "https://github.com/YahefuYusufu",
    gitHub: "https://github.com/YahefuYusufu",
  },
  {
    id: 5,
    title: "In Progress",
    img_url: `${inprogress}`,
    link: "https://github.com/YahefuYusufu",
    gitHub: "https://github.com/YahefuYusufu",
  },

  {
    id: 6,
    title: "In Progress",
    img_url: `${inprogress}`,
    link: "https://github.com/YahefuYusufu",
    gitHub: "https://github.com/YahefuYusufu",
  },
  {
    id: 7,
    title: "In Progress",
    img_url: `${inprogress}`,
    link: "https://github.com/YahefuYusufu",
    gitHub: "https://github.com/YahefuYusufu",
  },

  {
    id: 8,
    title: "In Progress",
    img_url: `${inprogress}`,
    link: "https://github.com/YahefuYusufu",
    gitHub: "https://github.com/YahefuYusufu",
  },
  {
    id: 9,
    title: "In Progress",
    img_url: `${Task}`,
    link: "https://github.com/YahefuYusufu",
    gitHub: "https://github.com/YahefuYusufu",
  },
]

export const listNavBar: TypeNavbar[] = [
  {
    id: 1,
    item: "Home",
    icon: "uil uil-home",
    href: "home",
  },
  {
    id: 2,
    item: "About",
    icon: "uil uil-user",
    href: "about",
  },
  {
    id: 3,
    item: "Skills",
    icon: "uil uil-file-alt",
    href: "skills",
  },
  {
    id: 4,
    item: "Qualifications",
    icon: "uil uil-graduation-cap",
    href: "qualification",
  },
  {
    id: 5,
    item: "Projects",
    icon: "uil uil-briefcase-alt",
    href: "projects",
  },
  {
    id: 6,
    item: "Contact",
    icon: "uil uil-envelope",
    href: "contact",
  },
]
