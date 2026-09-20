import bliIcon from "./images/bliIcon.png";
import CakesVivii from "./images/CakesVivii.png";
import LeetBro from "./images/LeetBro.png";
import metaLogo from "./images/metaLogo.png";
import NeuroFlowImg from "./images/NeuroFlowImg.png";
import OCTImg from "./images/OCTImg.png";
import uciLogo from "./images/uci.png";
import UCIE from "./images/UCIE.png";
import uciOit from "./images/uci_oit.jpeg";
import veefriends from "./images/veefriends.png";

// Data for experience, projects, and the home-page "currently" widgets.
// NOTE: dates/descriptions are placeholders — fill in your real dates and 1-2 sentence
// descriptions for each role. Order is newest-first; re-order as needed.
export const experience = [
  {
    id: "meta-fte",
    when: "Nov 2025 - Present",
    company: "Meta",
    title: "Software Engineer (iOS)",
    description:
      "- full-time on messenger media, working primarily on iOS, but dabble in android and web development; full-stack.",
    tags: ["Objective-C", "Swift", "C/C++", "Kotlin", "PHP", "React"],
    accent: {
      dark: "#8FD9FB",
      light: "#5964A8",
    },
    icon: metaLogo,
    iconBg: "#ffffff",
    iconFit: "contain",
    link: "https://www.meta.com/",
  },
  {
    id: "uci-degree",
    when: "Sep 2021 - Sep 2025",
    company: "University of California, Irvine",
    title: "Bachelor of Science, Software Engineering",
    description:
      "- graduated with a degree in software engineering.",
    tags: ["Python", "C/C++", "Java", "SQL", "Computational Linear Algebra"],
    accent: {
      dark: "#FFEE8C",
      light: "#8A7415",
    },
    icon: uciLogo,
    iconBg: "#ffffff",
    iconFit: "contain",
    iconScale: "scale-[2.1]",
    link: "https://www.uci.edu/",
  },
  {
    id: "meta-intern",
    when: "Jun 2025 - Sep 2025",
    company: "Meta",
    title: "Software Engineer Intern (iOS)",
    description: "- added a filtering system for photos/videos in media gallery on messenger iOS.",
    tags: ["Objective-C", "Swift"],
    accent: {
      dark: "#8FD9FB",
      light: "#5964A8",
    },
    icon: metaLogo,
    iconBg: "#ffffff",
    iconFit: "contain",
    link: "https://www.meta.com/",
  },
  {
    id: "veefriends",
    when: "Jun 2024 - Sep 2024",
    company: "VeeFriends",
    title: "Software Engineer Intern",
    description: "- developed some web components for Gary Vaynerchuk.",
    tags: ["C#", ".NET", "Blazor WASM", "Web3.js"],
    accent: {
      dark: "#80EF80",
      light: "#2F9E44",
    },
    icon: veefriends,
    iconBg: "#ffffff",
    iconFit: "contain",
    link: "https://www.veefriends.com/"
  },
  {
    id: "ml-researcher",
    when: "Oct 2024 - Jun 2025",
    company: "Beckman Laser Institute",
    title: "Machine Learning Researcher",
    description: "- researching about the eye, publication coming soon.",
    tags: ["Python", "TensorFlow", "OpenCV", "NumPy", "Keras"],
    accent: {
      dark: "#8C9DFF",
      light: "#4C5FEA",
    },
    icon: bliIcon,
    iconBg: "#335694",
    iconFit: "cover",
    link: "https://bli.uci.edu/"
  },
  {
    id: "oit-student-dev",
    when: "Jan 2025 - Jun 2025",
    company: "Office of Information Technology @ UC Irvine",
    title: "Software Development Assistant",
    description: "- sql demon for the  software engineers at oit.",
    tags: ["HTML", "CSS", "Javascript", "SQL"],
    accent: {
      dark: "#2B8DFC",
      light: "#1C7ED6",
    },
    icon: uciOit,
    iconBg: "#ffffff",
    iconFit: "cover",
    link: "https://www.oit.uci.edu/",
  },
  {
    id: "esports",
    when: "Sep 2021 - Sep 2022",
    company: "UC Irvine Esports",
    title: "Scholarship League of Legends Player",
    description:
      "- challenger adc for UCI Esports team for the 2021-2022 year",
    tags: ["1st Place Nerd Street", "2nd Place Western Conference", "Top-8 Collegiate CLOL"],
    accent: {
      dark: "#FFEE8C",
      light: "#8A7415",
    },
    icon: UCIE,
    iconBg: "#ffffff",
    iconFit: "contain",
    iconScale: "scale-[1.2]",
    link: "https://esports.uci.edu/",
  },
];

