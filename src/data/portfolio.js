/**
 * Single source of truth for all personal content on the site.
 *
 * Edit this file to update the portfolio. Components only render what is here.
 * Icons are referenced by key (e.g. "github") and resolved inside components,
 * so this file stays plain data with no React imports.
 *
 * Sources: public/Rajalingam-Muthiah-AI-Engineer-Resume.pdf and each project's
 * GitHub README/code. Do not add features, metrics or links that are not in
 * those sources.
 */

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------
export const profile = {
  name: "Rajalingam Muthiah",
  title: "AI/ML Engineer",
  typedTitle:
    "AI/ML Engineer | LLM Evaluation | RAG & Agentic AI | Computer Vision",
  heroBadges: [
    "Artificial Intelligence",
    "Machine Learning",
    "LLMs & RAG",
    "LLM Evaluation",
    "Computer Vision",
    "Agentic AI",
  ],
  location: "Mumbai, India",
  experienceLabel: "5+ Years",
  email: "rajalingammuthiah2011@gmail.com",
  photo: { src: "/Passport_Photograph.jpeg", alt: "Rajalingam Muthiah" },
  resume: {
    file: "Rajalingam-Muthiah-AI-Engineer-Resume.pdf",
    path: "/Rajalingam-Muthiah-AI-Engineer-Resume.pdf",
  },
};

// key → icon is resolved in components; `showIn` controls where each link appears.
export const socialLinks = [
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/RajalingamMuthiah",
    showIn: ["hero", "contact", "footer"],
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rajalingam-muthiah/",
    showIn: ["hero", "contact", "footer"],
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://instagram.com/hilarious_king__/",
    showIn: ["footer"],
  },
];

export const site = {
  url: "https://rajalingam-fullstack-arra.vercel.app",
  footerBrand: "Rajalingam Muthiah",
  footerBlurb:
    "AI/ML Engineer building RAG, LLM evaluation, OCR and computer vision systems.",
};

// ---------------------------------------------------------------------------
// About page
// ---------------------------------------------------------------------------
export const about = {
  photo: {
    src: "/gallery/Bike-Ride.jpeg",
    alt: "Rajalingam Muthiah smiling on a red-and-black scooter",
  },
  heading: "Hi, I'm Rajalingam Muthiah",
  paragraphs: [
    "I'm a Senior Associate AI/ML Engineer with 5 years of experience building RAG, LLM evaluation, OCR and computer vision systems. I specialize in measuring and improving the reliability of AI answers, including hallucination and factual-grounding evaluation.",
    "I'm currently at TransformHub, building enterprise AI agent solutions on the AgentIQX platform, and pursuing an Executive PG Diploma in AI/ML at IIT Bombay.",
  ],
  // icon keys: code | zap | graduation
  stats: [
    { value: "5+", label: "Years Experience", icon: "code" },
    { value: "15+", label: "Projects", icon: "zap" },
    { value: "IIT Bombay", label: "Exec PG AI/ML", icon: "graduation" },
  ],
  interests: [
    "LLM Evaluation",
    "RAG",
    "Agentic AI",
    "Computer Vision",
    "Document Intelligence",
    "OCR",
    "NLP",
    "AI for Health Tech",
  ],
};

