import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Gorex,
  DSME,
  TBox,
  Majid,
  Swift,
  SwiftUI,
  Bootstrap,
  Firebase,
  Github,
  AndroidStudio,
  Xcode,
  GorexCover,
  GorexMerchantCover,
  PlayStore,
  github,
  Rexix,
  East
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "iOS Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies: TTechnology[] = [
   
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Swift",
    icon: Swift,
  },
  {
    name: "SwiftUI",
    icon: SwiftUI,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "Firebase",
    icon: Firebase,
  },
  {
    name: "Github",
    icon: Github,
  },
  {
    name: "Android Studio",
    icon: AndroidStudio,
  },
  {
    name: "Xcode",
    icon: Xcode,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
 
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
 
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences: TExperience[] = [
  {
    title: "React Native Developer",
    companyName: "Gorex",
    icon: Gorex,
    iconBg: "#FFFFFF",
    date: "May 2024 - Present",
    points: [ 
        "Developing mobile apps for Gorex, implementing key features like QR code and NFC transactions for secure fuel payments.",
        "Working with cross-functional teams to build intuitive, high-performance apps for users and merchants alike.",
        "Ensuring app compatibility across devices while optimizing features like fuel sales analytics and transaction history.",
        "Reviewing code and integrating feedback to improve app performance, scalability, and overall user experience." 
      ]  
    },
  {
    title: "React/ React Native Developer",
    companyName: "DSME Global Links",
    icon: DSME,
    iconBg: "#FFFFFF",
    date: "Jan 2024 - May 2024",
    points: [ "Contributed to the development of feature-rich mobile and web applications using React and React Native, ensuring scalable and maintainable codebases.", "Implemented key features such as real-time data synchronization, user authentication, and in-app notifications to enhance user engagement.", "Worked closely with cross-functional teams to integrate frontend interfaces with backend services, providing seamless user experiences.", "Improved app performance by optimizing load times and responsiveness, resulting in better user satisfaction across web and mobile platforms." ]
  },
  {
    title: "Mobile App Developer",
    companyName: "TBox Solutionz",
    icon: TBox,
    iconBg: "#FFFFFF",
    date: "Sept 2023 - Jan 2024",
   points: [ "Developed and enhanced mobile applications specializing in React Native and iOS using Swift, focusing on intuitive user interfaces and seamless user experiences.", "Implemented new features and functionalities in three major projects, ensuring they met client specifications and enhanced overall app performance.", "Addressed and resolved bugs efficiently, contributing to improved app stability and user satisfaction through thorough testing and debugging processes.", "Collaborated with design teams to create visually appealing and user-friendly UI elements, aligning with best practices for iOS app development." ]
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial: "Collaborating with Mr. Idrees is consistently fantastic; the team values his enthusiasm and commitment. He's a great team player, possesses strong problem-solving skills, and actively seeks alignment with modern technology, making him an excellent software developer.",
    name: "Suleman Awais",
    designation: "Software Engineer",
    company: "MeissaSoft",
    image: East,
  },
  {
    testimonial:"Shahab has been my teammate since last 5 years and we have completed many projects together. I will say one thing for sure that he has skills that many people lack. He is a really good programmer and he always comes up with more than one solutions to a problem. What makes him stand out even more is his ability to maximise the productivity of the whole team.",
    name: "Majid Fareed",
    designation: "Associate Software Engineer",
    company: "i2c Inc.",
    image: Majid,
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects: TProject[] = [
  {
    name: "Gorex",
    description:
      "Gorex is a digital fleet card application designed to simplify fuel transactions for businesses. Users can make cashless payments by generating a unique QR code for each transaction. The app also provides features like transaction history and real-time analytics, making fuel management more efficient for fleet operators.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: GorexCover,
    sourceCodeLink: "https://play.google.com/store/apps/details?id=com.gorexemployee&pcampaignid=web_share",
    linkImg: PlayStore,
  },
  {
    name: "Gorex Merchant",
    description:
      "Gorex Merchant is an app for fuel station employees to process fuel transactions by scanning QR codes from the Gorex app. It also provides real-time analytics on daily and monthly fuel sales, along with transaction history for efficient station management.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: GorexMerchantCover,
    sourceCodeLink: "https://play.google.com/store/apps/details?id=com.gorexmerchant&pcampaignid=web_share",
        linkImg: PlayStore,

  },
  {
    name: "Rexix",
    description:
    "Rexix is a social platform that allows users to post reviews of various products and services. It enables users to share their experiences, and recommendations while connecting with family and friends. With Rexix, users can engage with others through reviews, fostering discussions and making informed decisions about purchases.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "SwiftUI",
        color: "pink-text-gradient",
      },
    ],
    image: Rexix,
    sourceCodeLink: "https://github.com/ShahabIdrees/Rexix-iOS.git",
    linkImg: github,

  },
];

export { services, technologies, experiences, testimonials, projects };
