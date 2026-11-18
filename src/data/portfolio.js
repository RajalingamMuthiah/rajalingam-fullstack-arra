/**
 * Single source of truth for all personal content on the site.
 *
 * Edit this file to update the portfolio. Components only render what is here.
 * Icons are referenced by key (e.g. "github") and resolved inside components,
 * so this file stays plain data with no React imports.
 */

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------
export const profile = {
  name: "Rajalingam Muthiah",
  typedTitle: "Fullstack Developer | AI Engineer | ML Developer",
  heroBadges: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Full Stack Development",
  ],
  location: "Mumbai, MH",
  experienceLabel: "5+ Years",
  email: "rajalingammuthiah2011@gmail.com",
  phone: { display: "+91 9920580660", href: "tel:+919920580660" },
  photo: { src: "/Passport_Photograph.jpeg", alt: "Your Name" },
  resume: {
    file: "Rajalingam-Muthiah-Resume_Updtaed.pdf",
    path: "/Rajalingam-Muthiah-Resume_Updtaed.pdf",
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
    href: "https://linkedin.com/in/rajalingam-muthiah/",
    showIn: ["hero", "contact", "footer"],
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://instagram.com/hilarious_king__/",
    showIn: ["hero", "contact", "footer"],
  },
];

export const site = {
  footerBrand: "AI/ML Portfolio",
  footerBlurb:
    "Building the future with AI and Machine Learning. Passionate about creating innovative solutions.",
  otherPortfolio: {
    label: "Arjun – Fullstack Developer (Java)",
    href: "https://arjun-portfolio-wheat.vercel.app/",
  },
};

// ---------------------------------------------------------------------------
// About page
// ---------------------------------------------------------------------------
export const about = {
  photo: { src: "/gallery/Bike-Ride.jpeg", alt: "Your professional photo" },
  heading: "Hi, I'm Rajalingam Muthiah",
  paragraphs: [
    "I'm a passionate AI/ML Engineer and Full Stack Developer with over 5 years of experience building intelligent systems and scalable web applications. My journey in tech started with a curiosity about how machines can learn and has evolved into a career dedicated to creating innovative solutions.",
    "I specialize in developing end-to-end AI solutions, from data collection and model training to deployment and monitoring. My expertise spans across computer vision, natural language processing, and deep learning, combined with strong full-stack development skills.",
    "When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or mentoring aspiring developers. I believe in continuous learning and sharing knowledge with the community.",
  ],
  // icon keys: code | zap | heart | coffee | target
  stats: [
    { label: "Years Experience", value: "5+", icon: "code" },
    { label: "Projects Completed", value: "10+", icon: "zap" },
    { label: "Happy Clients", value: "30+", icon: "heart" },
    { label: "Cups of Coffee", value: "1000+", icon: "coffee" },
  ],
  values: [
    {
      icon: "target",
      title: "Innovation",
      description:
        "Constantly exploring new technologies and pushing the boundaries of what's possible in AI and ML.",
    },
    {
      icon: "heart",
      title: "Quality",
      description:
        "Committed to delivering high-quality, maintainable, and scalable solutions that exceed expectations.",
    },
    {
      icon: "zap",
      title: "Performance",
      description:
        "Optimizing every aspect to ensure fast, efficient, and reliable applications.",
    },
  ],
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Web Development",
    "Open Source",
    "Mentoring",
  ],
};

