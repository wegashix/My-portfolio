export type Lang = 'en' | 'ru'

export interface Translations {
  meta: { title: string; description: string }
  nav: {
    about: string; skills: string; projects: string
    experience: string; contact: string; hire: string
  }
  hero: {
    badge: string; role: string; description: string
    viewProjects: string; contactMe: string; findMe: string
    photoSoon: string; photoHint: string; scroll: string
    badgeReact: string; badgeCoreStack: string
    badgeTs: string; badgeProficient: string
  }
  about: {
    label: string; heading: string; headingHighlight: string
    p1: string; p2: string; p3: string; p4: string
    stat1v: string; stat1l: string
    stat2v: string; stat2l: string
    stat3v: string; stat3l: string
    trait1t: string; trait1d: string
    trait2t: string; trait2d: string
    trait3t: string; trait3d: string
    trait4t: string; trait4d: string
  }
  skills: {
    label: string; heading: string; description: string
    categories: Record<string, { label: string; description: string }>
    levels: { Core: string; Proficient: string; Familiar: string }
  }
  projects: {
    label: string; heading: string; description: string
    visitSite: string; liveDemo: string; code: string
    statuses: { Live: string; 'In Progress': string; Archived: string }
    items: Record<string, { title: string; description: string; longDescription: string }>
  }
  experience: {
    label: string; heading: string; description: string
    current: string
    types: { Work: string; Education: string; Certificate: string }
    items: Record<string, {
      role: string; organization: string; period: string
      description: string; highlights: string[]
    }>
  }
  contact: {
    label: string; heading: string; description: string
    available: string
    items: Record<string, { platform: string; description: string }>
  }
  footer: { built: string }
  notFound: { label: string; heading: string; description: string; home: string; back: string }
}

