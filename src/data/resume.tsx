import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kaushik J",
  initials: "KJ",
  url: "https://dillion.io",
  location: "Udupi, Karnataka",
  locationLink: "https://maps.app.goo.gl/5avz3GB21q7Hk2sM6",
  description:
    "Passionate about leveraging technology to build innovative solutions that enhance user experiences.",
  summary:
    "Full Stack Developer with 3+ years of experience building and maintaining web applications using React.js, Node.js, MongoDB, and GraphQL. Experienced in developing RESTful APIs, optimizing database performance, implementing secure authentication, and building interactive dashboards. Skilled in backend processing, API integrations, and developing scalable application features. Focused on writing maintainable code, solving technical challenges, and delivering reliable user-focused solutions.",
  avatarUrl: "/kaushik.png",
  resumeDownloadIconUrl: {
    icon: Icons.globe,
    visible: false,
  },
  skills: [
    "JavaScript (ES5, ES6)",
    "HTML5",
    "CSS3",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "RESTful APIs",
    "GraphQL",
    "JWT Authentication",
    "Git",
    "GitLab",
    "VS Code",
    "Postman",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kaushikj26@gmail.com",
    tel: "+91 8277685288",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kaushikj26",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "http://www.linkedin.com/in/kaushikj26",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      Resume: {
        name: "Resume",
        url: "/Kaushik_Resume.pdf",
        icon: Icons.resume,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Krishitantra - Klonec Automations Private Limited",
      href: "https://krishitantra.com/",
      badges: [],
      location: "Mangalore, India",
      title: "Software Engineer",
      logoUrl: "/krishitantra_logo.png",
      start: "March 2023",
      end: "Present",
      description:
        "Krishitantra is an agritech startup focused on providing cutting-edge soil testing solutions through IoT-enabled devices.",
      pointers: [
        "Developed and maintained full-stack web application features using React.js, Node.js, MongoDB, and GraphQL across government and enterprise projects.",
        "Built and integrated backend APIs, optimized database queries, and implemented data-processing workflows to improve application performance and reliability.",
        "Developed interactive frontend components, dashboards, authentication workflows, and API integrations to support business requirements across multiple applications.",
      ],
    },
    {
      company: "DCT Academy (Internship)",
      badges: [],
      href: "https://www.dctacademy.com/",
      location: "Remote",
      title: "Trainee Software Intern",
      logoUrl: "/dct.png",
      start: "April 2022",
      end: "October 2022",
      description:
        "DCT Academy is an IT training institute that offers structured, outcome-focused training in coding and IT skills.",
      pointers: [
        "Developed full-stack applications using React.js, Node.js, and MongoDB, with hands-on experience in API development and state management.",
        "Designed and implemented JWT-based authentication for secure user access and optimized reusable front-end components."
      ],
    },
    {
      company: "L&T Hydrocarbon Engineering Limited",
      href: "https://www.lnthydrocarbon.com/",
      badges: [],
      location: "Chennai, TamilNadu",
      title: "Planning & Production Engineer",
      logoUrl: "/lnt.png",
      start: "October 2020",
      end: "December 2021",
      description:
        "Developing installation work packages (IWPs) schedule and integration with Engineering / Procurement work packages. Planning, designing, coordinating and controlling the process concerning to production.",
      pointers: [],
    },
    {
      company: "Karnataka Power Transmission Corporation Limited",
      href: "https://kptcl.karnataka.gov.in/english",
      badges: [],
      location: "Udupi, Karnataka",
      title: "Junior Engineer",
      logoUrl: "/kptcl.png",
      start: "June 2019",
      end: "October 2020",
      description:
        "Operated and controlled the entire substation during fault conditions, managing feeder supply and ensuring uninterrupted power distribution. Monitored transformer and feeder performance by taking hourly readings and overseeing substation operations and maintenance.",
      pointers: [],
    }
  ],
  education: [
    {
      school: "NMAM Institute of Technology",
      href: "https://nitte.edu.in/nmamit/",
      degree: "Bachelor of Engineering – Electrical and Electronics",
      logoUrl: "/NMAMIT.png",
      start: "2015",
      end: "2019",
    },
    {
      school: "Poornaprajna Pre-University College",
      href: "https://udupi.ppuc.edu.in/",
      degree: "Pre-University Course – Science Stream",
      logoUrl: "/ppc.png",
      start: "2013",
      end: "2015",
    },
    {
      school: "St Mary's English Medium  School",
      href: "https://www.stmarysudupi.org/",
      degree: "Secondary School Leaving Certificate",
      logoUrl: "/smes.png",
      start: "2012",
      end: "2013",
    },
  ],
  projects: [
    {
      title: "Soil Health Card (SHC)",
      href: "https://www.soilhealth.dac.gov.in/",
      dates: "March 2023 - Present",
      active: true,
      description:
        "Contributed to the Government of India's Soil Health Card project, a nationwide initiative for soil health assessment and reporting. Worked across frontend and backend development, focusing on database performance optimization, GraphQL API development, automated dashboard data processing, and bulk report generation.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "GraphQL",
        "Google Cloud Storage",
        "JWT Authentication",
        "HTML5",
        "CSS3",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.soilhealth.dac.gov.in/",
          icon: <Icons.globe className="size-3" />
        },
      ],
      image: "",
      video: "/video/SHC.mp4",
    },
    {
      title: "KarmC",
      href: "https://karmc.krishitantra.com/",
      dates: "Oct 2023 - Jan 2024",
      active: true,
      description:
        "Worked on KarmC, a carbon tracking platform designed to help organizations monitor and analyze their carbon emissions. Contributed to frontend development, GraphQL API integration, backend data synchronization, and secure authentication to support accurate carbon footprint tracking across organizational categories.",
      technologies: [
        "React.js",
        "Node.js",
        "GraphQL",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "HTML5",
        "CSS3",
      ],
      links: [
        {
          type: "Website",
          href: "https://karmc.krishitantra.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/video/Karmc.mp4",
    },
    {
      title: "API Documentation Tool",
      href: "https://apidocumentation-dev.krishitantra.com/",
      dates: "April 2024 - Sept 2024",
      active: true,
      description:
        "Developed a centralized API documentation platform for internal teams and external API consumers to explore and test APIs. Built interactive API testing features, integrated backend services for API schema generation and updates, and implemented change notifications to keep users informed about documentation updates.",
      technologies: [
        "React.js",
        "Node.js",
        "GraphQL",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "HTML5",
        "CSS3",
      ],
      links: [
        {
          type: "Website",
          href: "https://apidocumentation-dev.krishitantra.com/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "/video/API_Documentation.mp4",
    },
    {
      title: "Expense App",
      href: "",
      dates: "Nov 2022 - Jan 2023",
      active: true,
      description:
        "Developed a full-stack expense management application that allows users to set budgets, create expense categories, and track their spending. Implemented expense tracking and summary dashboards to visualize spending trends and help users monitor their budgets. Integrated REST APIs, Redux for state management, and JWT-based authentication.",
      technologies: [
        "React.js",
        "Node.js",
        "RESTful APIs",
        "Redux",
        "MongoDB",
        "JWT Authentication",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/kaushikj26/Expense-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video/Expense_App.mp4",
    },
    // {
    //   title: "Customer Dashboard",
    //   href: "",
    //   dates: "Aug 2022",
    //   active: true,
    //   description:
    //     "A Front end app to parse data of customers to the dashboard. Users can search for customers using their name or phone number. Dashboard also displays the number of orders made by the customer, total amount of orders and many more data.",
    //   technologies: [
    //     "React.js",
    //     "React DOM",
    //     "Bootstrap",
    //   ],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/kaushikj26/customer-dashboard",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "/video/ar_visualizer_video.mp4",
    // },
  ],
  // hackathons: [
  //   {
  //     title: "HACK THE MOUNTAINS",
  //     dates: "October, 2020",
  //     location: "Online",
  //     description:
  //       "Developed a mobile application aimed at college students to tackle tree and algorithm problems. The app features a user-friendly interface that visually represents tree structures and provides table-based UI solutions for popular algorithms, enhancing the learning experience for students.",
  //     image:
  //       "/hack_the_mountains.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  // ],
} as const; 
