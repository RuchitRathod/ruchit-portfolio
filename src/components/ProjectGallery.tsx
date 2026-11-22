import { ArrowLeft, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import type { ProjectScreenshot } from '../data/projectScreenshots'

type ProjectGalleryProps = { projectName: string; screenshots: ProjectScreenshot[] }

export function ProjectGallery({ projectName, screenshots }: ProjectGalleryProps) {
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()

  if (screenshots.length === 0) return null

  const safeIndex = Math.min(active, screenshots.length - 1)
  const current = screenshots[safeIndex]
  const move = (direction: number) => setActive(index => (index + direction + screenshots.length) % screenshots.length)
  const panelId = `${projectName.toLowerCase().replaceAll(' ', '-')}-screenshot-panel`

  return <div className="project-gallery">
    <div className="gallery-photo-frame" id={panelId} role="tabpanel" aria-label={`${projectName}: ${current.label}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.img key={current.src} src={current.src} alt={`${current.label} screenshot from ${projectName}`} className="gallery-photo" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduceMotion ? undefined : { opacity: 0 }} transition={{ duration: reduceMotion ? 0 : .28 }} />
      </AnimatePresence>
      <div className="gallery-overlay"><span>{current.label.toUpperCase()}</span><span>{String(safeIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}</span></div>
      {screenshots.length > 1 && <>
        <motion.button className="gallery-arrow gallery-prev" type="button" aria-label={`Previous ${projectName} screenshot`} onClick={() => move(-1)} whileHover={reduceMotion ? undefined : { x: -2 }} transition={{ duration: .18 }}><ArrowLeft size={15}/></motion.button>
        <motion.button className="gallery-arrow gallery-next" type="button" aria-label={`Next ${projectName} screenshot`} onClick={() => move(1)} whileHover={reduceMotion ? undefined : { x: 2 }} transition={{ duration: .18 }}><ArrowRight size={15}/></motion.button>
      </>}
    </div>
    {screenshots.length > 1 && <div className="gallery-tabs" role="group" aria-label={`${projectName} screenshots`}>{screenshots.map((screenshot, index) => <button key={screenshot.src} type="button" aria-pressed={safeIndex === index} className={safeIndex === index ? 'gallery-tab active' : 'gallery-tab'} onClick={() => setActive(index)}>{screenshot.label}</button>)}</div>}
  </div>
}
