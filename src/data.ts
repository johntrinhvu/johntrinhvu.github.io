import cardifyImg from "./images/Cardify.png";
import legendsImg from "./images/LegendsLounge.png";
import checkersImg from "./images/Checkers.png";
import nightOwlImg from "./images/NightOwl.png";
import fitnessImg from "./images/FitnessTracker.png";
import uciOIT from "./images/UCIOIT.jpeg";
import gaImg from "./images/GA.png";
import ucieImg from "./images/UCIE.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Portfolio",
        hash: "#portfolio",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    }
] as const;

export const skills = [
    "C++",
    "Python",
    "Java",
    "C",
    "C#",
    ".NET",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Web3",
    "NoSQL",
    "MySQL",
    "SQL",
    "SQLite3",
    "PostgreSQL",
    "AI Artificial Intelligence",
    "ML Machine Learning",
    "MIPS Assembly",
    "Azure",
    "Perl",
    "Swift",
    "Golang",
    "Rust",
    "Kotlin",
    "Lua",
    "Ruby",
    "R",
    "MongoDB",
    "Django",
    "jQuery"
] as const;

export const projects = [
    {
        title: "Cardify",
        subtitle: "Virtual Business Card Creator",
        description: "Allows users to create virtual business cards, which displays users' name, occupation, a short summary about themselves.",
        tags: ["Gemini AI", "React.js", "Mongo DB", "Express.js", "Node.js"],
        imageUrl: cardifyImg,
        link: "https://github.com/johntrinhvu/Cardify",
    },
    {
        title: "Legends Lounge",
        subtitle: "Blog-Forum Community Hub",
        description: "Blogpost forum specifically for League of Legends players, where players can post their opinions about the game, discuss strategies for different roles, and ask questions.",
        tags: ["Mongo DB", "Express.js", "React.js", "Node.js", "Tailwind"],
        imageUrl: legendsImg,
        link: "https://github.com/johntrinhvu/LegendsLounge",
    },
    {
        title: "NightOwl",
        subtitle: "Dynamic Event Organizing Platform",
        description: "Web application designed to help users discover and post various evening events. Getting started with NightOwl is a breeze, simply sign-up to unlock a world of possibilities!",
        tags: ["HTML", "CSS", "Python", "Django", "JavaScript"],
        imageUrl: nightOwlImg,
        link: "https://github.com/johntrinhvu/NightOwl",
    },
    {
        title: "Fitness Tracker",
        subtitle: "Fitness Tracking Application",
        description: "Allows users to create and manage fitness routines. Users can add exercises to their routines, specifying the exercise name/number of sets and repetitions.",
        tags: ["HTML", "CSS", "Mongo DB", "Express.JS", "Node.js", "JavaScript"],
        imageUrl: fitnessImg,
        link: "https://github.com/johntrinhvu/fitness-tracker",
    },
    {
        title: "Checkers",
        subtitle: "Recreation of Checkers in JS",
        description: "My very first project done in HTML/CSS and JavaScript. A classic board game where two players face off against each other, with the objective of collecting all of the other player's pieces. ",
        tags: ["HTML", "CSS", "JavaScript"],
        imageUrl: checkersImg,
        link: "https://github.com/johntrinhvu/Checkers",
    }
] as const;

export const jobs = [
    {
        title: "Software Engineer Intern",
        date: "Jun 2024 - Current",
        company: "Vee Friends, LLC",
        points: [

        ],
        icon: "",
        iconbg: "",
    },
    {
        title: "Full-Stack Software Engineer",
        date: "May 2024 - Current",
        company: "Land and Ritual",
        points: [

        ],
        icon: "",
        iconbg: "",
    },
    {
        title: "Front-End Software Engineer",
        date: "Apr 2024 - Current",
        company: "Mingley",
        points: [

        ],
        icon: "",
        iconbg: "",
    },
    {
        title: "Software Developer",
        date: "Nov 2023 - Current",
        company: "UCI Office of Information Technology, GDIT & UGA",
        points: [
            "Developed software components, including user interface, REST API, and background processes.",
            "Collaborated with the Development Lead to understand product requirements and provide roughly 140 ServiceNow tickets in addition to closing around 80 JIRA tickets.",
            "Demonstrated proficiency in Java and SQL, as well as JPA specification, JavaScript (React JS), HTML, CSS, and relevant tools (JIRA, Git, IDEs), contributing to advanced programming projects.",
        ],
        icon: "/UCIOIT.jpeg",
        iconBg: "#fff",
    },
    {
        title: "Software Engineer Fellow",
        date: "Apr 2023 - Jul 2023",
        company: "General Assembly",
        points: [
            "Successfully constructed a working game of Checkers, with win game logic, within my first week of learning HTML/CSS, and JavaScript",
            "Developed a MERN stack application, within 36 hrs, with full CRUD operations which allows users to track their fitness.",
            "Led a team of 4 in development of a Python-Django based framework application as a Git and Database Manager, while also incorporating a robust search functionality.",
            "Collaborated with 3 cross-functional engineering teams to orchestrate the integration of diverse APIs.",
            "Built a full-stack MERN application within a 4-day deadline that is tailored for League of Legends enthusiasts, including the game's five roles: Top, Jungle, Mid, ADC, and Support; ensuring JWT Authentication to ensure secure access, as well as desigining RESTful APIs, and enabling full CRUD operations on posts.",
        ],
        icon: "/GA.png",
        iconBg: "#fff",
    },
    {
        title: "IT Support Specialist",
        date: "Nov 2022 - Nov 2023",
        company: "UCI Office of Information Technology",
        points: [
            "Opened, tracked, and closed support tickets from a diverse user base seeking technical assistance. Diligently documented and prioritized user issues, ensuring prompt resolution and a streamlined support process.",
            "Proficiently managed and administered Active Directory for over 200 users, facilitating account management, security protocols, group policy configurations, and system maintenance.",
            "Utilized remote desktop tools to provide technical assistance, troubleshooting, and issue resolution for around 700 users."
        ],
        icon: "/UCIOIT.jpeg",
        iconBg: "#fff",
    },
    {
        title: "League of Legends Esports Scholarship Player",
        date: "Sep 2021 - Sep 2022",
        company: "UCI Esports",
        points: [
            "Committed 15 hours per week to intensive scrimmages, refining gameplay mechanics, and strategizing with the team. Showcased strong leadership skills by organizing team events and fostering a positive team culture, even during challenging situations.",
            "Demonstrated a strong work ethic by dedicating 4 hours daily to solo practice, honing individual skills, and ensuring peak performance during competitive matches.",
            "Led the team to an impressive 1st place finish in a highly competitive tournament, leveraging exceptional leadership and team morale skills.",
            "Provided unwavering support and motivation to the team during adversity, helping maintain team morale and focus in difficult situations. Played a pivotal role in turning challenging moments into learning experiences for the team.",
        ],
        icon: "/UCIE.png",
        iconBg: "#fff",
    },

] as const;
