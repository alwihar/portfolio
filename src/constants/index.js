import { aaron, claudio, x, fb, insta, linkedin, github } from '../assets/index'
import Arrow from '../components/shared/Arrow'

export const navLinks = [
  {
    id: "",
    title: "home"
  },
  {
    id: "portfolio",
    title: "portfolio"
  },
  {
    id: "art",
    title: "art"
  }
]

export const homeLinks = [
  {
    id: "about",
    title: "about"
  },
  {
    id: "story",
    title: "story"
  },
  {
    id: "contact",
    title: "contact"
  },
  {
    id: "feedback",
    title: "feedback"
  }
]

export const portfolioLinks = [
  {
    id: "tech",
    title: "tech stack"
  },
  {
    id: "projects",
    title: "projects"
  }
]

export const recommendations = [
  {
    id: '1',
    text: 'I highly recommend Alwina for her expertise in React, Redux, JavaScript, HTML, and CSS. She has a firm grasp on agile development methodologies, code reviews, and works well in teams. She is punctual and manages deadlines well. Alwina is a quick learner, always adapting to new technologies and practices. A valuable asset to any team.',
    author: 'Aaron de Miranda Colaço',
    image: aaron,
    position: 'head of technology at qiibee',
    link: 'https://www.linkedin.com/in/aarondmc/'
  },
  {
    id: '2',
    text: 'During her two-year tenure at qiibee, I had the pleasure of working closely with Alwina as a product manager. She consistently impressed me with her attention to detail, determination, and dedication to delivering top-notch results. Alwina\'s problem-solving skills and collaborative approach were key factors in the success of several complex projects. I have no doubt that she will continue to thrive in her future endeavors, making her an invaluable asset to any team. I wholeheartedly recommend Alwina for any product management role, confident that she will excel and bring significant value to your organization.',
    author: 'Claudio Sgarbi',
    image: claudio,
    position: 'head of product at qiibee',
    link: 'https://www.linkedin.com/in/claudio-sgarbi-12a60713b/'
  },
]

export const socialMediaLinks = [
  {
    url: 'https://www.facebook.com/alwinaharutyunyan',
    alt: 'fb-icon',
    src: fb
  },
  {
    url: 'https://www.instagram.com/alwi_eth',
    alt: 'insta-icon',
    src: insta
  },
  {
    url: 'https://twitter.com/alwi_eth',
    alt: 'x-icon',
    src: x
  },
  {
    url: 'https://www.linkedin.com/in/alwina-harutyunyan',
    alt: 'linkedin-icon',
    src: linkedin
  },
  {
    url: 'https://github.com/alwihar',
    alt: 'github-icon',
    src: github
  }
]

export const techIconsSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '0',
  prevArrow: Arrow,
  nextArrow: Arrow,
}

export const techIconsItems = [
  { class: 'devicon-react-original', name: 'React', text: 'A JavaScript library for building dynamic user interfaces' },
  { class: 'devicon-redux-original', name: 'Redux', text: 'A predictable state container for JavaScript apps' },
  { class: 'devicon-javascript-plain', name: 'JavaScript', text: 'A high-level programming language for web development' },
  { class: 'devicon-typescript-plain', name: 'TypeScript', text: 'A strongly-typed, JavaScript superset language' },
  { class: 'devicon-rxjs-plain', name: 'RxJS', text: 'A reactive programming library for managing asynchronous data streams' },
  { class: 'devicon-nextjs-original-wordmark', name: 'Next.js', text: 'A React-based framework for server-rendered and static websites' },
  { class: 'devicon-vercel-original', name: 'Vercel', text: 'A platform for developing, previewing, and deploying web projects' },
  { class: 'devicon-tailwindcss-original', name: 'Tailwind CSS', text: 'A utility-first CSS framework for rapid UI development' },
  { class: 'devicon-html5-plain', name: 'HTML5', text: 'The latest version of the HTML markup language for web content' },
  { class: 'devicon-css3-plain', name: 'CSS3', text: 'A styling language used to describe the layout of web pages' },
  { class: 'devicon-sass-original', name: 'Sass', text: 'A CSS preprocessor with syntax enhancements for writing stylesheets' },
  { class: 'devicon-docker-plain', name: 'Docker', text: 'A platform for developing, shipping, and running containerized applications' },
  { class: 'devicon-git-plain', name: 'Git', text: 'A version control system for tracking changes in source code' },
  { class: 'devicon-github-original', name: 'GitHub', text: 'A platform for hosting, managing, and collaborating on Git repositories' },
  { class: 'devicon-postman-plain', name: 'Postman', text: 'A collaborative platform for API development and testing' },
  { class: 'devicon-mongodb-plain', name: 'MongoDB', text: 'A NoSQL database system for modern, scalable applications' },
  { class: 'devicon-mysql-plain', name: 'MySQL', text: 'An open-source relational database management system' },
  { class: 'devicon-threejs-original', name: 'Three.js', text: 'A JavaScript library for creating 3D graphics in the browser' },
  { class: 'devicon-figma-plain', name: 'Figma', text: 'A cloud-based design tool for UI/UX design collaboration' },
  { class: 'devicon-materialui-plain', name: 'Material-UI', text: 'A React component library implementing Material Design principles' },
  { class: 'devicon-canva-original', name: 'Canva', text: 'An online graphic design tool for creating visual content' },
  { class: 'devicon-jira-plain', name: 'Jira', text: 'A project management tool for agile teams, tracking issues and tasks' },
  { class: 'devicon-jetbrains-plain', name: 'JetBrains', text: 'An integrated development environment (IDE) software vendor' },
  { class: 'devicon-json-plain', name: 'JSON', text: 'JavaScript Object Notation, a lightweight data interchange format' },
  { class: 'devicon-reactnavigation-original', name: 'React Navigation', text: 'A navigation library for building native mobile apps with React Native' },
  { class: 'devicon-solidity-plain', name: 'Solidity', text: 'A high-level programming language for developing Ethereum smart contracts' },
  { class: 'devicon-npm-original-wordmark', name: 'npm', text: 'A package manager for JavaScript, managing packages and dependencies' },
  { class: 'devicon-less-plain-wordmark', name: 'Less', text: 'A backwards-compatible CSS preprocessor with more features' },
  { class: 'devicon-storybook-plain', name: 'Storybook', text: 'An open-source tool for building UI components in isolation' }
]
