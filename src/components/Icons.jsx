import { GraduationCap, Sparkles, BookOpen, Code2, Globe, Database, Wrench, Cloud, Cpu, Gamepad2, Music, Github, Linkedin, Trophy, Flame } from 'lucide-react'

const map = {
  edu: GraduationCap, spark: Sparkles, book: BookOpen, code: Code2, globe: Globe, db: Database,
  tool: Wrench, cloud: Cloud, chip: Cpu, game: Gamepad2, music: Music,
  github: Github, linkedin: Linkedin, leetcode: Trophy, freecodecamp: Flame,
}

export default function Icon({ name, size = 22 }) {
  const C = map[name] || Code2
  return <C size={size} aria-hidden="true" />
}
