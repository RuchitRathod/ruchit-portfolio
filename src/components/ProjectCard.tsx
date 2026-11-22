import { ArrowUpRight, ChevronDown, CodeXml } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import type { ProjectScreenshot } from '../data/projectScreenshots'
import { ProjectGallery } from './ProjectGallery'
import { Reveal } from './Reveal'

type ProjectCardProps = {
  number: string
  title: string
  category: string
  summary: string
  details: string[]
  technologies: string[]
  screenshots: ProjectScreenshot[]
  repository?: string
  caveat?: string
  delay?: number
}

export function ProjectCard({ number, title, category, summary, details, technologies, screenshots, repository, caveat, delay = 0 }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)
  const reduceMotion = useReducedMotion()
  const detailId = `project-details-${number}`

  return <Reveal delay={delay}>
    <motion.article className="project-card" whileHover={reduceMotion ? undefined : { y: -3 }} transition={{ type: 'spring', stiffness: 260, damping: 24 }}>
      <ProjectGallery projectName={title} screenshots={screenshots}/>
      <button className="project-accordion-trigger" type="button" aria-expanded={expanded} aria-controls={detailId} onClick={() => setExpanded(value => !value)}>
        <span className="project-trigger-copy"><span className="project-overline">{number} / {category}</span><strong>{title}</strong><span className="project-summary">{summary}</span></span>
        <span className="project-trigger-action"><span>{expanded ? 'LESS' : 'DETAILS'}</span><motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: reduceMotion ? 0 : .22 }}><ChevronDown size={17}/></motion.span></span>
      </button>
      <AnimatePresence initial={false}>
        {expanded && <motion.div id={detailId} className="project-accordion-content" initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduceMotion ? undefined : { height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : .3, ease: 'easeInOut' }}>
          <div className="project-details-inner"><ul>{details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="project-tags">{technologies.map(technology => <span key={technology}>{technology}</span>)}</div><div className="project-card-footer">{caveat && <span className="project-caveat">{caveat}</span>}{repository && <a className="project-repo-link" href={repository} target="_blank" rel="noopener noreferrer"><CodeXml size={15}/> Source on GitHub <motion.span whileHover={reduceMotion ? undefined : { x: 3, y: -3 }} transition={{ duration: .18 }}><ArrowUpRight size={13}/></motion.span></a>}</div></div>
        </motion.div>}
      </AnimatePresence>
    </motion.article>
  </Reveal>
}
