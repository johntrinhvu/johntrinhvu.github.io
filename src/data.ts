import Neuroflowimg from "./images/NeuroFlowImg.png";
import octImg from "./images/OCTImg.png";
import bucketlistImg from "./images/BucketList.png";
import ridehubImg from "./images/RideHub.png";
import veeFriendPage from "./images/VeeFriendsWebPage.png";
import cardifyImg from "./images/CardifyBetter.png";
import legendsImg from "./images/LegendsPage.png"
import checkersImg from "./images/Checkers.png";
import nightOwlImg from "./images/NightOwlNew.png";
import fitnessImg from "./images/FitnessTrackerNew.png";
import uciOIT from "./images/UCIOIT.jpeg";
import gaImg from "./images/GA.png";
import ucieImg from "./images/UCIE.png";
import mingleyImg from "./images/mingley.png";
import veeFriendLogo from "./images/veefriends.png";
import blockhouseLogo from "./images/blockhouse_capital_logo.jpeg";
import bliLogo from "./images/bliIcon.png";
import metaLogo from "./images/metaLogo.png";

export const links = [
    {
        name: "home",
        hash: "#home",
    },
    {
        name: "about",
        hash: "#about",
    },
    {
        name: "skills",
        hash: "#skills",
    },
    {
        name: "portfolio",
        hash: "#portfolio",
    },
    {
        name: "experience",
        hash: "#experience",
    },
    {
        name: "contact",
        hash: "#contact",
    }
] as const;

export const skills = [
    "C++",
    "Python",
    "Java",
    "C#",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "Express.js",
    "C",
    "Blazor WASM",
    "Web3",
    "SQL",
    ".NET",
    "Artificial Intelligence",
    "Machine Learning",
    "PyTorch",
    "TensorFlow",
    "MIPS Assembly",
    "Swift",
    "Kotlin",
    "Lua",
] as const;