// ---------------------------------------------------------------------------
// Experience (newest first) — shown on Home and Resume
// ---------------------------------------------------------------------------
export const experience = [
  {
    title: "Senior Associate, AI/ML Engineer",
    company: "TransformHub",
    location: "Mumbai (Hybrid)",
    period: "Aug 2026 – Present",
    bullets: [
      "Built an end-to-end claims-processing POC for the AgentIQX enterprise AI agent platform, with an OCR/document-parsing pipeline (Tesseract, PaddleOCR, Docling) that extracts structured data from claim documents, and fine-tuned Qwen models.",
      "Built a Loss of Baggage Document Intelligence POC that identifies identity-document types in PDFs and supports automated validation of extracted data.",
      "Designed a privacy-conscious pipeline for PII documents, with anonymization and controlled LLM integration before data reaches external services.",
    ],
    color: "from-emerald-500 to-cyan-500",
  },
  {
    title: "AI Engineer (CV & Document Intelligence)",
    company: "Tata Consultancy Services",
    location: "Mumbai",
    period: "Jun 2023 – Jul 2026",
    bullets: [
      "LLM Evaluation & RAG: Architected a RAG-based document QA system using LangChain; designed hallucination-evaluation pipelines to measure factual grounding of outputs against source documents.",
      "Vision Pipelines: Engineered a YOLOv8 object-detection system for automated document grading; managed the full ML lifecycle from Roboflow annotation to hyperparameter tuning.",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Software Developer – Data Automation Engineer",
    company: "Tata Consultancy Services",
    location: "Mumbai",
    period: "Jun 2021 – May 2023",
    bullets: [
      "Performed quantitative and qualitative data analysis to support senior consultants in developing strategic recommendations for clients.",
      "Contributed to detailed project plans and managed key workstreams for consulting engagements across multiple sectors.",
    ],
    color: "from-purple-500 to-pink-500",
  },
];

// ---------------------------------------------------------------------------
// Education — shown on Home and Resume, in this order
// ---------------------------------------------------------------------------
export const education = [
  {
    degree: "Executive PG Diploma in AI/ML",
    school: "IIT Bombay",
    period: "May 2026 – Present",
    status: "Pursuing",
    color: "from-green-500 to-emerald-500",
  },
  {
    degree: "M.Sc. Data Science",
    school: "SIES College",
    university: "Mumbai University",
    period: "Aug 2022 – May 2024",
    color: "from-blue-500 to-cyan-500",
  },
  {
    degree: "B.Sc. Computer Science",
    school: "SIWS College",
    university: "Mumbai University",
    period: "Aug 2018 – May 2021",
    color: "from-purple-500 to-pink-500",
  },
];

// ---------------------------------------------------------------------------
// Projects
//
// Fields:
//   featured     larger card on Home + top of Projects page (in array order)
//   categories   any of "ai" | "cv" | "fullstack" (drives the filters)
//   links        only real URLs; omit a link rather than using "#"
//   status       "In progress" shows a badge
//   availability e.g. "Demo on request"
//   results      measured results quoted from the repo README
//   note         short disclaimer shown on the card
// ---------------------------------------------------------------------------
export const projectCategories = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI/ML" },
  { id: "cv", label: "Computer Vision" },
  { id: "fullstack", label: "Full-Stack" },
];

const GH = "https://github.com/RajalingamMuthiah";

