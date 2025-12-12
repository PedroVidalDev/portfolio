import * as DiIcons from 'react-icons/di'
import * as IoIcons from 'react-icons/fa6'

import ExpressIcon from 'assets/techs/expressjs.svg'
import NestIcon from 'assets/techs/nest.svg'

import type { LocalizedString } from 'types/LocalizedString'

type SkillType = {
  icon: keyof typeof DiIcons | keyof typeof IoIcons | string
  iconType: 'LibIcon' | 'CustomIcon'
  name: string
  type: LocalizedString
  description: LocalizedString
}

export const SKILLS_LANGUAGES: SkillType[] = [
  {
    icon: 'DiNodejsSmall',
    iconType: 'LibIcon',
    name: 'TypeScript',
    type: {
      en: 'Language',
      pt: 'Linguagem',
    },
    description: {
      en: 'Proficient in TypeScript for developing robust and type-safe applications.',
      pt: 'Proficiente em TypeScript para desenvolvimento de aplicações robustas e type-safe.',
    },
  },
  {
    icon: 'DiReact',
    iconType: 'LibIcon',
    name: 'React',
    type: {
      en: 'Library',
      pt: 'Biblioteca',
    },
    description: {
      en: 'Skilled in building dynamic web applications using React and managing state effectively.',
      pt: 'Habilidoso em construir aplicações web dinâmicas usando React e gerenciamento de estado eficaz.',
    },
  },
  {
    icon: ExpressIcon,
    iconType: 'CustomIcon',
    name: 'Express.js',
    type: {
      en: 'Library',
      pt: 'Biblioteca',
    },
    description: {
      en: 'Experienced in building backend services and APIs using Express.js.',
      pt: 'Experiente em construir serviços backend e APIs usando Express.js.',
    },
  },
  {
    icon: NestIcon,
    iconType: 'CustomIcon',
    name: 'NestJS',
    type: {
      en: 'Framework',
      pt: 'Framework',
    },
    description: {
      en: 'Experienced in building scalable and maintainable server-side applications using NestJS.',
      pt: 'Experiente em construir aplicações server-side escaláveis e manuteníveis usando NestJS.',
    },
  },
  {
    icon: 'DiJava',
    iconType: 'LibIcon',
    name: 'Java',
    type: {
      en: 'Language',
      pt: 'Linguagem',
    },
    description: {
      en: 'Experienced in Java programming for building scalable backend systems.',
      pt: 'Experiente em programação Java para construção de sistemas backend escaláveis.',
    },
  },
  {
    icon: 'FaLeaf',
    iconType: 'LibIcon',
    name: 'Spring Boot',
    type: {
      en: 'Framework',
      pt: 'Framework',
    },
    description: {
      en: 'Skilled in building dynamic web applications using Spring Boot and Java.',
      pt: 'Habilidoso em construir aplicações web dinâmicas usando Spring Boot e Java.',
    },
  },
  {
    icon: 'DiPhp',
    iconType: 'LibIcon',
    name: 'PHP',
    type: {
      en: 'Language',
      pt: 'Linguagem',
    },
    description: {
      en: 'Skilled in building dynamic web applications using PHP.',
      pt: 'Habilidoso em construir aplicações web dinâmicas usando PHP.',
    },
  },
  {
    icon: 'DiLaravel',
    iconType: 'LibIcon',
    name: 'Laravel',
    type: {
      en: 'Framework',
      pt: 'Framework',
    },
    description: {
      en: 'Skilled in building dynamic web applications using Laravel.',
      pt: 'Habilidoso em construir aplicações web dinâmicas usando Laravel.',
    },
  },
  {
    icon: 'DiPython',
    iconType: 'LibIcon',
    name: 'Python',
    type: {
      en: 'Language',
      pt: 'Linguagem',
    },
    description: {
      en: 'Experienced in Python programming for data analysis, scripting, and web development.',
      pt: 'Experiente em programação Python para análise de dados, scripting e desenvolvimento web.',
    },
  },
]

export const SKILLS_TOOLS: SkillType[] = [
  {
    icon: 'DiGit',
    iconType: 'LibIcon',
    name: 'Git',
    type: {
      en: 'Version Control',
      pt: 'Controle de Versão',
    },
    description: {
      en: 'Proficient in using Git for version control and collaborative development.',
      pt: 'Proficiente em usar Git para controle de versão e desenvolvimento colaborativo.',
    },
  },
  {
    icon: 'DiGithubAlt',
    iconType: 'LibIcon',
    name: 'CI/CD',
    type: {
      en: 'DevOps',
      pt: 'DevOps',
    },
    description: {
      en: 'Experienced in setting up Continuous Integration and Continuous Deployment pipelines using GitHub Actions.',
      pt: 'Experiente em configurar pipelines de Integração Contínua e Implantação Contínua usando GitHub Actions.',
    },
  },
  {
    icon: 'DiMysql',
    iconType: 'LibIcon',
    name: 'MySQL',
    type: {
      en: 'Database',
      pt: 'Banco de Dados',
    },
    description: {
      en: 'Experienced in designing and managing relational databases using MySQL.',
      pt: 'Experiente em projetar e gerenciar bancos de dados relacionais usando MySQL.',
    },
  },
  {
    icon: 'DiPostgresql',
    iconType: 'LibIcon',
    name: 'PostgreSQL',
    type: {
      en: 'Database',
      pt: 'Banco de Dados',
    },
    description: {
      en: 'Experienced in designing and managing relational databases using PostgreSQL.',
      pt: 'Experiente em projetar e gerenciar bancos de dados relacionais usando PostgreSQL.',
    },
  },
  {
    icon: 'DiMongodb',
    iconType: 'LibIcon',
    name: 'MongoDB',
    type: {
      en: 'Database',
      pt: 'Banco de Dados',
    },
    description: {
      en: 'Experienced in designing and managing NoSQL databases using MongoDB.',
      pt: 'Experiente em projetar e gerenciar bancos de dados NoSQL usando MongoDB.',
    },
  },
  {
    icon: 'DiDocker',
    iconType: 'LibIcon',
    name: 'Docker',
    type: {
      en: 'Tool',
      pt: 'Ferramenta',
    },
    description: {
      en: 'Experienced in containerizing applications using Docker for consistent environments.',
      pt: 'Experiente em containerizar aplicações usando Docker para ambientes consistentes.',
    },
  },
]