export const projects = [
    {
        title: "NeuroFlow",
        subtitle: "Calculate stress level based on blood flow",
        description: "Utilizes a novel, scalable means of gathering biological data Correlates that biological data to a quantitative metric for stress, derived from Heart Rate Variation (HRV).",
        tags: ["React", "Python", "FastAPI", "PostGresql", "Neurokit2"],
        imageUrl: Neuroflowimg,
        link: "https://github.com/johntrinhvu/NeuroFlow"
    },
    {
        title: "OCT Noise Cancellation",
        subtitle: "Removes the unnecessary noise from images of the cornea",
        description: "Input a folder of OCT images and output a folder of cleaned, noiseless images of the eye using machine learning algorithms.",
        tags: ["Python", "TensorFlow", "OpenCV", "NumPy", "Keras"],
        imageUrl: octImg,
        link: "https://github.com/johntrinhvu/OCT-Noise-Cancellation"
    },
    {
        title: "BucketList AI",
        subtitle: "Flight finder based on personal preference",
        description: "Never miss out on the perfect flight for your dream trip. Build bucketlists and receive automatic notifications about the most affordable flights.",
        tags: ["FastAPI", "React", "MongoDB", "Fetch.AI", "OpenAI"],
        imageUrl: bucketlistImg,
        link: "https://github.com/johntrinhvu/BucketList-AI"
    },
    {
        title: "RideHub",
        subtitle: "Taxi Comparison Mobile App",
        description: "Designed to make smarter, cost-effective travel choices by comparing Uber and Lyft prices. Determine the best option for your journey all in one place.",
        tags: ["React Native", "Ruby", "Kotlin", "Swift", "Tailwind"],
        imageUrl: ridehubImg,
        link: "https://github.com/johntrinhvu/RideHub"
    },
    {
        title: "VeeFriends",
        subtitle: "NFT Collectibles",
        description: "A Gary Vaynerchuk NFT project around meaningful intellectual property and an extraordinary community.",
        tags: ["C#", ".NET", "Blazor WASM", "Blockchain", "Web3.js", "Nethereum"],
        imageUrl: veeFriendPage,
        link: "https://www.veefriends.com/"
    },
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
        tags: ["JavaScript", "Mongo DB", "Express.JS", "Node.js"],
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
        date: "Jun 2025 - Sept 2025",
        company: "Meta",
        points: [
            "Incoming Software Engineer",
        ],
        icon: metaLogo,
        iconBg: "#fff",
    },
    {
        title: "AI & Machine Learning Researcher",
        date: "Oct 2024 - Current",
        company: "Beckman Laser Institute",
        points: [
            "Developed and trained a custom U-Net Model in TensorFlow to enhance OCT images, achieving a 99.45% accuracy in noise reduction and corneal layer segmentation.",
            "Optimized model performance using advanced loss functions (weighted binary cross-entropy and dice loss), as well as gradient accumulation strategies to handle low-memory constraints, reducing memory usage by ~25%."
        ],
        icon: bliLogo,
        iconBg: "#335694"
    },
    {
        title: "Software Engineer Intern",
        date: "Sept 2024 - Oct 2024",
        company: "Blockhouse",
        points: [
            "Implemented automation testing and unit testing on a Python-Django framework for various backend services, including API testing as well as Sign-in/Sign-up testing with 100% coverage rate.",
            "Created a Python-based analysis tool for identifying cost-saving opportunities in stock trading by evaluating the largest net changes in holdings from 13-F filings, optimizing slippage, market impact, and bid-ask."
        ],
        icon: blockhouseLogo,
        iconBg: "#000",
    },
    {
        title: "Software Engineer Intern",
        date: "Jun 2024 - Sept 2024",
        company: "Vee Friends, LLC",
        points: [
            "Redesigned and developed several front-end components of the company website, speeding up loading time and resulting in a 20% increase in ticket sales for VeeCon events, and up to a 50% proficiency increase in concierge meetings.",
            "Partnered with the back-end lead to gain helpful insights into the back-end processes at Vee Friends, to better understand the integration process and functionality of front-end components with back-end systems."
        ],
        icon: veeFriendLogo,
        iconBg: "#fff",
    },
    {
        title: "Software Development Assistant",
        date: "Jan 2024 - Current",
        company: "UCI Office of Information Technology, GDIT & UGA",
        points: [
            "Automated a secure data transfer workflow with GoAnywhere MFT, scripting custom file extractions and managing the transfer of roughly 400 ZIP files, enhancing productivity by 92%, ultimately reducing a 1-hour task to only 5 minutes.",
            "Authored 15 pages of comprehensive JIRA documentation detailing various company processes to streamline team workflows. Additionally, execute complex SQL queries to download critical data for over 7,000 users.",
        ],
        icon: uciOIT, 
        iconBg: "#fff",
    },
    {
        title: "Software Engineer Apprentice",
        date: "Apr 2023 - Jul 2023",
        company: "General Assembly",
        points: [
            "Successfully constructed a working game of Checkers, with win game logic, within my first week of learning HTML/CSS, and JavaScript",
            "Developed a MERN stack application, within 36 hrs, with full CRUD operations which allows users to track their fitness.",
            "Led a team of 4 in development of a Python-Django based framework application as a Git and Database Manager, while also incorporating a robust search functionality.",
            "Collaborated with 3 cross-functional engineering teams to orchestrate the integration of diverse APIs.",
            "Built a full-stack MERN application within a 4-day deadline that is tailored for League of Legends enthusiasts, including the game's five roles: Top, Jungle, Mid, ADC, and Support; ensuring JWT Authentication to ensure secure access, as well as desigining RESTful APIs, and enabling full CRUD operations on posts.",
        ],
        icon: gaImg,
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
        icon: uciOIT,
        iconBg: "#fff",
    },
    {
        title: "League of Legends Esports Scholarship Player",
        date: "Sept 2021 - Sept 2022",
        company: "UCI Esports",
        points: [
            "Committed 15 hours per week to intensive scrimmages, refining gameplay mechanics, and strategizing with the team. Showcased strong leadership skills by organizing team events and fostering a positive team culture, even during challenging situations.",
            "Demonstrated a strong work ethic by dedicating 4 hours daily to solo practice, honing individual skills, and ensuring peak performance during competitive matches.",
            "Led the team to an impressive 1st place finish in a highly competitive tournament, leveraging exceptional leadership and team morale skills.",
            "Provided unwavering support and motivation to the team during adversity, helping maintain team morale and focus in difficult situations. Played a pivotal role in turning challenging moments into learning experiences for the team.",
        ],
        icon: ucieImg,
        iconBg: "#fff",
    },
] as const;