export const projects = [
  // ----- Featured -----
  {
    id: "medquery",
    title: "MedQuery",
    subtitle: "Grounded health Q&A with RAG and hallucination evaluation",
    summary:
      "RAG health Q&A over 10 public-domain CDC, NIH, VA/DoD and HHS documents on diabetes, hypertension and tuberculosis. Answers cite their sources and say \"not covered\" when the documents don't contain the answer.",
    details: [
      "Hybrid retrieval: dense bge-small embeddings + BM25, fused with reciprocal rank fusion (RRF).",
      "Cited answers generated on Groq (gpt-oss-20b), with honest \"not covered\" refusals.",
      "Optional claim-by-claim verification and a hallucination-evaluation layer; every design choice measured on a held-out dev set.",
    ],
    results: {
      caption: "Held-out test set (23 questions) vs. a simple baseline",
      items: [
        { label: "Answer correctness", value: "0.556 → 0.833" },
        { label: "False refusals", value: "0.389 → 0.111" },
        { label: "Unanswerable questions declined", value: "100%" },
      ],
    },
    note: "Not medical advice. MedQuery answers only from its source documents.",
    tags: ["Python", "FastAPI", "React", "RAG", "LLM Evaluation", "Groq"],
    categories: ["ai", "fullstack"],
    links: { github: `${GH}/MedQuery` },
    featured: true,
  },
  {
    id: "codey",
    title: "Codey",
    subtitle: "Secure remote code-execution platform",
    summary:
      "Run code remotely and safely: an Angular frontend and FastAPI backend, with each execution sandboxed in Docker.",
    tags: ["Angular", "FastAPI", "Python", "Docker"],
    categories: ["fullstack"],
    links: {
      github: `${GH}/codey`,
      video: `${GH}/codey/blob/main/static/submission_vid.mp4`,
    },
    featured: true,
  },
  {
    id: "barometers",
    title: "Barometers",
    subtitle: "Outlet counting and inventory platform",
    summary:
      "Outlet counting and inventory platform with JWT authentication, outlet-scoped inventory, voice transcription (Groq speech-to-text) and text-to-speech confirmations. Deployable on Render or Railway.",
    tags: ["FastAPI", "MongoDB Atlas", "JWT", "Groq", "Python"],
    categories: ["fullstack", "ai"],
    links: { github: `${GH}/Barometers` },
    featured: true,
  },

  // ----- Other projects -----
  {
    id: "smart-todo",
    title: "Smart To-Do – Intelligent Task Planner",
    summary:
      "Full-stack AI product with automated workout generation and real-time collaboration, deployed as a mobile-first Progressive Web App.",
    image: "/Smart-To-Do.png",
    tags: ["PWA", "Python", "MongoDB", "AI"],
    categories: ["fullstack", "ai"],
    date: "Feb – Mar 2026",
    links: { demo: "https://smart-todo-list-fb8d.onrender.com/login.html" },
  },
  {
    id: "hand-tracking",
    title: "Real-Time Hand Tracking & AR Overlay",
    summary:
      "21-point hand-landmark detection running at live webcam frame rates for virtual AR watch try-ons.",
    image: "/Virtual-Watch.png",
    tags: ["Python", "OpenCV", "MediaPipe"],
    categories: ["cv", "ai"],
    date: "Jun – Jul 2025",
    links: {
      github: `${GH}/Real-Time-Hand-Tracking-Virtual-Watch-Overlay`,
      demo: "https://luxe-time-e-commerce.vercel.app/",
    },
  },
  {
    id: "cvif",
    title: "Cognitive Visual Intelligence Framework",
    summary:
      "AI-based computer vision system that identifies handwritten response indicators on evaluation sheets.",
    tags: ["Python", "Roboflow", "Computer Vision"],
    categories: ["cv", "ai"],
    date: "Feb 2025 – Present",
    status: "In progress",
    collaborator: "Arjun",
    links: {},
  },
  {
    id: "workflow-builder",
    title: "Generative AI Workflow Builder",
    summary:
      "Visual builder for agentic pipelines: connect LLM, prompt and logic nodes on a canvas, with a backend that validates each pipeline is a directed acyclic graph.",
    tags: ["React", "React Flow", "FastAPI", "JavaScript"],
    categories: ["ai", "fullstack"],
    links: { github: `${GH}/Generative-AI-Workflow-Builder-Vector` },
  },
  {
    id: "sci-hunt",
    title: "Scientis-Hunt",
    summary:
      "Exam and assessment platform with HttpOnly-cookie JWT auth, CSRF protection, optional TOTP MFA and four roles (super admin, school admin, teacher, student).",
    tags: ["Next.js 14", "Spring Boot 3.4", "MongoDB", "JWT", "TOTP MFA"],
    categories: ["fullstack"],
    links: { github: `${GH}/sci-hunt` },
  },
  {
    id: "eems",
    title: "EEMS – Exam Examiner Management System",
    summary:
      "Multi-role dashboards (Admin, Principal, VP, HOD, Teacher) for exam scheduling and examiner assignment.",
    image: "/Exam.jpg",
    tags: ["PHP", "MySQL", "JavaScript"],
    categories: ["fullstack"],
    availability: "Demo on request",
    links: { github: `${GH}/external-examiner-management-system-demo` },
  },
  {
    id: "ayusangam",
    title: "AyuSangam",
    summary:
      "Fitness and health tracker with HRV, resting-heart-rate and sleep analytics from Whoop and Garmin wearables.",
    image: "/Ayusangam.jpg",
    tags: ["FastAPI", "PostgreSQL", "Wearables"],
    categories: ["fullstack"],
    availability: "Demo on request",
    links: { github: `${GH}/AyuSangam---fitness-health-tracker-demo` },
  },
  {
    id: "animal-care",
    title: "Digital Animal Care & Emergency Response",
    summary:
      "Dog-care and emergency platform connecting pet owners, vets, rescue teams and the public, with care recommendations, remote vet consultation scheduling and WhatsApp emergency alerts.",
    image: "/Digital-Animal-care.png",
    tags: ["React", "TypeScript"],
    categories: ["fullstack"],
    date: "Oct – Dec 2024",
    collaborator: "Arjun",
    links: {
      // TODO(owner): animalrescue-emergency-response-platform is a private repo;
      // add `github` once it is public (or confirm the public duplicate).
      demo: "https://animalrescue-emergency-response-pla.vercel.app",
    },
  },
  {
    id: "apti",
    title: "Apti – SMB Growth Tracker",
    summary:
      "Multi-channel attribution dashboard showing SMBs which channels (ads, WhatsApp, referrals, organic) bring their customers, with campaign management and KPI charts.",
    tags: ["HTML", "Tailwind CSS", "Chart.js"],
    categories: ["fullstack"],
    links: { github: `${GH}/apti-SMBs-growth-tracker` },
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection",
    summary:
      "Fraud classification with a K-Nearest Neighbors model, feature scaling and cross-validation, in a Jupyter notebook.",
    tags: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
    categories: ["ai"],
    links: { github: `${GH}/Fraud-Detection` },
  },
];

