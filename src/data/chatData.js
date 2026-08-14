// Chat dialogue data for the CHAT WITH AI section (a separate experience from
// the static ABOUT ME page). The bot opens with a greeting + selectable options;
// users can also type free-text, which ChatAppAboutMe maps to the closest option
// by keyword (see FREETEXT_KEYWORDS there). CTA replies navigate to other
// portfolio sections via `onNavigate`.
export const BOT_OPENING = "Hey! I'm the AI running this portfolio — think of me as your guide. Tap a topic below and I'll tell you about Paolo's story, work, skills, projects, or how to reach him.";

// User selectable options (shown as buttons)
export const USER_OPTIONS = [
  {
    id: 'story',
    label: "What's your story?",
    botResponse: {
      text: `Comp Eng grad from University of San Carlos, Cebu — walked the stage July 2026. My focus is creative development: I build websites and automation tools using AI, blending design and engineering to solve real problems. I got into tech because I like building things that actually work the way they're supposed to and genuinely delight the people using them — whether it's AI-driven interfaces or polished web apps, every project is about turning an idea into a meaningful digital experience.

This portfolio itself is one of those builds — a full turn-based RPG battle system, built from scratch with React and Vite. You're standing in it right now.`,
      cta: null,
    },
  },
  {
    id: 'work',
    label: "What kind of work do you do?",
    botResponse: {
      text: `I'm a Software Engineering Associate at Accenture, where I specialize in Salesforce CRM automation — cloud-based solutions that streamline customer workflows without tying me to a single platform. That includes building Agentforce agents that run the full support-case lifecycle for both internal (Console) and customer-facing (Portal) users, plus automation like email verification, monthly statements, and payment plans. I also lean on AI tooling like Claude Code to speed up development and raise the quality bar on what I ship. Outside of that role, I extend the same instinct to tools and websites that genuinely delight users. The Experience page has the full breakdown.`,
      cta: {
        label: "See the full experience →",
        target: 'professional',
      },
    },
  },
  {
    id: 'skills',
    label: "What are your skills?",
    botResponse: {
      text: `Salesforce Agentforce is core to my day job — agent actions, Flow logic, Agent Instructions — plus the frontend and backend stack I use to ship real products: React, Next.js, Node.js, TypeScript, Tailwind. I lean hard on AI-assisted tooling like Claude Code and GitHub Copilot to move faster without cutting corners on quality, and I've got hands-on embedded-systems and computer-vision experience from my degree (a PIC futsal scoreboard in C, a YOLOv8 thesis). The Skills page has the full categorized list.`,
      cta: {
        label: "See my skills →",
        target: 'skills',
      },
    },
  },
  {
    id: 'projects',
    label: "What have you built?",
    botResponse: {
      text: `The site you're on is one — a from-scratch React/Vite turn-based battle system. I've also got a second, more traditional portfolio site built with Next.js and Framer Motion. On the academic side I built a PIC-based futsal scoreboard in embedded C (real-time timers, 7-segment displays), and co-developed SMARTBIN 3, a YOLOv8 waste-sorting thesis where I diagnosed a flawed approach and proposed the detection-based redesign that cleared a two-month stall.

The Personal Projects page walks through all four. (My Agentforce work at Accenture — internship and now full-time — is on the Experience page.)`,
      cta: {
        label: "Check out my projects →",
        target: 'projects',
      },
    },
  },
  {
    id: 'education',
    label: "Where'd you study?",
    botResponse: {
      text: `University of San Carlos, Cebu City — BS Computer Engineering. The biggest thing I took from it wasn't a specific class, it was learning to understand systems from first principles instead of just memorizing patterns. That's carried directly into how I approach building software.`,
      cta: {
        label: "Check out my education →",
        target: 'education',
      },
    },
  },
  {
    id: 'availability',
    label: "Are you available for work?",
    botResponse: {
      text: `I'm full-time at Accenture right now, so I'm not actively hunting for a new role — but I'm always up for a good conversation about Salesforce, Agentforce, or interesting engineering problems. If that's what you're after, reach out any time.`,
      cta: {
        label: "Go to contact info →",
        target: 'contact',
      },
    },
  },
  {
    id: 'contact',
    label: "How do I get in touch?",
    botResponse: {
      text: `Fastest way to reach me is email or LinkedIn, both linked on the contact page — you'll also find my GitHub and Instagram there. My résumé is downloadable from the About Me & Resume page. Always happy to talk Salesforce, Agentforce, or the engineering behind this portfolio.`,
      cta: {
        label: "Go to contact info →",
        target: 'contact',
      },
    },
  },
];

// Wrap-up message shown after all options have been visited at least once
export const BOT_WRAPUP = "That's the full rundown from me. Feel free to revisit anything, or head to the contact page — I'd genuinely like to hear from you.";

// Restart button label
export const RESTART_LABEL = "Restart conversation";

// Bot name for display
export const BOT_NAME = "PORTFOLIO AI";

// User name for display (the site visitor)
export const USER_NAME = "YOU";
