import * as IoIcons from 'react-icons/fa6'

type SkillType = {
  icon: keyof typeof IoIcons
  name: string
  description: string
}

export const SKILLS: SkillType[] = [
  {
    icon: 'FaNodeJs',
    name: 'TypeScript',
    description:
      'Proficient in TypeScript for developing robust and type-safe applications.',
  },
  {
    icon: 'FaJava',
    name: 'Java',
    description:
      'Experienced in Java programming for building scalable backend systems.',
  },
  {
    icon: 'FaPhp',
    name: 'PHP',
    description: 'Skilled in building dynamic web applications using PHP.',
  },
  {
    icon: 'FaReact',
    name: 'React',
    description:
      'Skilled in building dynamic web applications using React and managing state effectively.',
  },
  {
    icon: 'FaLeaf',
    name: 'Spring Boot',
    description:
      'Skilled in building dynamic web applications using Spring Boot and Java.',
  },
  {
    icon: 'FaLaravel',
    name: 'Laravel',
    description: 'Skilled in building dynamic web applications using Laravel.',
  },
]
