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
    "Full Stack Developer with 2 years of experience in designing, developing, and optimizing web applications. Skilled in React, Node.js, MongoDB, and GraphQL with expertise in building scalable APIs, enhancing system performance, and implementing secure authentication. Strong understanding of backend development, database management, and API integrations. Experienced in collaborating with diverse teams to develop high-performing applications. Focused on problem-solving and enhancing user experience through scalable software solutions.",
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
      company: "Krishitantra (Startup)",
      href: "https://krishitantra.com/",
      badges: [],
      location: "Mangalore, India",
      title: "Junior Software Developer",
      logoUrl: "/krishitantra_logo.png",
      start: "March 2023",
      end: "Present",
      description:
        "Krishitantra is an agritech startup focused on providing cutting-edge soil testing solutions through IoT-enabled devices.",
      pointers: [
        "Played a key role in the Government of India’s Soil Health Card (SHC) project as a Backend Node.js Developer and React Frontend Web Developer, enhancing system performance and user experience. The project received positive feedback from the Government Ministry.",
        "Contributed to the KarmC project, focusing on real-time carbon emission tracking and strategies to reduce user carbon footprints.",
        "Developed an API Documentation Tool, building a centralized platform to enhance accessibility and developer productivity. Designed and integrated APIs with the user interface and created an interactive API testing and validation interface to streamline integration processes."
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
        "Contributed to the Government of India’s Soil Health Card project, improving system performance and user experience. Worked on backend optimization using MongoDB aggregation, developed GraphQL APIs, and built interactive data visualizations for soil health analytics.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "GraphQL APIs",
        "UI/UX Design",
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
      href: "https://play.google.com/store/apps/details?id=com.hmedia_bhu_vision&hl=en",
      dates: "Oct 2023 - Jan 2024",
      active: true,
      description:
        "Worked on the KarmC project, focusing on real-time carbon emission tracking and strategies to reduce user carbon footprints. Developed dynamic React components, integrated GraphQL APIs, and implemented data synchronization using Node.js and MongoDB to ensure accurate and seamless tracking across platforms",
      technologies: [
        "React.js",
        "Node.js",
        "GraphQL APIs",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "HTML5",
        "CSS3",
      ],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.hmedia_bhu_vision&hl=en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/video/shc_video.mp4",
    },
    {
      title: "API Documentation Tool",
      href: "https://apidocumentation-dev.krishitantra.com/",
      dates: "April 2024 - Sept 2024",
      active: true,
      description:
        "Developed an API Documentation Tool, building a centralized platform to enhance accessibility and developer productivity. Designed and integrated APIs with the user interface and created an interactive API testing and validation interface to streamline integration processes. Integrated automated update notifications to keep users informed of API changes.",
      technologies: [
        "React.js",
        "Node.js",
        "GraphQL APIs",
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
        "A Full Stack App where different users can define a budget in addition to defining different categories in which a user can add expenses to any of the categories. The summary page shows the expense trend.",
      technologies: [
        "React.js",
        "Node.js",
        "RESTful APIs",
        "Redux",
        "MongoDB",
        "JWT Authentication",
      ],
      links: [
        // {
        //   type: "Play Store",
        //   href: "https://play.google.com/store/apps/details?id=com.kirtan.play.treevisualizer",
        //   icon: <Icons.globe className="size-3" />,
        // },
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