// ---------------------------------------------------------------------------
// Experience (newest first)
// `highlights` render on Home; `achievements` render on the Resume page.
// ---------------------------------------------------------------------------
export const experience = [
  {
    title: "Full Stack Developer",
    company: "Tata Consultancy Services",
    location: "Mumbai, India",
    period: "June 2023 - Present",
    description:
      "Engineered and deployed responsive UI components for Salesforce-powered enterprise applications, implementing data quality frameworks and automated validation scripts.",
    highlights: [
      "Achieved 99% data accuracy through custom Python scripts",
      "Improved user engagement with responsive UI components",
      "Collaborated with cross-functional teams for seamless integration",
    ],
    achievements: [
      "Engineered responsive UI components using Lightning App Builder, Experience Builder, and SLDS, improving user engagement metrics",
      "Implemented data quality framework achieving 99% data accuracy through custom Python scripts and Excel VBA queries",
      "Developed automated data validation scripts using Python (Pandas, NumPy) to support critical business operations",
      "Collaborated with cross-functional teams to align UI/UX design with data architecture requirements",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Workflow Analyst",
    company: "Tata Consultancy Services",
    location: "Mumbai, India",
    period: "June 2021 - May 2023",
    description:
      "Designed visual assets for digital platforms and streamlined workflow processes to improve team efficiency.",
    highlights: [
      "Created visual assets using Adobe Creative Suite",
      "Improved team efficiency through process optimization",
      "Translated requirements into actionable specifications",
    ],
    achievements: [
      "Designed and delivered visual assets for digital platforms using Adobe Creative Suite (Illustrator, Photoshop)",
      "Streamlined workflow processes and created documentation to improve team efficiency and project delivery timelines",
      "Partnered with business analysts and technical teams to translate requirements into actionable design specifications",
    ],
    color: "from-purple-500 to-pink-500",
  },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
export const education = [
  {
    degree: "Master of Science in Data Science",
    school: "SIES College of Arts, Science & Commerce",
    university: "Mumbai University",
    location: "Mumbai, India",
    period: "Aug 2022 - May 2024",
    description:
      "Advanced study in data science with focus on practical applications",
    coursework: [
      "Machine Learning",
      "Data Visualization",
      "Big Data Analytics",
      "Statistical Modeling",
    ],
    thesis:
      "Developed predictive models using Python, TensorFlow, and Scikit-learn for real-world forecasting applications",
    color: "from-blue-500 to-cyan-500",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "SIWS College of Arts, Science & Commerce",
    university: "Mumbai University",
    location: "Mumbai, India",
    period: "Aug 2018 - May 2021",
    description: "Comprehensive foundation in computer science fundamentals",
    coursework: [
      "Algorithms & Data Structures",
      "Database Management Systems",
      "Computer Networks",
      "Web Development",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    degree: "ePGD in Computer Science Engineering",
    school: "Indian Institute of Technology (IIT)",
    location: "Online",
    period: "May 2026 - Ongoing",
    description: "Advanced postgraduate diploma in Computer Science Engineering",
    coursework: [
      "Advanced Computer Science",
      "Modern Computing Practices",
      "Emerging Technologies",
    ],
    color: "from-green-500 to-emerald-500",
  },
];

// LEGACY: the Resume page currently shows this separate (incorrect) list.
// Replaced by `education` in step 3 of the update.
export const legacyResumeEducation = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    period: "2016 - 2018",
    gpa: "3.9/4.0",
    focus: "Artificial Intelligence & Machine Learning",
  },
  {
    degree: "Bachelor of Technology in Computer Engineering",
    school: "MIT",
    period: "2012 - 2016",
    gpa: "3.8/4.0",
    focus: "Software Engineering",
  },
];

// ---------------------------------------------------------------------------
// Projects
// `featured` projects appear on Home (first three). `inProgress` shows the
// "Work in Progress" dialog instead of opening the demo link.
// ---------------------------------------------------------------------------
export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI/ML" },
  { id: "web", label: "Web Development" },
];

