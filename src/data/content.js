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
  resumeHref: '/resume/Paolo-Enrera-Resume.pdf',
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
    "I'm always open to talking about software development opportunities, interesting engineering problems, or the tech behind this site. Email or LinkedIn are the fastest ways to reach me.",
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
      items: ['Apex', 'SOQL', 'Lightning Web Components', 'Flow Builder', 'Agentforce Configuration', 'Agentforce Actions', 'Agent Instructions', 'Case Management'],
    },
    {
      title: 'Frontend Development',
      items: ['React', 'Next.js', 'React Native (Expo)', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Backend & Automation',
      items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Supabase', 'Prisma', 'SQL', 'Database Design', 'Workflow Automation'],
    },
    {
      title: 'AI-Assisted Development',
      items: ['Claude Code', 'GitHub Copilot', 'AI Workflows', 'Prompt Engineering'],
    },
    {
      title: 'Tools & Practices',
      items: ['Git', 'GitHub Actions (CI/CD)', 'Vitest', 'Playwright', 'Figma', 'Agile / Scrum'],
    },
  ],
}

// ── PROJECTS ──
// Collapsed cards show a thumbnail + name + tech tags; `blurb` is the full
// writeup revealed when the card is expanded via "Read more". `thumbnail`
// paths live under public/Projects/.
export const projectsInfo = {
  intro: 'Products I build in my own time — from a personal-finance app to a point-of-sale system for a small business. (This portfolio is one of them.)',
  projects: [
    {
      name: 'Tigom (Personal Finance App)',
      blurb:
        'A mobile-first personal-finance app that records bank and e-wallet transactions automatically by reading payment alerts on Android, with budgets, savings goals, payday forecasts and statistics. Alerts are captured in the background and retried until the server confirms them, so nothing is lost or recorded twice. Each user\'s data is protected by database-level access rules, and automated unit and end-to-end tests run on every push. I use it daily for my own spending.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Capacitor'],
      thumbnail: '/Projects/Tigom.jpg',
    },
    {
      name: 'caracebu POS',
      blurb:
        'An offline-first cashier and inventory app built for a small pop-up retail business: checkout with discounts and split payments, PDF/PNG invoices and receipts, per-event reports, and a public product catalog. It keeps selling with no internet and syncs the shop\'s iPad and computer once back online, keeping stock correct across both devices. Code on GitHub: shuu-pao/e-commerce-app.',
      tech: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
      thumbnail: '/Projects/caracebu-POS.jpg',
    },
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
        'My other portfolio site — a cinematic personal site built with Next.js, TypeScript, and Framer Motion, with scroll-driven animation, light and dark themes, and a backend-free contact form.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      thumbnail: '/Projects/Premium Portfolio.jpg',
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
      'Full-time Software Engineering Associate at Accenture, building enterprise applications on the Salesforce platform. Completed the Accenture Tech Analyst School (ATAS) and a Salesforce Developer Bootcamp, delivering a full course-registration application end to end. Continues the Agentforce work from the internship below.',
    sections: [
      {
        title: 'Course Registration Application',
        period: 'Salesforce Developer Bootcamp · Sep – Nov 2026',
        points: [
          'Designed and built an end-to-end course registration application covering data model, security, automation, UI, and testing.',
          'Modeled the data with custom objects, relationships, and record types, and secured it with profiles, roles, validation rules, and approval processes.',
          'Wrote Apex triggers with handler classes for schedule-conflict checks, enrollment-capacity limits, and student record updates, using SOQL and DML.',
          'Automated enrollment, GPA calculation, and year-level assignment with Screen Flows and Record-Triggered Flows.',
          'Built a custom course-registration screen as a Lightning Web Component, combining JavaScript, HTML, and Apex.',
          'Wrote Apex test classes with reusable test data, and built reports and dashboards on enrollment and student performance.',
          'Debugged with Apex debug logs and Flow debugging, then presented and defended the finished application as the bootcamp\'s final case study.',
        ],
      },
    ],
  },
  {
    id: 'intern',
    role: 'Salesforce Developer Intern',
    company: 'Accenture',
    duration: 'Jan 2026 – Apr 2026',
    location: 'Cebu City, Philippines',
    summary:
      'Developed AI-driven customer-service automation on the Salesforce Agentforce platform during a 540-hour internship, working on a team of 4–5 interns to build two agents that create, update, and close support cases and automate account-billing workflows.',
    sections: [
      {
        title: 'Agentforce Agents (Console + Portal)',
        points: [
          'Built two customer-service agents that create, update, and close cases from natural-language prompts: a Console agent for customer-service reps and a Portal agent for customers.',
          'Built 10+ agent actions and 5+ Flows myself, and improved existing Flows.',
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
          'Diagnosed incorrect topic and action selection in agent behavior during testing and rewrote the instruction logic, turning a failing test set into a passing one.',
          'Focused on root-cause fixes rather than surface-level patches, improving agent reliability across both environments.',
        ],
      },
      {
        title: 'Team & Testing',
        points: [
          'Worked in an Agile team with daily stand-ups, testing and demoing each feature to the manager before moving on.',
          'Performed unit and end-to-end testing to prepare the agents for a live demonstration to prospective clients.',
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
