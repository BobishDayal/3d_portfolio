import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  figma,
  meta,
  tesla,
  threejs,
  blogSite,
  amaterasu,
  CraveItRes,
  firebase,
  aws,
  bootstrap,
  highSchool,
  college,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Front-end Developer",
    icon: backend,
  },
  {
    title: "UX/UI Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "High School",
    company_name: "S.B.P.S",
    icon: highSchool,
    iconBg: "#383E56",
    date: "March 2015 - April 2017",
    points: [
      "Done my high schooling with science background having c++ as an additional subject.",
      "While i was in the school i have already developed some interest in coding and was learning a object oriented language.",
      "I was building and learning new concepts as well like C language along with html and css.",
      "Participating in code reviews and providing constructive feedback to other students.",
    ],
  },
  {
    title: "Higher Studies",
    company_name: "SGT University",
    icon: college,
    iconBg: "#E6DEDD",
    date: "March 2018 - Feb 2020",
    points: [
      "Since i have already developed a habit of coding I pursued my higher studies in B.Tech computer science. ",
      "Learning and constantly practicing diffrent languages made me jack of all trades in my college time.",
      "I was also participating in diffrent inter-college coding programs and competitions with my friends as a team but unfortunately never been able to secure a good place.",
      "Due to some problems I was never to complete my degree, but coder inside me never took rest.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Online",
    icon: meta,
    iconBg: "#383E56",
    date: "august 2022 - Jan 2023",
    points: [
      "After taking long break from studies and exporling in all other fields.",
      "I realized that sticking to a system all day long and coding is all i want to do in my life.",
      "Since I already knew some basic concepts in coding started learning javaScript through udemy and my new journey begun.",
      "Making diffrent projects and small games boosted my moral and encouraged to learn more technologies like react, mongodb etc.",
    ],
  },
  {
    title: "Mobile App Developer",
    company_name: "Online",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications introduced me to react-native.",
      "Developing mobile apps is something I always wanted to try and react-native gave me that opportunity in both platforms.",
      "While developing mobile apps I came to know new concept of css frameworks which is extensively used in react-native",
      "Constantly learning and coding for more than 8 months gave me confidence that now I can enter this industry now.",
    ],
  },
];

const projects = [
  {
    name: "Blog Site",
    description:
      "A blog site in which a user can visit and read about the blogs i have created. The whole site is build on next-js with deep react concepts. It is totally connected to a mongodb cloud from where the whole data is fetched and visitor can also send me message which is connected to the cloud itself",
    tags: [
      {
        name: "next-js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: blogSite,
    source_code_link: "https://my-blog-site-jet.vercel.app/",
  },
  {
    name: "Amaterasu",
    description:
      "Web application that enables users to search for products online, view and sort products according to brands, price and catagories. It has also login & logout feature and a admin account with ability to delete products & singed up users. It is totally linked with cloud and user can also pay for the order through paypal.",
    tags: [
      {
        name: "next-js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "payPal",
        color: "orange-text-gradient",
      },
    ],
    image: amaterasu,
    source_code_link: "https://amaterasu-ecommerce-app.vercel.app/",
  },
  {
    name: "Crave It",
    description:
      "Crave It is the whole enviornment of 3 Apps in which user can order food online and on the real time the restaurant can accept it and driver can accept the prepared order. It is build with react-native with sign up feature, online tracking in which driver and user both can see their location and movements. Its backend is build with aws amplify.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "aws-amplify",
        color: "pink-text-gradient",
      },
    ],
    image: CraveItRes,
    source_code_link: "https://github.com/BobishDayal",
  },
];

export { services, technologies, experiences, projects };