export const projects = [
  {
    id: 1,
    title: "Smart To-Do – Intelligent Task Planning System",
    description:
      "Java-based full-stack productivity platform with priority-based task management, AI-generated workout plans, and real-time collaboration.",
    fullDescription:
      "A comprehensive full-stack productivity platform built with Java and Spring Boot. Features intelligent task management with priority-based organization, AI-generated workout plans, real-time collaboration capabilities, and MongoDB for scalable data storage. Deployed as a Progressive Web App (PWA) for seamless mobile-first accessibility and offline functionality.",
    image: "/Smart-To-Do.png",
    tags: ["Java", "Spring Boot", "MongoDB", "PWA", "REST APIs"],
    category: "web",
    github: "#",
    demo: "https://smart-todo-list-fb8d.onrender.com/login.html",
    featured: true,
    date: "Feb – Mar 2026",
  },
  {
    id: 2,
    title: "EEMS – Smart Educational Platform",
    description:
      "Full-stack app with role-based dashboards (Admin, Principal, Teacher, HOD), JWT auth, and exam scheduling.",
    fullDescription:
      "A comprehensive educational management system with full-stack architecture. Features role-based access control (Admin, Principal, Teacher, HOD), JWT authentication, and intelligent exam scheduling. Built with Spring Boot backend and modern frontend technologies.",
    image: "/Exam.jpg",
    tags: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    category: "web",
    github: "https://github.com/yourusername/eems",
    demo: "#",
    featured: true,
    date: "Nov – Jan 2025",
    inProgress: true,
  },
  {
    id: 3,
    title: "Cognitive Visual Intelligence Framework",
    description:
      "AI-based computer vision system to identify handwritten response indicators in evaluation sheets.",
    fullDescription:
      "An intelligent computer vision system leveraging deep learning and ML techniques to analyze and identify handwritten response indicators in evaluation sheets. Built with Python and Roboflow for dataset management, achieving high accuracy in document analysis.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    tags: ["Python", "Applied ML", "AI", "Roboflow"],
    category: "ai",
    github: "https://github.com/yourusername/cognitive-vision",
    demo: "#",
    featured: true,
    date: "Feb – Apr 2025",
    inProgress: true,
  },
  {
    id: 4,
    title: "Real-Time Hand Tracking & Watch Overlay",
    description:
      "Real-time 21-point hand landmark tracking with virtual watch overlay using webcam.",
    fullDescription:
      "A sophisticated computer vision application featuring real-time hand tracking using 21-point landmark detection. Includes interactive virtual watch overlay that follows hand movements. Optimized for low-latency performance with live webcam input.",
    image: "/Virtual-Watch.png",
    tags: ["Python", "OpenCV", "MediaPipe"],
    category: "ai",
    github: "https://github.com/yourusername/hand-tracking",
    demo: "https://luxe-time-e-commerce.vercel.app/",
    featured: true,
    date: "Jun – Jul 2025",
  },
  {
    id: 5,
    title: "AyuSangam Fitness Tracker",
    description:
      "React.js dashboard integrating wearable health data with gym logs and real-time analytics.",
    fullDescription:
      "A comprehensive fitness tracking dashboard that aggregates data from wearable devices and gym activities. Features real-time health analytics, progress tracking, and personalized insights. Built with React.js and integrated REST APIs for seamless data synchronization.",
    image: "/Ayusangam.jpg",
    tags: ["React.js", "REST APIs", "Wearables", "Analytics"],
    category: "web",
    github: "https://github.com/yourusername/ayusangam",
    demo: "#",
    featured: true,
    date: "Aug – Oct 2025",
    inProgress: true,
  },
  {
    id: 6,
    title: "Digital Animal Care Platform",
    description:
      "Connected pet owners, vets & rescue teams via WhatsApp alerts and an AI chatbot for consultations.",
    fullDescription:
      "A comprehensive animal care platform connecting pet owners, veterinarians, and rescue teams. Features WhatsApp integration for instant alerts, AI-powered chatbot for consultations, and real-time emergency response coordination. Built with modern web technologies and cloud infrastructure.",
    image: "/Digital-Animal-care.png",
    tags: ["HTML", "CSS", "JavaScript", "Dialog flow", "WhatsApp API"],
    category: "web",
    github: "https://github.com/yourusername/animal-care",
    demo: "https://animalrescue-emergency-response-pla.vercel.app/",
    date: "Oct – Dec 2025",
  },
];

