import { ArrowUpRight, Braces, Code2, GitBranch, Layers3 } from 'lucide-react'
import { Reveal } from './Reveal'

const groups = [
  { icon: Braces, number: '01', name: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'] },
  { icon: Code2, number: '02', name: 'Programming', items: ['Python'] },
  { icon: GitBranch, number: '03', name: 'Tools', items: ['Git', 'GitHub'] },
]

export function Skills() {
  return <section className="content-section section-shell" id="skills">
    <div className="section-heading"><div><span className="section-kicker">03 / SKILLS</span><h2>My current<br/><span>toolkit.</span></h2></div><p className="section-summary">The tools I use to shape<br/>ideas into working interfaces.</p></div>
    <div className="skill-grid">{groups.map(({ icon: Icon, ...group }, index) => <Reveal key={group.number} delay={index * .06}><article className="skill-card"><span className="skill-card-icon"><Icon size={19}/></span><span className="skill-card-number">{group.number}</span><h3>{group.name}</h3><div className="skill-chips">{group.items.map(item => <span key={item}>{item}</span>)}</div></article></Reveal>)}</div>
    <Reveal className="learning-card"><div className="learning-icon"><Layers3 size={21}/></div><div><span className="section-kicker">CURRENTLY LEARNING</span><h3>Full Stack Development</h3><p>Expanding beyond the frontend and learning to build across the stack.</p></div><span className="learning-status"><i/> IN PROGRESS</span><ArrowUpRight className="learning-arrow" size={18}/></Reveal>
  </section>
}
