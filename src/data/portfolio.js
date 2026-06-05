export const profile = {
  name: 'Youssef Essam',
  role: 'Frontend-Focused Full Stack Developer',
  headline: 'I build fast, responsive web apps that turn business workflows into clean digital products.',
  summary:
    'Frontend-focused Full Stack Developer with hands-on experience building responsive web applications using React.js, Laravel, and WordPress. Experienced in dashboards, authentication systems, APIs, and modern UI interfaces, with a strong passion for scalable and user-friendly applications.',
  email: 'essamy688@gmail.com',
  phone: '+20 143 752 219',
  whatsapp: 'https://wa.me/20143752219',
  location: 'Alexandria, Egypt',
  militaryStatus: 'Exempted',
  github: 'https://github.com/Youssefaboelkhir19',
  linkedIn: 'https://www.linkedin.com/in/youssef-aboelkhir-2219yussef/',
};

export const strengths = [
  'Responsive React interfaces with polished UX',
  'Laravel APIs, dashboards, authentication, and CRUD systems',
  'WordPress builds, hosting setup, domains, cPanel, and deployment',
  'Practical product thinking across Agile, SDLC, MVC, and MVVM',
];

export const skills = [
  {
    title: 'Frontend',
    description: 'Modern interfaces, SPA flows, and responsive product screens.',
    items: ['React.js', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    description: 'APIs, authentication, databases, and server-side product logic.',
    items: ['Laravel', 'PHP', 'Node.js', 'Express', 'REST APIs', 'JWT', 'MVC', 'CRUD'],
  },
  {
    title: 'WordPress',
    description: 'WordPress websites, hosting setup, domains, cPanel, and deployment.',
    items: ['WordPress', ' Themes', ' Plugins', ' Post Types', ' Taxonomies', 'Custom Fields', 'cPanel', 'Deployment'],
  },
  {
    title: 'Tools',
    description: 'Developer workflow, testing APIs, deployment, and collaboration.',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'AWS', 'cPanel', 'Agile', 'SDLC'],
  },
];