export const translations: Record<Lang, Translations> = {
  en: {
    meta: {
      title: 'Baratov Damir — Full-stack developer',
      description: 'Full-stack developer specializing in React, TypeScript, and modern web technologies. Building fast, accessible, and visually refined web applications.',
    },
    nav: {
      about: 'About', skills: 'Skills', projects: 'Projects',
      experience: 'Experience', contact: 'Contact', hire: 'Message me',
    },
    hero: {
      badge: 'Open to Work',
      role: 'Full-stack developer',
      description: 'Building modern, fast and intuitive web applications with **React** and **TypeScript**. I also have a solid foundation in backend development, including **Python**, **REST APIs** and **databases**, allowing me to understand and build complete web solutions.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      findMe: 'Find me on',
      photoSoon: 'Portrait coming soon',
      photoHint: 'Add your photo here',
      scroll: 'Scroll',
      badgeReact: 'React 19', badgeCoreStack: 'Core stack',
      badgeTs: 'TypeScript', badgeProficient: 'Proficient',
    },
    about: {
      label: 'About me',
      heading: 'Building the ',
      headingHighlight: 'web experience',
      p1: "I enjoy solving backend problems and building the logic behind modern web applications. My primary focus is backend development, where I work with Python, REST APIs, databases and application architecture.",
      p2: 'I successfully completed both Frontend and Backend development courses, earning certificates in each. This gives me a solid understanding of both sides of web development and allows me to build complete web applications when needed.',
      p3: "Alongside backend development, I have experience building responsive interfaces with React, TypeScript and Tailwind CSS, which helps me collaborate effectively across the entire development process.",
      p4: "My goal is to grow as a backend developer while continuously improving my software engineering skills and building reliable, scalable applications.",
      stat1v: '1+', stat1l: 'Year building',
      stat2v: '3+', stat2l: 'Projects shipped',
      stat3v: '100%', stat3l: 'Open to work',
      trait1t: 'Clean Code',
      trait1d: 'Maintainable, readable, and well-documented — code that the next developer will appreciate.',
      trait2t: 'Performance First',
      trait2d: 'Core Web Vitals optimized. Every millisecond of load time and interaction latency matters.',
      trait3t: 'Responsive Design',
      trait3d: 'Pixel-perfect layouts that feel native on every screen size, from 320px to 4K.',
      trait4t: 'Problem Solving',
      trait4d: 'Systematic approach to complex frontend challenges — from architecture to micro-interactions.',
    },
    skills: {
      label: 'Skills',
      heading: 'Tools I work with every day',
      description: 'Technologies I use to build fast, maintainable, and visually refined web applications — organized by the role they play in my workflow.',
      categories: {
        frontend: { label: 'Frontend', description: 'Building performant, accessible user interfaces with modern tooling.' },
        backend: { label: 'Backend', description: 'API design, server-side logic, and database management.' },
        tools: { label: 'Tools', description: 'The development toolkit that keeps the workflow efficient.' },
        ai: { label: 'AI', description: 'Integrating AI tools into the modern development workflow.' },
      },
      levels: { Core: 'Core', Proficient: 'Proficient', Familiar: 'Familiar' },
    },
    projects: {
      label: 'Projects',
      heading: "Work I've shipped",
      description: 'A responsive landing page designed to showcase and sell a CBD wellness starter kit. Features an interactive product breakdown, customer reviews, an FAQ section, and a conversion-focused hero screen with a limited-time countdown timer.',
      visitSite: 'Visit Site', liveDemo: 'Live Demo', code: 'Code',
      statuses: { Live: 'Live', 'In Progress': 'In Progress', Archived: 'Archived' },
      items: {
        devflow: {
          title: 'Wildflowers-Shop',
          description: 'Developer productivity dashboard with real-time metrics, task tracking, and team insights built for engineering teams.',
          longDescription: 'A full-featured productivity platform that aggregates GitHub activity, sprint metrics, and deployment status into a unified developer experience. Built with a component-driven architecture, optimized rendering pipeline, and responsive design that works across every screen size.',
        },
        'forma-ui': {
          title: 'Forma UI',
          description: 'A composable component library for React — accessible by default, styleable via design tokens, with zero runtime dependencies.',
          longDescription: 'Component library built with accessibility in mind. Every component follows WAI-ARIA guidelines and ships with dark mode support out of the box. Uses a design-token architecture for fully customizable theming.',
        },
        nextask: {
          title: 'NexTask',
          description: 'Collaborative task management application with real-time updates, board views, and team workspace management.',
          longDescription: 'Full-stack task manager with real-time collaboration. Built with WebSocket for live updates, drag-and-drop board views, and granular permission controls.',
        },
      },
    },
    experience: {
      label: 'Experience',
      heading: 'My journey so far',
      description: 'From hands-on frontend development to formal certifications and backend training — building the foundation for a full-stack career.',
      current: 'Current',
      types: { Work: 'Work', Education: 'Education', Certificate: 'Certificate' },
      items: {
        'frontend-dev': {
          role: 'Frontend Development',
          organization: 'IT Education Center',
          period: '2024 — 2025',
          description: 'Started my journey in web development by studying frontend development in an IT education center. Built a solid foundation in modern web technologies and completed the program with a certificate.',
          highlights: [
            'Studied HTML, CSS, JavaScript and React',
            'Built responsive websites with HTML, CSS and JavaScript',
            'Earned a Frontend Development certificate (2025)',
          ],
        },
        'backend-course': {
          role: 'Backend Development Course',
          organization: 'IT Education Center',
          period: '2025 — 2026',
          description: 'Continued my education by specializing in backend development. Learned server-side programming, databases, APIs, and software architecture through hands-on projects.',
          highlights: [
            'Studied Python, SQL and database design',
            'Built REST APIs and backend applications',
            'Earned a Backend Development certificate (2026)',
          ],
        },
        'frontend-cert': {
          role: 'Freelance & Personal Projects',
          organization: 'Self-employed',
          period: '2026 — Present',
          description: 'Applying my skills in real projects while continuing to grow as a backend developer and expanding my portfolio.',
          highlights: [
            'Developing websites and web applications',
            'Improving backend development skills with Python',
            'Building real-world projects for my portfolio',
          ],
        },
      },
    },
    contact: {
      label: 'Contact',
      heading: "Let's work together",
      description: 'Open for freelance projects and full-time opportunities. Reach out on any channel — I typically respond within a few hours.',
      available: 'Currently available for new projects',
      items: {
        github: { platform: 'GitHub', description: 'See my code and open source work' },
        telegram: { platform: 'Telegram', description: 'Fastest way to reach me' },
        instagram: { platform: 'Instagram', description: 'Work in progress & updates' },
        email: { platform: 'Email', description: 'For project inquiries' },
      },
    },
    footer: { built: 'Built with React & TypeScript' },
    notFound: {
      label: 'Page not found', heading: '404',
      description: "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
      home: 'Go Home', back: 'Go Back',
    },
  },

  ru: {
    meta: {
      title: 'Баратов Дамир — Full-stack developer',
      description: 'Full-stack developer, специализирующийся на React, TypeScript и современных веб-технологиях. Создаю быстрые, доступные и визуально отточенные веб-приложения.',
    },
    nav: {
      about: 'Обо мне', skills: 'Навыки', projects: 'Проекты',
      experience: 'Опыт', contact: 'Контакты', hire: 'Написать мне',
    },
    hero: {
      badge: 'Открыт для работы',
      role: 'Full-stack developer',
      description: 'Создаю быстрые, доступные и визуально отточенные веб-приложения на **React** и **TypeScript**. Сфокусирован на точности в разработке и продуманном дизайне.',
      viewProjects: 'Смотреть проекты',
      contactMe: 'Связаться',
      findMe: 'Найти меня',
      photoSoon: 'Портрет скоро',
      photoHint: 'Добавьте фото сюда',
      scroll: 'Прокрутите',
      badgeReact: 'React 19', badgeCoreStack: 'Основной стек',
      badgeTs: 'TypeScript', badgeProficient: 'Уверенное владение',
    },
    about: {
      label: 'Обо мне',
      heading: 'Создаю ',
      headingHighlight: 'веб-опыт',
      p1: 'Я фронтенд-разработчик, который глубоко увлечён своим делом. Моя работа находится на стыке инженерной точности и продуманного дизайна — я пишу код, который работает быстро, легко масштабируется и приятен в использовании.',
      p2: 'Мой основной стек — **React** и **TypeScript**, с растущими знаниями в бэкенд-разработке через Node.js и PostgreSQL. Я убеждён, что лучшие фронтенд-инженеры понимают весь стек — даже если специализируются на интерфейсах.',
      p3: 'Сейчас я сфокусирован на создании реальных продуктов, которые решают реальные задачи, и постоянно углубляю свои знания в **современном UI-дизайне**, **веб-производительности** и **доступности**.',
      p4: 'Моя цель — расти как бэкенд-разработчик, постоянно совершенствуя свои инженерные навыки и создавая надёжные, масштабируемые приложения.',
      stat1v: '1+', stat1l: 'Год разработки',
      stat2v: '3+', stat2l: 'Проекта выпущено',
      stat3v: '100%', stat3l: 'Открыт для работы',
      trait1t: 'Чистый код',
      trait1d: 'Поддерживаемый, читабельный и хорошо документированный — код, который оценит следующий разработчик.',
      trait2t: 'Производительность',
      trait2d: 'Оптимизация Core Web Vitals. Каждая миллисекунда загрузки и задержки взаимодействия имеет значение.',
      trait3t: 'Адаптивный дизайн',
      trait3d: 'Точные до пикселя макеты, которые отлично выглядят на любом экране — от 320px до 4K.',
      trait4t: 'Решение задач',
      trait4d: 'Системный подход к сложным фронтенд-задачам — от архитектуры до микро-взаимодействий.',
    },
    skills: {
      label: 'Навыки',
      heading: 'Инструменты, с которыми я работаю каждый день',
      description: 'Технологии для создания быстрых, поддерживаемых и визуально отточенных веб-приложений — организованные по их роли в моём рабочем процессе.',
      categories: {
        frontend: { label: 'Фронтенд', description: 'Создание производительных и доступных интерфейсов с современными инструментами.' },
        backend: { label: 'Бэкенд', description: 'Проектирование API, серверная логика и управление базами данных.' },
        tools: { label: 'Инструменты', description: 'Набор инструментов для эффективной разработки.' },
        ai: { label: 'ИИ', description: 'Интеграция ИИ-инструментов в современный процесс разработки.' },
      },
      levels: { Core: 'Основной', Proficient: 'Уверенный', Familiar: 'Знакомый' },
    },
    projects: {
      label: 'Проекты',
      heading: 'Завершённые работы',
      description: 'Реальные продукты, созданные от начала до конца — от архитектурных решений и дизайна компонентов до деплоя и оптимизации производительности.',
      visitSite: 'Открыть сайт', liveDemo: 'Демо', code: 'Код',
      statuses: { Live: 'Запущен', 'In Progress': 'В разработке', Archived: 'Архив' },
      items: {
        devflow: {
          title: 'DevFlow',
          description: 'Панель продуктивности для разработчиков с метриками в реальном времени, трекингом задач и аналитикой для инженерных команд.',
          longDescription: 'Полнофункциональная платформа продуктивности, объединяющая активность на GitHub, метрики спринтов и статус деплоя в единый интерфейс. Построена с компонентной архитектурой, оптимизированным рендерингом и адаптивным дизайном.',
        },
        'forma-ui': {
          title: 'Forma UI',
          description: 'Композируемая библиотека компонентов для React — доступная по умолчанию, стилизуемая через дизайн-токены, без рантайм-зависимостей.',
          longDescription: 'Библиотека компонентов с фокусом на доступности. Каждый компонент следует рекомендациям WAI-ARIA и поддерживает тёмную тему из коробки. Архитектура на дизайн-токенах для полной кастомизации.',
        },
        nextask: {
          title: 'NexTask',
          description: 'Приложение для совместного управления задачами с обновлениями в реальном времени, досками и управлением рабочими пространствами.',
          longDescription: 'Полнофункциональный менеджер задач с совместной работой в реальном времени. Построен на WebSocket для мгновенных обновлений, с перетаскиванием элементов и гранулярным управлением правами.',
        },
      },
    },
    experience: {
      label: 'Опыт',
      heading: 'Мой путь',
      description: 'От практической фронтенд-разработки до сертификаций и бэкенд-обучения — закладываю фундамент для карьеры fullstack-разработчика.',
      current: 'Текущий',
      types: { Work: 'Работа', Education: 'Обучение', Certificate: 'Сертификат' },
      items: {
        'frontend-dev': {
          role: 'Фронтенд-разработка',
          organization: 'IT Education Center',
          period: '2024 — 2025',
          description: 'Начал свой путь в веб-разработке с изучения фронтенд-разработки в IT образовательном центре. Заложил прочную основу в современных веб-технологиях и завершил программу с сертификатом.',
          highlights: [
            'Изучил HTML, CSS, JavaScript и React',
            'Создавал адаптивные сайты на HTML, CSS и JavaScript',
            'Получил сертификат по фронтенд-разработке (2025)',
          ],
        },
        'backend-course': {
          role: 'Курс бэкенд-разработки',
          organization: 'IT Education Center',
          period: '2025 — 2026',
          description: 'Продолжил обучение, специализируясь на бэкенд-разработке. Изучил серверное программирование, базы данных, API и архитектуру ПО через практические проекты.',
          highlights: [
            'Изучил Python, SQL и проектирование баз данных',
            'Создавал REST API и бэкенд-приложения',
            'Получил сертификат по бэкенд-разработке (2026)',
          ],
        },
        'frontend-cert': {
          role: 'Фриланс и личные проекты',
          organization: 'Самозанятый',
          period: '2026 — настоящее время',
          description: 'Применяю свои навыки в реальных проектах, продолжая расти как бэкенд-разработчик и расширяя портфолио.',
          highlights: [
            'Разрабатываю сайты и веб-приложения',
            'Совершенствую навыки бэкенд-разработки на Python',
            'Создаю реальные проекты для портфолио',
          ],
        },
      },
    },
    contact: {
      label: 'Контакты',
      heading: 'Давайте работать вместе',
      description: 'Открыт для фриланс-проектов и постоянной работы. Напишите в любом канале — обычно отвечаю в течение нескольких часов.',
      available: 'Сейчас доступен для новых проектов',
      items: {
        github: { platform: 'GitHub', description: 'Мой код и open source' },
        telegram: { platform: 'Telegram', description: 'Самый быстрый способ связаться' },
        instagram: { platform: 'Instagram', description: 'Процесс работы и обновления' },
        email: { platform: 'Email', description: 'Для деловых запросов' },
      },
    },
    footer: { built: 'Сделано на React и TypeScript' },
    notFound: {
      label: 'Страница не найдена', heading: '404',
      description: 'Страница, которую вы ищете, не существует или была перемещена. Давайте вернёмся на правильный путь.',
      home: 'На главную', back: 'Назад',
    },
  },
}
