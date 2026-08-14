// ── ABOUT ME & RESUME (static page) ──
// This is the standalone ABOUT ME & RESUME page. The conversational "AI guide"
// lives in its own CHAT WITH AI section (see ChatAppAboutMe) — the two are
// intentionally separate so visitors can either read a quick summary or chat
// with the bot. Kept deliberately high-level: Professional Experience,
// Education, Skills, and Projects each have their own dedicated page
// for the specifics, so this page doesn't duplicate them.
// `resumeHref` points at the PDF in public/resume/ — the download button
// only renders when it's set.
export const aboutInfo = {
  intro: [
    'As a Software Engineering Associate at Accenture, I specialize in Salesforce CRM automation — building cloud-based solutions that streamline customer workflows without tying me to a single platform. I\'m also exploring how AI, like Claude Code, can speed up development and elevate the quality of what we ship.',
    'Outside of that role, I have a strong focus on creative development: I build websites and automation tools using AI, blending design and engineering to solve real problems — leaning heavily on AI assistance to bring ideas to life faster and with higher quality.',
    "Whether it's AI-driven interfaces or polished web apps, my focus stays the same: crafting projects that convert ideas into meaningful digital experiences that genuinely delight the people using them.",
  ],
  highlights: [
    'Software Engineering Associate at Accenture — Salesforce CRM automation, cloud-based & platform-agnostic',
    'Creative developer — websites & automation tools built with AI-assisted workflows (Claude Code)',
    'Focused on products that work, and genuinely delight the people using them',
    'AI-driven interfaces to polished web apps — turning ideas into meaningful digital experiences',
  ],
  resumeHref: '/resume/PAOLO_JANSEN_ENRERA_CV_JULY_2026.pdf',
}

// ── EDUCATION (redesigned credential card) ──
export const educationInfo = {
  school: 'University of San Carlos',
  degree: 'Bachelor of Science in Computer Engineering',
  duration: '2021 – Jul 2026',
  location: 'Cebu City, Philippines',
}

