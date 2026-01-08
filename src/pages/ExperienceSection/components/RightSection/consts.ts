import type { LocalizedString } from 'types/LocalizedString'

type ExperienceItem = {
  date: LocalizedString
  title: LocalizedString
  company: string
  skills?: string[]
  description?: LocalizedString[]
  link?: string
}

export const ExperienceTitleMap = {
  experience: {
    en: 'Professional Journey',
    pt: 'Jornada Profissional',
  },
  education: {
    en: 'Education',
    pt: 'Formação',
  },
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    date: {
      en: 'Jun 2025 - Present · 8 months',
      pt: 'Jun 2025 - Presente · 8 meses',
    },
    title: {
      en: 'Junior Fullstack Developer',
      pt: 'Desenvolvedor Fullstack Júnior',
    },
    company: 'Valcenter Planejados',
    skills: [
      'TypeScript',
      'React.js',
      'React Three Fiber',
      'Full-time',
      'Hybrid',
    ],
    description: [
      {
        en: 'Development and maintenance of back-end systems using TypeScript.',
        pt: 'Desenvolvimento e manutenção de sistemas back-end utilizando TypeScript.',
      },
      {
        en: 'Front-end development using React.js with React Three Fiber.',
        pt: 'Desenvolvimento front-end utilizando React.js com React Three Fiber.',
      },
    ],
  },
  {
    date: {
      en: 'Jul 2024 - Jun 2025 · 1 year',
      pt: 'Jul 2024 - Jun 2025 · 1 ano',
    },
    title: {
      en: 'IT Intern',
      pt: 'Estagiário de TI',
    },
    company: 'NewGo Tecnologia',
    skills: [
      'Express.js',
      'TypeScript',
      'React.js',
      'EJS',
      'Jest',
      'Vitest',
      'Cypress',
      'Docker',
      'PostgreSQL',
      'Agile Methodology',
    ],
    description: [
      {
        en: 'Development and maintenance of back-end systems using Express.js with TypeScript.',
        pt: 'Desenvolvimento e manutenção back-end utilizando Express.js com TypeScript.',
      },
      {
        en: 'Front-end development using EJS and React.js.',
        pt: 'Desenvolvimento front-end utilizando EJS e React.js.',
      },
      {
        en: 'Writing automated tests (unit, integration, and E2E) using Jest, Vitest and Cypress.',
        pt: 'Escrita de testes automatizados (unitários, integração e E2E) utilizando Jest, Vitest e Cypress.',
      },
      {
        en: 'Using Docker for containerization and PostgreSQL databases.',
        pt: 'Utilização de Docker para containerização e bancos de dados PostgreSQL.',
      },
      {
        en: 'Experience in agile delivery methodology, focusing on open communication with the team and timely delivery to clients.',
        pt: 'Experiência em metodologia de entrega ágil, focando em comunicação aberta com a equipe e entrega para o cliente nos tempos estimados.',
      },
    ],
  },
  {
    date: {
      en: 'Jul 2024 - Dec 2024 · 6 months',
      pt: 'Jul 2024 - Dez 2024 · 6 meses',
    },
    title: {
      en: 'Programming and Robotics Teacher',
      pt: 'Professor de Programação e Robótica',
    },
    company: 'Ctrl+Play',
    skills: [
      'Programming',
      'Robotics',
      'Embedded Systems',
      'Teaching',
      'Multiple Programming Languages',
    ],
    description: [
      {
        en: 'Teaching programming and robotics to students of various age groups.',
        pt: 'Ensino de programação e robótica para alunos de diversas faixas etárias.',
      },
      {
        en: 'In-depth instruction on programming in multiple languages and robotics with embedded systems.',
        pt: 'Instrução aprofundada sobre programação em várias linguagens e robótica com sistemas embarcados.',
      },
    ],
  },
]

export const EDUCATION_ITEMS: ExperienceItem[] = [
  {
    date: {
      en: 'Dec 2025',
      pt: 'Dez 2025',
    },
    title: {
      en: 'Systems Analysis and Development',
      pt: 'Análise e Desenvolvimento de Sistemas',
    },
    company: 'Fatec Ferraz de Vasconcelos',
  },
  {
    date: {
      en: 'Oct 2024',
      pt: 'Out 2024',
    },
    title: {
      en: 'Full Stack JavaScript',
      pt: 'Formação Full stack JavaScript',
    },
    company: 'Alura',
    link: 'https://cursos.alura.com.br/degree/certificate/fb3108ca-577d-4444-9a49-88d6a9b5334d?lang',
  },
  {
    date: {
      en: 'Sep 2024',
      pt: 'Set 2024',
    },
    title: {
      en: 'Authentication, Testing and Security in Node.js',
      pt: 'Formação Autenticação, testes e segurança em Node.js',
    },
    company: 'Alura',
    link: 'https://cursos.alura.com.br/degree/certificate/9f510582-f1fe-478e-a72f-fe0a631bbf04?lang',
  },
  {
    date: {
      en: 'May 2024',
      pt: 'Mai 2024',
    },
    title: {
      en: 'Java Web: Create Applications Using Spring Boot',
      pt: 'Formação Java Web: crie aplicações usando Spring Boot',
    },
    company: 'Alura',
    link: 'https://cursos.alura.com.br/degree/certificate/56239697-ece2-40d5-870d-ed852b250483?lang',
  },
  {
    date: {
      en: 'Apr 2024',
      pt: 'Abr 2024',
    },
    title: {
      en: 'APIs with Node.js and Express',
      pt: 'Formação APIs com Node.js e Express',
    },
    company: 'Alura',
    link: 'https://cursos.alura.com.br/degree/certificate/61798eaf-00f8-4ea5-a417-22405b15ad04?lang',
  },
  {
    date: {
      en: 'Nov 2023',
      pt: 'Nov 2023',
    },
    title: {
      en: 'Java and Spring Boot',
      pt: 'Formação Java e Spring Boot',
    },
    company: 'Alura',
    link: 'https://cursos.alura.com.br/degree/certificate/10d216f2-a7c6-4b3a-b96f-32b7fae85217',
  },
  {
    date: {
      en: 'Dec 2022',
      pt: 'Dez 2022',
    },
    title: {
      en: 'Technician in Mechatronics',
      pt: 'Técnico em Mecatrônica',
    },
    company: 'ETEC Presidente Vargas',
    link: '',
  },
]