// ---------------------------------------------------------------------------
// Skills
// `techStack` renders on Home; `resumeSkills` renders on the Resume page.
// ---------------------------------------------------------------------------
export const techStack = [
  { name: "HTML5", icon: "🌐", color: "text-orange-500", category: "Frontend" },
  { name: "CSS3", icon: "🎨", color: "text-blue-500", category: "Frontend" },
  { name: "React.js", icon: "⚛️", color: "text-cyan-400", category: "Frontend" },
  { name: "Angular", icon: "🔴", color: "text-red-600", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🦋", color: "text-cyan-500", category: "Frontend" },
  { name: "Python", icon: "🐍", color: "text-yellow-400", category: "Backend" },
  { name: "Flask", icon: "🔨", color: "text-green-600", category: "Backend" },
  { name: "Java", icon: "☕", color: "text-orange-600", category: "Backend" },
  { name: "RESTful API", icon: "🔌", color: "text-blue-400", category: "Backend" },
  { name: "NumPy", icon: "📊", color: "text-blue-600", category: "AI/ML" },
  { name: "Pandas", icon: "🐼", color: "text-blue-500", category: "AI/ML" },
  { name: "Scikit-learn", icon: "🤖", color: "text-orange-400", category: "AI/ML" },
  { name: "OpenCV", icon: "👁️", color: "text-red-500", category: "AI/ML" },
  { name: "YOLO", icon: "🎯", color: "text-yellow-600", category: "AI/ML" },
  { name: "MediaPipe", icon: "🎬", color: "text-purple-600", category: "AI/ML" },
  { name: "Predictive Modeling", icon: "📈", color: "text-green-500", category: "AI/ML" },
  { name: "AWS", icon: "☁️", color: "text-orange-500", category: "Cloud" },
  { name: "Salesforce", icon: "☁️", color: "text-blue-700", category: "Cloud" },
  { name: "Lightning", icon: "⚡", color: "text-yellow-500", category: "Cloud" },
  { name: "MySQL", icon: "🐬", color: "text-blue-400", category: "Database" },
  { name: "MongoDB", icon: "🍃", color: "text-green-600", category: "Database" },
  { name: "Git", icon: "📦", color: "text-orange-600", category: "Tools" },
  { name: "GitHub", icon: "🐙", color: "text-gray-400", category: "Tools" },
  { name: "Postman", icon: "📮", color: "text-orange-400", category: "Tools" },
];

export const resumeSkills = {
  Languages: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Keras"],
  Web: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  Tools: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL"],
};

// ---------------------------------------------------------------------------
// Certificates (shown in this order)
// ---------------------------------------------------------------------------
export const certificateCategories = [
  { id: "all", label: "All Certificates" },
  { id: "tech", label: "Technical Certifications" },
];

export const certificates = [
  {
    id: 1,
    title: "Salesforce Certified Data Cloud Consultant",
    issuer: "Salesforce",
    date: "2024",
    category: "tech",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    description:
      "Professional certification validating expertise in Salesforce Data Cloud implementation and management.",
    credentialUrl: "/DataCloudConsultant_20240803_Cert4732972.pdf",
  },
  {
    id: 2,
    title: "JPMorgan Chase's Software Engineering",
    issuer: "JPMorgan Chase (Forage)",
    date: "2024",
    category: "tech",
    image: "/TheForage-JPMorgan-Certificate_page-0001.jpg",
    description:
      "Software engineering virtual experience program covering full-stack development and modern software practices.",
    credentialUrl: "/TheForage-JPMorgan-Certificate.pdf",
  },
  {
    id: 3,
    title: "AWS Solutions Architecture",
    issuer: "Amazon Web Services (Forage)",
    date: "2024",
    category: "tech",
    image: "/AWS_completion_certificate_page-0001.jpg",
    description:
      "AWS virtual internship program covering cloud architecture, deployment, and best practices.",
    credentialUrl: "/AWS_completion_certificate.pdf",
  },
  {
    id: 4,
    title: "Walmart Advanced Software Engineering",
    issuer: "Walmart Global Tech (Forage)",
    date: "2024",
    category: "tech",
    image: "/Wells_Fargo_completion_certificate_page-0001.jpg",
    description:
      "Advanced software engineering program covering enterprise-scale development and system design.",
    credentialUrl: "/Wells_Fargo_completion_certificate.pdf",
  },
  {
    id: 5,
    title: "AI Prompt Engineering Masterclass",
    issuer: "Microsoft × Reliance Digital",
    date: "September 2025",
    category: "tech",
    image:
      "https://images.unsplash.com/photo-1677442d019cecf3da5391b1ab9eb9345?w=800&h=600&fit=crop",
    description:
      "Advanced masterclass on prompt engineering, AI applications, and modern language models.",
    credentialUrl: "#",
  },
  {
    id: 6,
    title: "Google Cloud Study Jams",
    issuer: "Google Cloud",
    date: "2023–2024",
    category: "tech",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    description:
      "Google Cloud Study Jams program with hands-on labs and cloud computing certifications.",
    credentialUrl: "#",
  },
  {
    id: 7,
    title: "Power BI Bootcamp Certification",
    issuer: "O'Reilly",
    date: "2023",
    category: "tech",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description:
      "Comprehensive Power BI training covering data visualization, dashboards, and business intelligence.",
    credentialUrl: "#",
  },
  {
    id: 8,
    title: "Master Google Data Studio for Data",
    issuer: "Google (Looker Studio)",
    date: "2023",
    category: "tech",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
    description:
      "Data visualization masterclass using Google Data Studio (Looker Studio) for analytics.",
    credentialUrl: "#",
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
