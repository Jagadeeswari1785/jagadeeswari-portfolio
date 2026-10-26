// ✏️ Edit this file to update the whole website.

// Add your email here (e.g. "you@example.com"). Leave empty until you decide to share one.
export const EMAIL = ''

export const profile = {
  name: 'Jagadeeswari D',
  firstName: 'Jagadeeswari',
  logo: 'JD',
  roles: ['Aspiring Software Developer', 'Python Developer', 'Full Stack Developer'],
  intro:
    'I am an Electronics and Communication Engineering student who enjoys turning ideas into useful software. I am learning Python full stack development and building projects to sharpen my problem-solving.',
  about:
    'I am studying B.E. Electronics and Communication Engineering at Saveetha Engineering College, Chennai. My hardware background taught me to think in systems, and my interest in software pulled me toward Python, web development and cloud computing. I learn by building small projects, practising problems, and improving each time.',
  resume: 'resume.pdf', // file lives in /public
}

export const socials = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/Jagadeeswari1785' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/jagadeeswari-d-58b0a3290/' },
  { id: 'leetcode', label: 'LeetCode', url: 'https://leetcode.com/u/Jaga_1785_/' },
  { id: 'freecodecamp', label: 'freeCodeCamp', url: 'https://www.freecodecamp.org/jaga_1785_/' },
]

export const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact']

export const aboutCards = [
  { icon: 'edu', title: 'Education', text: 'B.E. Electronics and Communication Engineering, Saveetha Engineering College (2023–2027).' },
  { icon: 'spark', title: 'Areas of Interest', text: 'Software Development, Python, Full Stack Development, Cloud Computing, Web Development, Generative AI.' },
  { icon: 'book', title: 'Current Learning', text: 'Python Full Stack Engineering, databases, and building web projects with React.' },
]

// level: 'Familiar with' | 'Currently Learning' | 'Interested in'  (adjust honestly)
export const skills = [
  { icon: 'code', category: 'Programming', items: [
    { name: 'Python', level: 'Currently Learning' }, { name: 'Java', level: 'Familiar with' }, { name: 'JavaScript', level: 'Familiar with' } ] },
  { icon: 'globe', category: 'Web Development', items: [
    { name: 'HTML', level: 'Familiar with' }, { name: 'CSS', level: 'Familiar with' }, { name: 'React', level: 'Currently Learning' } ] },
  { icon: 'db', category: 'Database', items: [
    { name: 'SQL', level: 'Currently Learning' }, { name: 'MySQL', level: 'Currently Learning' } ] },
  { icon: 'tool', category: 'Tools', items: [
    { name: 'Git', level: 'Familiar with' }, { name: 'GitHub', level: 'Familiar with' }, { name: 'VS Code', level: 'Familiar with' } ] },
  { icon: 'cloud', category: 'Additional Interests', items: [
    { name: 'Cloud Computing', level: 'Interested in' }, { name: 'AWS', level: 'Interested in' }, { name: 'Embedded Systems', level: 'Interested in' },
    { name: 'IoT', level: 'Interested in' }, { name: 'Generative AI', level: 'Interested in' } ] },
]

// Leave `code` or `demo` as '' to hide that button. Never add a link you have not verified.
export const projects = [
  {
    title: 'Recipe Finder', icon: 'globe',
    description: 'A responsive recipe discovery website. Search for recipes and view recipe details from an API. Users sign in with Firebase email/password authentication and save favourite recipes, stored per user in localStorage.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Recipe API', 'Firebase Auth', 'localStorage'],
    code: 'https://github.com/Jagadeeswari1785/Recepie-Finder', demo: '',
  },
  {
    title: 'Alcohol Detector and Engine Locking System', icon: 'chip',
    description: 'An embedded systems project that uses an MQ-3 alcohol sensor to detect alcohol and control whether the engine can be started. It is built to discourage drunk driving.',
    tech: ['MQ-3 Sensor', 'Embedded Systems', 'Microcontroller'],
    code: '', demo: '',
  },
  {
    title: 'Rock Paper Scissors', icon: 'game',
    description: 'An interactive game that demonstrates programming logic, conditionals and handling user input.',
    tech: ['Programming Logic', 'User Interaction'],
    code: '', demo: '',
  },
  {
    title: 'Mood-Based Music Player', icon: 'music',
    description: 'A project that connects the mood a user selects with music suggestions.',
    tech: ['Mood Selection', 'Music Suggestions'],
    code: '', demo: '',
  },
]

export const education = {
  degree: 'B.E. Electronics and Communication Engineering',
  college: 'Saveetha Engineering College, Chennai',
  years: '2023–2027',
}

export const certifications = [
  { title: 'Python Full Stack Engineering', provider: 'Cognizant Digital Nurture 5.0' },
  { title: 'Responsive Web Design', provider: 'freeCodeCamp' },
  { title: 'Database for Developers: Next Level', provider: 'Oracle' },
]