// ── CONTACT (redesigned) ──
export const contactInfo = {
  blurb:
    "I'm full-time at Accenture, so I'm not actively job-hunting — but I'm always happy to talk Salesforce, Agentforce, or the engineering behind this site. Email or LinkedIn are the fastest ways to reach me.",
  links: [
    { label: 'Email', href: 'mailto:paolo.enrera@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/shuu-pao' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/paolo-jansen-enrera/' },
    { label: 'Instagram', href: 'https://www.instagram.com/shuu_paoo/' },
  ],
}

// ── SKILLS ──
export const skillsInfo = {
  intro: 'A snapshot of the tools and stacks I reach for most. Grouped by where they show up in my work.',
  categories: [
    {
      title: 'Salesforce / Agentforce',
      items: ['Agentforce Configuration', 'Agentforce Actions', 'Flow Builder', 'Apex Basics', 'Lightning', 'Agent Instructions', 'Case Management'],
    },
    {
      title: 'Frontend Development',
      items: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Backend & Automation',
      items: ['Node.js', 'REST APIs', 'Database Design', 'Workflow Automation', 'SQL'],
    },
    {
      title: 'AI-Assisted Development',
      items: ['Claude Code', 'GitHub Copilot', 'AI Workflows', 'Prompt Engineering'],
    },
    {
      title: 'Embedded & Applied AI',
      items: ['C / C++ (Embedded)', 'Python', 'Computer Vision (YOLOv8)', 'PIC / XC8 Microcontrollers'],
    },
    {
      title: 'Tools & Practices',
      items: ['Git', 'Figma', 'Agile / Scrum'],
    },
  ],
}

// ── PROJECTS ──
// Collapsed cards show a thumbnail + name + tech tags; `blurb` is the full
// writeup revealed when the card is expanded via "Read more". `thumbnail`
// paths live under public/Projects/.
export const projectsInfo = {
  intro: 'Builds from my degree and free time — from embedded firmware to applied computer vision. (This portfolio is one of them.)',
  projects: [
    {
      name: 'PortfolioMon',
      blurb:
        'This very portfolio — a full turn-based RPG battle system built from scratch with React and Vite. You’re standing inside it right now.',
      tech: ['React', 'Vite', 'JavaScript', 'CSS'],
      thumbnail: '/Projects/PortfolioMon.png',
    },
    {
      name: 'My Portfolio (Premium)',
      blurb:
        'My other portfolio site — a cinematic, reference-matched personal site built with Next.js, TypeScript, and Framer Motion, pixel-matched to hand-picked design references.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      thumbnail: '/Projects/Premium Portfolio.jpg',
    },
    {
      name: 'PIC-Based Futsal Scoreboard',
      blurb:
        'A microcontroller scoreboard written in C (XC8) with real-time match timers and 7-segment display integration — a hands-on embedded-systems lab project.',
      tech: ['C', 'XC8', 'Embedded', 'Microcontrollers'],
      thumbnail: '/Projects/Futsal Scoreboard.jpg',
    },
    {
      name: 'SMARTBIN 3 (Thesis)',
      blurb:
        'Undergraduate thesis: a deep-learning waste-sorting bin using YOLOv8 for real-time classification with a motorized platform for auto-segregation. My contribution was diagnosing a flawed classification approach that had stalled progress for ~2 months and proposing an object-detection redesign with confidence-score thresholding — which my teammate implemented to clear the training bottleneck. The model reached 98.67% accuracy on standard waste and 92.44% on deformed items (targets: 98% / 80%).',
      tech: ['YOLOv8', 'Computer Vision', 'Python', 'Deep Learning'],
      thumbnail: '/Projects/Thesis.jpg',
    },
  ],
}

// ── PROFESSIONAL EXPERIENCE ──
// Two separate roles at the same employer, newest first. Rendered as
// collapsed-by-default dropdown cards in ContentScreen — only role/company/
// duration show until the card is expanded. Each card shows its own company
// row (logo + name); the logo path is hardcoded in ContentScreen, not
// data-driven.
export const professionalExperience = [
  {
    id: 'associate',
    role: 'Software Engineering Associate',
    company: 'Accenture',
    duration: 'Aug 2026 – Present',
    location: 'Cebu City, Philippines',
    summary:
      'Full-time Software Engineering Associate at Accenture, building Salesforce Agentforce agents and cloud-based automation tools that streamline customer workflows — a direct continuation of the Agentforce internship below.',
    sections: [
      {
        title: 'Salesforce Engineering',
        points: [
          'Continuing hands-on Salesforce Agentforce development in a full-time capacity — agent actions, Flow logic, and Agent Instructions.',
          'Building cloud-based automation tools that streamline customer workflows beyond the case-management work done during the internship.',
        ],
      },
      {
        title: 'Engineering Practices',
        points: [
          'Bridging enterprise Salesforce work with the AI-assisted engineering practices I use on personal projects.',
        ],
      },
    ],
  },
  {
    id: 'intern',
    role: 'Agentforce Developer Intern',
    company: 'Accenture',
    duration: 'Jan 2026 – Apr 2026',
    location: 'Cebu City, Philippines',
    summary:
      'Developed AI-driven customer-service automation on the Salesforce Agentforce platform during a 540-hour internship, working as part of a team of interns to build agents that create, update, and close support cases and automate account-billing workflows.',
    sections: [
      {
        title: 'Agentforce Agents (Console + Portal)',
        points: [
          'Built customer-service agents that create, update, and close cases from natural-language prompts, for both internal (Console) and customer-facing (Portal) users.',
          'Automated account-billing workflows: changing a billing email, email-code verification, generating monthly billing statements, and creating payment plans.',
          'Configured distinct Flow logic and Agent Instructions per environment so each agent behaved appropriately for internal vs. customer-facing use.',
        ],
      },
      {
        title: 'Salesforce Automation (Flow + Lightning)',
        points: [
          'Used Flow Builder and Lightning components to auto-attach knowledge articles to new cases and surface a case summary on the case page and an account summary on the account page.',
          'Added case-closure requirements (e.g., a mandatory reason for closing) to keep records clean.',
          'Maintained the knowledge base — merging duplicate articles and adding a fallback article that attaches when no other relevant article exists.',
        ],
      },
      {
        title: 'Instruction & Behavior Debugging',
        points: [
          'Diagnosed systemic flaws in live agent behavior and rewrote instruction logic to eliminate incorrect topic and action selection.',
          'Focused on root-cause fixes rather than surface-level patches, improving agent reliability across both environments.',
        ],
      },
      {
        title: 'Knowledge-Base Analytics',
        points: [
          'Added a Salesforce dashboard tracking the most- and least-used knowledge articles to guide content-quality improvements and smoother case closure.',
        ],
      },
    ],
  },
]
