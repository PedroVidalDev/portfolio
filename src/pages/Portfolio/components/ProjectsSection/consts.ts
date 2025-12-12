import SphynxImage from 'assets/projects/sphynx.png'
import F20 from 'assets/projects/f20.png'
import TaskvelImage from 'assets/projects/taskvel.png'
import type { LocalizedString } from 'types/LocalizedString'

type ProjectsItemType = {
  name: string
  technologies: string[]
  description: LocalizedString
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
    description: {
      en: 'A comprehensive security system designed to prevent unauthorized access, control people flow, and enhance security in public spaces, particularly educational institutions.',
      pt: 'Um sistema de segurança abrangente projetado para prevenir acesso não autorizado, controlar o fluxo de pessoas e aumentar a segurança em espaços públicos, particularmente instituições educacionais.',
    },
    image: SphynxImage,
    link: 'https://github.com/orgs/Cliyo/repositories',
  },
  {
    name: 'F20',
    technologies: ['React', 'TypeScript', 'Styled Components', 'CI/CD'],
    description: {
      en: 'A web application for creating and managing character sheets for the Tormenta RPG system. Features an intuitive interface for character creation, stats management, and digital sheet storage.',
      pt: 'Uma aplicação web para criar e gerenciar fichas de personagens para o sistema de RPG Tormenta. Apresenta uma interface intuitiva para criação de personagens, gerenciamento de atributos e armazenamento digital de fichas.',
    },
    image: F20,
    link: 'https://github.com/F20Org/f20-front',
  },
  {
    name: 'Taskvel Manager',
    technologies: ['PHP', 'Laravel', 'PostgreSQL', 'CRON Jobs'],
    description: {
      en: 'Taskvel is a task manager application that helps you to manage your daily tasks. It is a simple and easy to use application that helps you to manage your tasks and to-do lists.',
      pt: 'Taskvel é uma aplicação de gerenciamento de tarefas que ajuda você a gerenciar suas tarefas diárias. É uma aplicação simples e fácil de usar que ajuda você a gerenciar suas tarefas e listas de afazeres.',
    },
    image: TaskvelImage,
    link: 'https://github.com/PedroVidalDev/taskvel-manager',
  },
]