// ---------------------------------------------------------------------------
// Skills (grouped as on the resume)
// ---------------------------------------------------------------------------
export const skillGroups = [
  {
    title: "AI/ML & LLMs",
    icon: "brain",
    items: [
      "RAG pipelines",
      "Hallucination evaluation (factual grounding)",
      "Prompt engineering (CoT, few-shot)",
      "LangChain",
      "OpenAI / Anthropic APIs",
      "Agentic AI",
      "Fine-tuning (Qwen)",
    ],
  },
  {
    title: "Computer Vision & OCR",
    icon: "eye",
    items: [
      "YOLOv8",
      "MediaPipe",
      "OpenCV",
      "Roboflow",
      "Tesseract",
      "PaddleOCR",
      "Docling",
      "Image processing",
    ],
  },
  {
    title: "Development",
    icon: "code",
    items: [
      "Python (Flask, FastAPI)",
      "React.js",
      "Angular",
      "Java (Spring Boot)",
      "REST APIs",
      "PWA",
      "Tailwind CSS",
    ],
  },
  {
    title: "Data & Cloud",
    icon: "database",
    items: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Salesforce Data Cloud",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    items: ["Git", "GitHub", "Docker", "Postman"],
  },
];

// ---------------------------------------------------------------------------
// Certificates (shown in this order). Omit `image` to show the icon card.
// ---------------------------------------------------------------------------
export const certificates = [
  {
    id: "claude-architect",
    title: "Claude Certified Architect – Foundations",
    issuer: "Anthropic",
    date: "Apr 2026",
    credentialId: "39hnit8bdwjh",
  },
  {
    id: "salesforce-data-cloud",
    title: "Salesforce Data Cloud Consultant",
    issuer: "Salesforce",
    date: "2024",
    description:
      "Professional certification validating expertise in Salesforce Data Cloud implementation and management.",
    credentialUrl: "/DataCloudConsultant_20240803_Cert4732972.pdf",
  },
  {
    id: "jpmorgan",
    title: "JPMorgan Chase Software Engineering",
    issuer: "Forage",
    image: "/TheForage-JPMorgan-Certificate_page-0001.jpg",
    description:
      "Software engineering job simulation by JPMorgan Chase on Forage.",
    credentialUrl: "/TheForage-JPMorgan-Certificate.pdf",
  },
  {
    id: "aws",
    title: "AWS Solutions Architecture",
    issuer: "Forage",
    date: "Jan 2026",
    credentialId: "zj44YKeXAYcrB9KAx",
    image: "/AWS_completion_certificate_page-0001.jpg",
    description:
      "AWS Solutions Architecture job simulation on Forage, covering cloud architecture and deployment.",
    credentialUrl: "/AWS_completion_certificate.pdf",
  },
  {
    id: "wells-fargo",
    title: "Wells Fargo Software Engineering",
    issuer: "Forage",
    image: "/Wells_Fargo_completion_certificate_page-0001.jpg",
    description: "Software engineering job simulation by Wells Fargo on Forage.",
    credentialUrl: "/Wells_Fargo_completion_certificate.pdf",
  },
  {
    id: "prompt-engineering",
    title: "AI Prompt Engineering Masterclass",
    issuer: "Microsoft × Reliance Digital",
    date: "September 2025",
    description:
      "Masterclass on prompt engineering, AI applications, and modern language models.",
  },
  {
    id: "google-cloud",
    title: "Google Cloud Study Jams",
    issuer: "Google Cloud",
    date: "2023–2024",
    description:
      "Google Cloud Study Jams program with hands-on labs in cloud computing.",
  },
  {
    id: "power-bi",
    title: "Power BI Bootcamp Certification",
    issuer: "O'Reilly",
    date: "2023",
    description:
      "Power BI training covering data visualization, dashboards, and business intelligence.",
  },
  {
    id: "data-studio",
    title: "Master Google Data Studio for Data",
    issuer: "Google (Looker Studio)",
    date: "2023",
    description:
      "Data visualization course using Google Data Studio (Looker Studio).",
  },
];

// ---------------------------------------------------------------------------
// Gallery
// ---------------------------------------------------------------------------
export const gallery = [
  { id: 1, url: "/gallery/Bike-Ride.jpeg", title: "Bike Ride Adventure", category: "Personal" },
  { id: 2, url: "/gallery/Cool.jpeg", title: "Cool Vibes", category: "Personal" },
  { id: 3, url: "/gallery/Gym.jpeg", title: "Fitness Journey", category: "Lifestyle" },
  { id: 4, url: "/gallery/Happiness.jpeg", title: "Happy Moments", category: "Personal" },
  { id: 5, url: "/gallery/Jai-Hanuman.jpeg", title: "Spiritual Moments", category: "Personal" },
  { id: 6, url: "/gallery/Traditional-Look.jpeg", title: "Traditional Look", category: "Personal" },
];