export const experience = [
  {
    role: 'WordPress & Frontend Developer',
    company: 'IT.Square',
    type: 'Full-Time',
    duration: '12/2025',
    location: 'On site, Alexandria',
    description: 'Started on client WordPress delivery, then transitioned into frontend development with Next.js within the same role.',
    phases: [
      {
        title: 'WordPress',
        description: 'Built and maintained client WordPress websites with production hosting responsibilities.',
        achievements: [
          'Created custom themes and plugins tailored to client needs.',
          'Handled server management tasks including cPanel, domain setup, hosting configuration, and deployment.',
        ],
      },
      {
        title: 'Frontend',
        subtitle: 'Next.js',
        description: 'Moved into frontend work, building modern responsive interfaces and product screens with Next.js.',
        achievements: [
          'Developed client-facing pages and reusable UI components with Next.js.',
          'Connected frontend layouts with business requirements and ongoing WordPress project needs.',
        ],
      },
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Kemedar',
    type: 'Part-Time',
    duration: '04/2026',
    location: 'Remote',
    description: 'Developed full-stack web applications with React.js and Laravel.',
    achievements: [
      'Built responsive interfaces for product workflows.',
      'Integrated backend APIs and connected frontend screens to live business data.',
    ],
  },
  {
    role: 'Freelance Full Stack Developer',
    company: 'Travel',
    type: 'Freelance',
    duration: '10/2024 - 12/2024',
    location: 'Remote',
    description: 'Delivered a full-stack travel website with secure authentication and admin dashboards.',
    achievements: [
      'Developed the platform using React and Laravel.',
      'Built dashboards to manage employees, shifts, companies, and real-time notifications.',
    ],
  },
  {
    role: 'Freelance Frontend Developer',
    company: 'Nofa Egypt',
    type: 'Freelance',
    duration: '08/2024 - 09/2024',
    location: 'Remote',
    description: 'Built a responsive customer-facing site with authentication and admin management.',
    achievements: [
      'Implemented the website using React.js.',
      'Integrated Firebase services for email and user management.',
    ],
  },
  {
    role: 'Business & Sales Software Systems',
    company: 'HYNO IT Company',
    type: 'Training',
    duration: '07/2024 - 09/2024',
    location: 'On site, Alexandria',
    description: 'Trained in CRM tools, sales techniques, system analysis, and application/database design.',
    achievements: ['Practiced translating business needs into software workflows and system requirements.'],
  },
];

export const training = [
  {
    label: 'Frontend React Trainee - Digital Egypt Pioneers Initiative (DEPI), 11/2025 - 05/2026',
  },
  {
    label: 'Full Stack Web Development using PHP - ITIDA & NTI, 120 hours, final score 92.5%',
    link: 'https://drive.google.com/file/d/1KYsIkTVtKvhGugzJJnxcayLWjauuG7zB/view',
  },
  {
    label: 'Backend Developer Training - Skills Dynamic, Laravel MVC, MySQL, PHP, Postman APIs',
    link: 'https://drive.google.com/file/d/1cKi7lV1jA3o5raF-uNSNMkb6n16vcEAB/view',
  },
  {
    label: 'Frontend Developer Training - Skills Dynamic, HTML, CSS, JavaScript, Bootstrap, Tailwind, React.js',
    link: 'https://drive.google.com/file/d/1C2Zx8JTpfTz60NCJtUuKicQMCP46Hkck/view',
  },
];

export const education = {
  degree: 'B.Sc in Software Industry And Multimedia (SIM)',
  school: 'Alexandria University of Science',
  duration: '09/2022 - 09/2026',
  gpa: '3.4 / 4.00',
  location: 'Alexandria, Egypt',
};

export const projectCategories = [
  { id: 'react-fullstack', label: 'React.js & Fullstack' },
  { id: 'react-laravel', label: 'React & Laravel' },
  { id: 'wordpress', label: 'WordPress' },
];

export const projects = [
  {
    name: 'Construction Project Management App',
    category: 'react-laravel',
    date: '07/2025',
    description:
      'Full-stack construction management app with secure login, dynamic project tracking, image upload, admin dashboard, and responsive animated UI.',
    tech: ['React', 'Laravel', 'JWT Auth', 'MySQL', 'Admin Dashboard'],
    github: 'https://github.com/YoussefAboElkhir19/construction.git',
    demo: 'https://github.com/YoussefAboElkhir19/construction.git',
  },
  {
    name: 'Travel Website',
    category: 'react-laravel',
    date: '10/2024 - 12/2024',
    description:
      'Full-stack travel platform with React and Laravel, secure authentication, dashboards, company management, shift workflows, and real-time notifications.',
    tech: ['React', 'Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Fetch API'],
    github: 'https://github.com/YoussefAboElkhir19/travel-main0.git',
    demo: 'https://github.com/YoussefAboElkhir19/travel-main0.git',
  },
  {
    name: 'Nofa Egypt',
    category: 'react-fullstack',
    date: '08/2024 - 09/2024',
    description:
      'Responsive React website with authentication, admin dashboard, Firebase email handling, and user management services.',
    tech: ['React', 'Firebase', 'JavaScript', 'Tailwind CSS'],
    github: 'https://youssefaboelkhir19.github.io/nofa-egypt/',
    demo: 'https://youssefaboelkhir19.github.io/nofa-egypt/',
  },
  {
    name: 'InspireBox',
    category: 'react-fullstack',
    date: '05/2025',
    description:
      'Flutter mobile app using MVVM, Provider, and SharedPreferences to deliver persistent data, clean architecture, and responsive mobile UI.',
    tech: ['Flutter', 'Dart', 'MVVM', 'Provider', 'SharedPreferences'],
    github: 'https://github.com/YoussefAboElkhir19/flutter-app.git',
    demo: 'https://github.com/YoussefAboElkhir19/flutter-app.git',
  },
  {
    name: 'Student Management System',
    category: 'react-fullstack',
    date: '09/2024',
    description:
      'Complete Laravel Blade CRUD system with MySQL relationships, validation, Bootstrap UI, and generated PDF reports.',
    tech: ['Laravel', 'Blade', 'Bootstrap', 'MySQL', 'PDF Reports'],
    github: 'https://github.com/YoussefAboElkhir19/student-management-system.git',
    demo: 'https://github.com/YoussefAboElkhir19/student-management-system.git',
  },
  {
    name: 'Albatross Architects',
    category: 'wordpress',
    date: '12/2025',
    description:
      'Corporate WordPress website for an architecture and interior design firm, featuring project categories, services showcase, regional presence, and a polished client-facing contact flow.',
    tech: ['WordPress', 'Custom Theme', 'Responsive UI', 'cPanel', 'SEO'],
    demo: 'https://albatrossarchitects.com/',
  },
  {
    name: 'Al-Thaghr Printing & Packaging',
    category: 'wordpress',
    date: '12/2025',
    description:
      'Bilingual WordPress business website for a printing and packaging company, highlighting product lines, partner brands, FAQs, and lead-generation contact sections.',
    tech: ['WordPress', 'Multilingual', 'Custom Layout', 'Hosting', 'Deployment'],
    demo: 'https://althaghr.com/',
  },
];

export const freelancePlatforms = [
  {
    name: 'Kafiil',
    url: 'https://lnkd.in/d-6YBmWn',
    description: 'Hire me for freelance projects across React, Laravel, WordPress, and dashboard builds.',
  },
  {
    name: 'Mostaql',
    url: 'https://lnkd.in/duFkB7bV',
    description: 'Work with me on structured client projects, MVPs, business websites, and full-stack apps.',
  },
  {
    name: 'Nafezly',
    url: 'https://lnkd.in/dcD3Eqw4',
    description: 'Start a freelance collaboration for clean UI, APIs, admin panels, and production-ready delivery.',
  },
];
