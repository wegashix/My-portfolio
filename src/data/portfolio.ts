import wildflowerImage from '@/images/wildflower-main-image.jpg'
import techforingImage from '@/images/techforing.jpg'

/* ─── Types ──────────────────────────────────────────────────────────── */

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  stack: string[]
  status: 'Live' | 'In Progress' | 'Archived'
  liveUrl?: string
  githubUrl?: string
  image?: string
  gradient: string
  featured: boolean
}

export interface SkillCategory {
  id: string
  label: string
  description: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level: 'Core' | 'Proficient' | 'Familiar'
  color: string
}

export interface ExperienceItem {
  id: string
  role: string
  type: 'Work' | 'Education' | 'Certificate'
  organization: string
  period: string
  current: boolean
  description: string
  highlights: string[]
}

export interface ContactLink {
  id: string
  platform: string
  handle: string
  url: string
  description: string
  icon: string
}

/* ─── Projects ───────────────────────────────────────────────────────── */

export const projects: Project[] = [
  {
    id: 'wildflowers-shop',
    title: 'Wildflowers-Shop',
    description:
      'A responsive landing page designed to showcase and sell a CBD wellness starter kit. Features an interactive product breakdown, customer reviews, an FAQ section, and a conversion-focused hero screen with a limited-time countdown timer.',
    longDescription:
      'A responsive landing page designed to showcase and sell a CBD wellness starter kit. Features an interactive product breakdown, customer reviews, an FAQ section, and a conversion-focused hero screen with a limited-time countdown timer.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'Live',
    liveUrl: 'https://wegashix.github.io/Shop-Wildflowers/',
    githubUrl: 'https://github.com/wegashix',
    image: wildflowerImage,
    gradient: 'from-blue-500/10 via-violet-500/10 to-indigo-500/10',
    featured: true,
  },
  {
    id: 'forma-ui',
    title: 'Forma UI',
    description:
      'A composable component library for React — accessible by default, styleable via design tokens, with zero runtime dependencies.',
    longDescription:
      'Component library built with accessibility in mind. Every component follows WAI-ARIA guidelines and ships with dark mode support out of the box. Uses a design-token architecture for fully customizable theming.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Radix UI'],
    status: 'In Progress',
    githubUrl: 'https://github.com/wegashix',
    gradient: 'from-emerald-500/10 via-teal-500/10 to-cyan-500/10',
    featured: true,
  },
  {
    id: 'techforing',
    title: 'TechForing',
    description:
      'Developed a responsive web interface for a cybersecurity SaaS platform. The application automates vulnerability scanning for web applications and server configurations.',
    longDescription:
      'Developed a responsive web interface for a cybersecurity SaaS platform. The application automates vulnerability scanning for web applications and server configurations.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    status: 'Live',
    liveUrl: 'https://wegashix.github.io/TechForing/',
    githubUrl: 'https://github.com/wegashix',
    image: techforingImage,
    gradient: 'from-orange-500/10 via-amber-500/10 to-yellow-500/10',
    featured: false,
  },
]

/* ─── Skills ─────────────────────────────────────────────────────────── */

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    description:
      'Building performant, accessible user interfaces with modern tooling.',
    skills: [
      { name: 'React 19', level: 'Core', color: '#61DAFB' },
      { name: 'TypeScript', level: 'Core', color: '#3178C6' },
      { name: 'Tailwind CSS', level: 'Core', color: '#06B6D4' },
      { name: 'Framer Motion', level: 'Core', color: '#0055FF' },
      { name: 'Next.js', level: 'Proficient', color: '#000000' },
      { name: 'HTML & CSS', level: 'Core', color: '#E34F26' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    description:
      'API design, server-side logic, and database management.',
    skills: [
      { name: 'Node.js', level: 'Proficient', color: '#339933' },
      { name: 'Express.js', level: 'Proficient', color: '#000000' },
      { name: 'REST APIs', level: 'Proficient', color: '#2563EB' },
      { name: 'PostgreSQL', level: 'Proficient', color: '#4169E1' },
      { name: 'Python', level: 'Familiar', color: '#47A248' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    description:
      'The development toolkit that keeps the workflow efficient.',
    skills: [
      { name: 'Git & GitHub', level: 'Core', color: '#F05032' },
      { name: 'Vite', level: 'Core', color: '#646CFF' },
      { name: 'Figma', level: 'Proficient', color: '#F24E1E' },
      { name: 'Vercel', level: 'Proficient', color: '#000000' },
      { name: 'VS Code', level: 'Core', color: '#007ACC' },
      { name: 'npm / pnpm', level: 'Core', color: '#CC3534' },
    ],
  },
  {
    id: 'ai',
    label: 'AI',
    description:
      'Integrating AI tools into the modern development workflow.',
    skills: [
      { name: 'GitHub Copilot', level: 'Core', color: '#24292E' },
      { name: 'ChatGPT', level: 'Core', color: '#10A37F' },
      { name: 'Claude', level: 'Core', color: '#D4873B' },
      { name: 'Cursor', level: 'Proficient', color: '#000000' },
    ],
  },
]

/* ─── Experience ─────────────────────────────────────────────────────── */

export const experience: ExperienceItem[] = [
  {
    id: 'frontend-dev',
    role: 'Frontend Development',
    type: 'Education',
    organization: 'IT Education Center',
    period: '2024 — 2025',
    current: false,
    description:
      'Started my journey in web development by studying frontend development in an IT education center. Built a solid foundation in modern web technologies and completed the program with a certificate.',
    highlights: [
      'Studied HTML, CSS, JavaScript and React',
      'Built responsive websites with HTML, CSS and JavaScript',
      'Earned a Frontend Development certificate (2025)',
    ],
  },
  {
    id: 'backend-course',
    role: 'Backend Development Course',
    type: 'Education',
    organization: 'IT Education Center',
    period: '2025 — 2026',
    current: false,
    description:
      'Continued my education by specializing in backend development. Learned server-side programming, databases, APIs, and software architecture through hands-on projects.',
    highlights: [
      'Studied Python, SQL and database design',
      'Built REST APIs and backend applications',
      'Earned a Backend Development certificate (2026)',
    ],
  },
  {
    id: 'frontend-cert',
    role: 'Freelance & Personal Projects',
    type: 'Work',
    organization: 'Self-employed',
    period: '2026 — Present',
    current: true,
    description:
      'Applying my skills in real projects while continuing to grow as a backend developer and expanding my portfolio.',
    highlights: [
      'Developing websites and web applications',
      'Improving backend development skills with Python',
      'Building real-world projects for my portfolio',
    ],
  },
]

/* ─── Contact ────────────────────────────────────────────────────────── */

export const contactLinks: ContactLink[] = [
  {
    id: 'github',
    platform: 'GitHub',
    handle: '@wegashix',
    url: 'https://github.com/wegashix',
    description: 'See my code and open source work',
    icon: 'github',
  },
  {
    id: 'telegram',
    platform: 'Telegram',
    handle: '@wegashix',
    url: 'https://t.me/wegashix',
    description: 'Fastest way to reach me',
    icon: 'send',
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@wegashix',
    url: 'https://www.instagram.com/wegashix',
    description: 'Work in progress & updates',
    icon: 'instagram',
  },
  {
    id: 'email',
    platform: 'Email',
    handle: 'wegashixbar@gmail.com',
    url: 'mailto:wegashixbar@gmail.com',
    description: 'For project inquiries',
    icon: 'mail',
  },
]
