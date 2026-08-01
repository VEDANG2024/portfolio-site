// Real content, pulled from Vedang's actual resume (including hyperlinks
// embedded in the PDF for LinkedIn, GitHub, and each project repo).

export const profile = {
  name: "Vedang Trivedi",
  title: "M.Tech ICT (Software Systems)",
  tagline:
    "Software systems student interested in distributed systems, databases, and applied ML — currently interning at Kraft Heinz.",
  location: "Ahmedabad, Gujarat, India",
  email: "trivedivedang.02@gmail.com",
  linkedin: "https://www.linkedin.com/in/vedang-trivedi-0389a91b9",
  github: "https://www.github.com/VEDANG2024",
  resumeFile: "/resume.pdf",
};

export const education = [
  {
    year: "2024–Present",
    degree: "M.Tech ICT (Software Systems)",
    institute: "Dhirubhai Ambani University, Gandhinagar",
    score: "7.06/10",
  },
  {
    year: "2020–2024",
    degree: "B.E. in Computer Engineering",
    institute: "Gujarat Technological University, Ahmedabad",
    score: "7.77/10",
  },
  {
    year: "2020",
    degree: "Class XII (CBSE)",
    institute: "Maharaja Agrasen Vidyalaya, Ahmedabad",
    score: "78%",
  },
  {
    year: "2018",
    degree: "Class X (CBSE)",
    institute: "Hillwoods School, Gandhinagar",
    score: "84.17%",
  },
];

export const experience = [
  {
    role: "KHMS Intern",
    company: "Kraft Heinz",
    location: "Ahmedabad, Gujarat",
    period: "Feb 2026 – Present",
    bullets: [
      "Worked as a techno-management intern, automating tasks such as health checks for different towers and pillars across the company.",
      "Designed and developed interactive dashboards using Power BI, and automated manual tasks such as Excel data cleaning and visualization.",
      "Communicated and collaborated with tower leads and other stakeholders to draft SOPs and an operational excellence framework for each tower.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Karma Technolabs",
    location: "Ahmedabad, Gujarat",
    period: "Jan 2024 – Apr 2024",
    bullets: [
      "Worked on a live project building a CRM platform.",
      "Enhanced user-facing functionality such as search, filter, and upload — learning the development and deployment lifecycle of a live product.",
    ],
  },
  {
    role: "Coordinator",
    company: "JS Placements and Fiscal Services",
    location: "Ahmedabad, Gujarat",
    period: "Feb 2022 – Feb 2023",
    bullets: [
      "Conducted thorough research and compiled necessary documentation, meeting all research and documentation requirements.",
      "Fostered effective communication between team members and created a standard pipeline.",
      "Coordinated with clients and candidates to make the process seamless and convenient.",
    ],
  },
];

export const projects = [
  {
    name: "Raft Census",
    tag: "Distributed Systems",
    description:
      'A scalable, decentralized, heterogeneous file storage system (DBFS) where multiple servers inter-operate to form a dynamic "overlay" fabric.',
    highlights: [
      "Each file is partitioned into chunks stored across different remote machines, enabling parallel execution of applications.",
      "Supports create, delete, modify, read, and write operations across many concurrent clients.",
    ],
    link: "https://www.github.com/VEDANG2024/ds-project",
  },
  {
    name: "CardEst",
    tag: "Distributed Databases",
    description:
      "Estimates query cardinality for a query optimizer using a model trained on the TPC-H dataset and workloads, to produce better execution plans for query predicates.",
    highlights: [
      "Uses a meta-ensemble model (primarily XGBoost) with a hybrid approach.",
      "Improved Pearson correlation and reduced median error; learned-model-driven plan changes cut latency and resource usage in 70% of cases.",
    ],
    link: "https://github.com/VEDANG2024/ddb-project",
  },
  {
    name: "UML2PlantUML",
    tag: "LLMs, ML, Software Engineering",
    description:
      "A small-scale implementation of a pipeline described in a published research paper, generating PlantUML code from class diagram images.",
    highlights: [
      "Fine-tuned and compared vit-bart, BLIP, FLAN-T5, vit-gpt2, Pix2Struct, CLIP, and MiniCPM.",
      "Preprocessed and trained on a dataset of activity and sequence diagram images to generate PlantUML code from an input class diagram image.",
    ],
    link: "https://github.com/VEDANG2024/UML2PlantUML",
    paper: "https://arxiv.org/abs/2503.12293",
  },
  {
    name: "Stock Market Price Prediction",
    tag: "Machine Learning, Finance",
    description:
      "A hybrid model combining numerical and textual analysis for advanced stock price forecasting.",
    highlights: [
      "Covered data collection, storage, and visualization.",
      "Textual analysis using NLTK and spaCy alongside several machine learning models.",
    ],
    link: "https://github.com/VEDANG2024/STOCK-MARKET-ML/tree/main/Stock-Market-Prediction-main",
  },
];

export const skillGroups = [
  {
    category: "Programming Languages & Libraries",
    items: ["C", "C++", "Python", "SQL", "JavaScript"],
  },
  {
    category: "Tools & Technologies",
    items: ["GitHub", "Git", "Figma", "LangChain", "Raft"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    category: "Coursework",
    items: [
      "Data Structures",
      "Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
];

export const softSkills = ["Problem Solving", "Communication", "Leadership", "Team Collaboration"];

export const positions = [
  {
    role: "Teaching Assistant",
    org: "Software Engineering, Object Oriented Programming",
    period: "August 2024 – Present",
    bullets: [
      "Took labs, designed and evaluated assignments and exams, cleared doubts, and mentored students.",
    ],
  },
  {
    role: "Cadet",
    org: "NO.2 Gujarat Air Squadron NCC Unit",
    period: "2021 – 2022",
    bullets: ["Held and led various campaigns as a cadet of the unit."],
  },
];

export const achievements = [
  "Qualified national-level exams including GATE CS 2024 and NTSE 2018.",
  "Won Bronze medal for a zonal rank in SOF Maths Olympiad 2018.",
  "Won an inter-college chess tournament.",
];
