import { profile } from '../data/profile'
import { skills } from '../data/skills'
import { projects } from '../data/projects'

export function usePortfolio() {
  return {
    profile,
    skills,
    projects,
  }
}
