import * as DiIcons from 'react-icons/di'
import * as IoIcons from 'react-icons/fa6'

type SkillType = {
  icon: keyof typeof DiIcons | keyof typeof IoIcons
  name: string
  type: string
  description: string
}

export const SKILLS_LANGUAGES: SkillType[] = [
  {
    icon: 'DiNodejsSmall',
    name: 'TypeScript',
    type: 'Language',
    description:
      'Proficient in TypeScript for developing robust and type-safe applications.',
  },
  {
    icon: 'DiReact',
    name: 'React',
    type: 'Library',
    description:
      'Skilled in building dynamic web applications using React and managing state effectively.',
  },
  {
    icon: 'DiJava',
    name: 'Java',
    type: 'Language',
    description:
      'Experienced in Java programming for building scalable backend systems.',
  },
  {
    icon: 'FaLeaf',
    name: 'Spring Boot',
    type: 'Framework',
    description:
      'Skilled in building dynamic web applications using Spring Boot and Java.',
  },
  {
    icon: 'DiPhp',
    name: 'PHP',
    type: 'Language',
    description: 'Skilled in building dynamic web applications using PHP.',
  },
  {
    icon: 'DiLaravel',
    name: 'Laravel',
    type: 'Framework',
    description: 'Skilled in building dynamic web applications using Laravel.',
  },
  {
    icon: 'DiPython',
    name: 'Python',
    type: 'Language',
    description:
      'Experienced in Python programming for data analysis, scripting, and web development.',
  },
]

export const SKILLS_TOOLS: SkillType[] = [
  {
    icon: 'DiGit',
    name: 'Git',
    type: 'Version Control',
    description:
      'Proficient in using Git for version control and collaborative development.',
  },
  {
    icon: 'DiGithubAlt',
    name: 'CI/CD',
    type: 'DevOps',
    description:
      'Experienced in setting up Continuous Integration and Continuous Deployment pipelines using GitHub Actions.',
  },
  {
    icon: 'DiMysql',
    name: 'MySQL',
    type: 'Database',
    description:
      'Experienced in designing and managing relational databases using MySQL.',
  },
  {
    icon: 'DiPostgresql',
    name: 'PostgreSQL',
    type: 'Database',
    description:
      'Experienced in designing and managing relational databases using PostgreSQL.',
  },
  {
    icon: 'DiMongodb',
    name: 'MongoDB',
    type: 'Database',
    description:
      'Experienced in designing and managing NoSQL databases using MongoDB.',
  },
  {
    icon: 'DiDocker',
    name: 'Docker',
    type: 'Tool',
    description:
      'Experienced in containerizing applications using Docker for consistent environments.',
  },
]
