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
// Contact links (WhatsApp + email). The number is only used inside links; it is
// never printed as text on the site.
// ---------------------------------------------------------------------------
const WHATSAPP_NUMBER = "919920580660";

export const whatsappLink = (text) =>
  text
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

export const mailtoLink = (subject) =>
  `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`;

export const messages = {
  mentoring: "Hi Raja, I'd like to book a Pathwise discovery call",
  project: "Hi Raja, I'd like to discuss an AI project",
};

/**
 * Where the main calls to action lead. Each target is one of
 * { to: "/route" } | { section: "home-section-id" } | { href: "https://…" }
 * and is rendered by components/common/SmartLink.jsx.
 */
export const destinations = {
  mentoring: { section: "pathwise" },
  services: { href: whatsappLink(messages.project) },
  resume: { to: "/resume" },
};

// ---------------------------------------------------------------------------
// Personal brand: announcement bar, hero, "I can help you" strip
// ---------------------------------------------------------------------------
export const brand = {
  announcement: {
    long: "Pathwise mentoring is open — book a free 20-min discovery call",
    short: "Free 20-min mentoring call",
  },
  greeting: "Hi, I'm Rajalingam Muthiah",
  // `accent` parts are highlighted: "brand" = cyan→purple, "pathwise" = teal
  headline: [
    { text: "I build " },
    { text: "reliable AI systems", accent: "brand" },
    { text: " — and help others build " },
    { text: "their AI careers", accent: "pathwise" },
    { text: "." },
  ],
  subline: [
    "Senior Associate AI/ML Engineer at TransformHub",
    "IIT Bombay (Exec PG AI/ML)",
    "Claude Certified Architect",
  ],
  // icon keys: graduation | briefcase | file
  audiences: [
    {
      id: "students",
      icon: "graduation",
      audience: "Students",
      text: "Confused about AI/IT careers? Get a roadmap, projects and interview prep.",
      action: "Get mentored",
      destination: "mentoring",
      pathwise: true,
    },
    {
      id: "companies",
      icon: "briefcase",
      audience: "Companies & founders",
      text: "Need a RAG chatbot, document AI or a computer-vision POC? Let's build it.",
      action: "Discuss a project",
      destination: "services",
    },
    {
      id: "recruiters",
      icon: "file",
      audience: "Recruiters",
      text: "5+ years in AI/ML · TCS → TransformHub. View my experience.",
      action: "View resume",
      destination: "resume",
    },
  ],
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
    "Outside my day job I mentor students through Pathwise, helping them choose a direction in AI/IT, build portfolio projects and prepare for interviews.",
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
// Mentorship — Pathwise (Home section #pathwise, footer link)
// ---------------------------------------------------------------------------
export const mentorship = {
  sectionTitle: "Mentorship – Pathwise",
  heading: "Pathwise — Find your direction. Build your future.",
  intro:
    "Graduated, but unsure what comes next? I help students and early-career engineers build a clear path into AI/ML, Data Science and Software Development.",
  flyer: {
    src: "/pathwise-flyer.webp",
    alt: "Pathwise career mentoring flyer by Rajalingam Muthiah",
    width: 1122,
    height: 1402,
  },
  // icon keys: compass | code | graduation
  services: [
    {
      icon: "compass",
      title: "Career Guidance",
      description:
        "Your personalised AI/IT roadmap, job search and interview preparation.",
    },
    {
      icon: "code",
      title: "Project Guidance",
      description:
        "Build meaningful portfolio projects in AI, computer vision and RAG.",
    },
    {
      icon: "graduation",
      title: "Course Guidance",
      description:
        "Choose the right courses and certifications without wasting time or money.",
    },
  ],
  credentials: [
    "5+ years in industry, including 3 years as an AI Engineer at TCS",
    "2 years of teaching experience",
    "Executive PG Diploma in AI/ML, IIT Bombay (pursuing)",
    "Claude Certified Architect, Anthropic",
    "Senior Associate AI/ML Engineer at TransformHub",
  ],
  location: "Mumbai | Online & Offline",
  bookCall: {
    label: "Book a free 20-minute discovery call",
    href: whatsappLink(messages.mentoring),
  },
  email: {
    label: "Email me",
    href: mailtoLink("Pathwise discovery call"),
  },
  footerLabel: "Pathwise mentoring",
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
//   badges       extra labels, e.g. ["IIT Bombay Capstone"]
//   availability e.g. "Demo on request" (shown instead of a missing repo link)
//   role / team  featured cards: "My role" text and team member names
//   results      measured results quoted from the repo README
//   note         short disclaimer shown on the card
//   image        16:9 image in public/ (see public/projects/CREDITS.md);
//   imageAlt     descriptive alt text. Without an image the card shows an icon panel.
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

  {
    id: "askimo",
    image: "/projects/askimo.webp",
    imageAlt:
      "Askimo (EvoLearn v2) upload screen for a lecture PDF, with the MediaPipe Hands vision engine marked ready",
    title: "Askimo – AI Tutor with Hand-Raise Detection",
    subtitle: "(EvoLearn v2)",
    summary:
      "AI tutor prototype that reads an uploaded lecture PDF aloud, sentence by sentence (PDF.js + browser text-to-speech), while MediaPipe Hands watches the webcam and pauses the lecture when a student raises their hand. Answering the student's question with a RAG pipeline is shown in the app as the planned next phase.",
    tags: ["React", "MediaPipe", "PDF.js", "Web Speech API", "Tailwind CSS"],
    categories: ["ai", "cv"],
    links: {
      demo: "https://askimo-demo.vercel.app",
      github: `${GH}/askimo_demo`,
    },
    featured: true,
  },
  {
    id: "adlc",
    title: "ADLC – Agentic Requirements & Planning Platform",
    subtitle: "IIT Bombay capstone (team project)",
    summary:
      "A FastAPI + LangGraph platform that clarifies software requirements and produces evidence-backed implementation plans for an existing application. A multi-step agent workflow runs requirements analysis, a clarification interrupt, plan preparation and independent review. The owner then approves, edits or rejects the exact plan version before it is published to Jira and a knowledge base. Exposes four FastMCP servers (requirements, knowledge, validation, publishing).",
    role: "I own the knowledge and integrations layer: GitHub/document extraction, Jira snapshot reader, chunking and embeddings, hybrid BM25 + pgvector retrieval with fusion and reranking, and the MCP servers and idempotent publication gate.",
    team: ["Mahesh Kumar", "Aryan Katiyar", "Sanghvi", "Rajalingam Muthiah"],
    badges: ["IIT Bombay Capstone"],
    status: "In progress",
    availability: "Private repo – IIT Bombay team project",
    note: "In active development: the repository is currently a demo-mode scaffold.",
    tags: ["Python", "FastAPI", "LangGraph", "FastMCP", "RAG", "pgvector", "HTMX"],
    categories: ["ai"],
    links: {},
    featured: true,
  },

  // ----- Other projects -----
  {
    id: "smart-todo",
    image: "/projects/smart-todo.webp",
    imageAlt:
      "Smart To-Do task list with morning and night-routine sections, status filters and bottom navigation",
    title: "Smart To-Do – Intelligent Task Planner",
    summary:
      "Full-stack AI product with automated workout generation and real-time collaboration, deployed as a mobile-first Progressive Web App.",
    tags: ["PWA", "Python", "MongoDB", "AI"],
    categories: ["fullstack", "ai"],
    date: "Feb – Mar 2026",
    links: { demo: "https://smart-todo-list-fb8d.onrender.com/login.html" },
  },
  {
    id: "hand-tracking",
    image: "/projects/hand-tracking.webp",
    imageAlt:
      "LUXEtime virtual watch try-on landing page showing a smartwatch render",
    title: "Real-Time Hand Tracking & AR Overlay",
    summary:
      "21-point hand-landmark detection running at live webcam frame rates for virtual AR watch try-ons.",
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
    id: "eems",
    image: "/Exam.jpg",
    imageAlt:
      "Wooden letter tiles spelling EXAM",
    title: "EEMS – Exam Examiner Management System",
    summary:
      "Multi-role dashboards (Admin, Principal, VP, HOD, Teacher) for exam scheduling and examiner assignment.",
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
    tags: ["FastAPI", "PostgreSQL", "Wearables"],
    categories: ["fullstack"],
    availability: "Demo on request",
    links: { github: `${GH}/AyuSangam---fitness-health-tracker-demo` },
  },
  {
    id: "animal-care",
    image: "/projects/animal-care.webp",
    imageAlt:
      "Animal Rescue landing page with a volunteer holding a puppy and a Report Animal Now button",
    title: "Digital Animal Care & Emergency Response",
    summary:
      "Dog-care and emergency platform connecting pet owners, vets, rescue teams and the public, with care recommendations, remote vet consultation scheduling and WhatsApp emergency alerts.",
    tags: ["React", "TypeScript"],
    categories: ["fullstack"],
    date: "Oct – Dec 2024",
    collaborator: "Arjun",
    links: {
      demo: "https://animalrescue-emergency-response-pla.vercel.app",
      github: `${GH}/animal-rescue-emergency-response-platform`,
    },
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

// ---------------------------------------------------------------------------
// Trust strip (text badges only — no company logos or trademarks)
// ---------------------------------------------------------------------------
export const trustBadges = [
  "5+ years industry",
  "TCS → TransformHub",
  "IIT Bombay",
  "Claude Certified Architect",
  `${projects.length} projects`,
];