export const projects = [
  {
    id: "cakes-by-vivi",
    when: "Jun 2025 - Current",
    title: "Cakes by Vivii",
    description: "- cake business website for my older sister, bringing in ~$3.2k in revenue so far.",
    tags: ["React.js", "Tailwind CSS", "Firebase"],
    accent: {
      dark: "#C8B6FF",
      light: "#7C5CBF",
    },
    image: CakesVivii,
    link: "https://github.com/johntrinhvu/cakes-by-vivii",
  },
  {
    id: "leetbro",
    when: "Apr 2025",
    title: "LeetBro",
    description: "- voice assisted leetcode partner that gives you hints based on how far along you are on a leetcode problem.",
    tags: ["Gemini AI", "Webspeech API", "Javascript", "CSS"],
    accent: {
      dark: "#FFA116",
      light: "#D9820A",
    },
    image: LeetBro,
    link: "https://github.com/johntrinhvu/LeetBro",
  },
  {
    id: "neuroflow",
    when: "Jan 2025",
    title: "NeuroFlow",
    description: "- utilizes novel, scalable means of gathering biological data and correlates that to a quantitative measure of stress, derived from heart rate variation (HRV).",
    tags: ["React.js", "Python", "FastAPI", "PostgreSQL", "NeuroKit2"],
    accent: {
      dark: "#BF77F6",
      light: "#8E44AD",
    },
    image: NeuroFlowImg,
    link: "https://github.com/johntrinhvu/NeuroFlow",
  },
  {
    id: "oct-noise-cancellation",
    when: "Oct 2024 - Jun 2025",
    title: "OCT Noise Cancellation",
    description: "- input a folder/zip of OCT images -> output a folder/zip of cleaned, noiseless images of the eye using machine learning algorithms.",
    tags: ["Python", "TensorFlow", "OpenCV", "NumPy", "Keras"],
    accent: {
      dark: "#A2BDDB",
      light: "#3A5A80",
    },
    image: OCTImg,
    link: "https://github.com/johntrinhvu/OCT-Noise-Cancellation",
  },
];

// Placeholder live data — wire these up to real Spotify / MyAnimeList APIs when ready.
export const nowPlaying = {
  title: "Track title",
  artist: "Artist name",
};

export const topTrack = {
  title: "Most played tracks",
  artist: "Artist name",
};

export const watching = [
  { title: "Anime one", episodeLabel: "Ep 8 / 24" },
  { title: "Anime two", episodeLabel: "Ep 3 / 12" },
  { title: "Anime three", episodeLabel: "Ep 14 / ?" },
  { title: "Anime four", episodeLabel: "Completed" },
];

export const photos = [
  { src: "/images/profilePicture.jpg", alt: "John" },
];

export const emails = {
  work: "johntrinhvu@meta.com",
  personal: "johntrinhvu@yahoo.com",
};

export const socials = {
  linkedin: "https://linkedin.com/in/johntrinhvu/",
  github: "https://github.com/johntrinhvu/",
  leetcode: "https://leetcode.com/u/sahori/",
  instagram: "https://instagram.com/johntrinhvu/",
  x: "https://x.com/lolsahori/",
};
