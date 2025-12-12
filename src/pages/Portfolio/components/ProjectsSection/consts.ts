import SphynxImage from 'assets/projects/sphynx.png'
import F20 from 'assets/projects/f20.png'
import TaskvelImage from 'assets/projects/taskvel.png'

type ProjectsItemType = {
  name: string
  technologies: string[]
  description: string
  image: string
  link: string
}

export const PROJECTS_ITEMS: ProjectsItemType[] = [
  {
    name: 'Sphynx',
    technologies: [
      'React',
      'TypeScript',
      'Spring Boot',
      'PostgreSQL',
      'Docker',
    ],
    description:
      'A comprehensive security system designed to prevent unauthorized access, control people flow, and enhance security in public spaces, particularly educational institutions. Features a web platform connected to ESP32 microcontroller for real-time access control and monitoring.',
    image: SphynxImage,
    link: 'https://github.com/orgs/Cliyo/repositories',
  },
  {
    name: 'F20',
    technologies: ['React', 'TypeScript', 'Styled Components', 'CI/CD'],
    description:
      'A web application for creating and managing character sheets for the Tormenta RPG system. Features an intuitive interface for character creation, stats management, and digital sheet storage.',
    image: F20,
    link: 'https://github.com/F20Org/f20-front',
  },
  {
    name: 'Taskvel Manager',
    technologies: ['PHP', 'Laravel', 'PostgreSQL', 'PostgreSQL', 'CRON Jobs'],
    description:
      'Taskvel is a task manager application that helps you to manage your daily tasks. It is a simple and easy to use application that helps you to manage your tasks and to-do lists.',
    image: TaskvelImage,
    link: 'https://github.com/PedroVidalDev/taskvel-manager',
  },
]
