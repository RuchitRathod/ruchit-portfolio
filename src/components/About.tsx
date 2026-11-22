import { ArrowDownRight, Sparkles } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { Reveal } from './Reveal'

const introductions = {
  Build: { label: '01 / BUILD', title: 'Make ideas useful.', text: 'I enjoy turning ideas into functional web applications and sharpening the details that make them clear and easy to use.' },
  Teach: { label: '02 / TEACH', title: 'Share what I learn.', text: 'I like making technical ideas easier to approach and sharing what I’m learning as I grow across frontend and full-stack development.' },
  Connect: { label: '03 / CONNECT', title: 'Build through good conversations.', text: 'Thoughtful work starts with understanding people. I value clear communication, collaboration, and building for real needs.' },
}

type IntroTab = keyof typeof introductions

export function About() {
  const [activeTab, setActiveTab] = useState<IntroTab>('Build')
  const reduceMotion = useReducedMotion()
  const activeIntro = introductions[activeTab]

  return <section className="content-section section-shell" id="about">
    <div className="section-heading"><div><span className="section-kicker">01 / ABOUT</span><h2>A little about<br/><span>how I build.</span></h2></div><span className="section-aside">CURIOUS BY NATURE<br/>GROWING BY PRACTICE</span></div>
    <div className="about-layout">
      <Reveal className="about-statement"><span className="statement-icon"><Sparkles size={18}/></span><p>I’m a developer interested in building functional web applications, solving problems and expanding my knowledge of frontend and full-stack development.</p></Reveal>
      <Reveal className="about-detail" delay={.08}><p>I enjoy taking an idea, understanding the people it needs to serve, and shaping it into something useful. I’m continuing to grow my frontend craft while learning more about the full stack.</p><a className="inline-link" href="#experience">A BIT MORE ABOUT MY JOURNEY <ArrowDownRight size={15}/></a></Reveal>
    </div>
    <Reveal className="intro-tabs-panel">
      <div className="intro-tab-list" role="group" aria-label="Ways I approach development">{(Object.keys(introductions) as IntroTab[]).map(tab => <button key={tab} type="button" aria-pressed={activeTab === tab} className={activeTab === tab ? 'intro-tab active' : 'intro-tab'} onClick={() => setActiveTab(tab)}>{tab}<span>↗</span></button>)}</div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={activeTab} className="intro-tab-content" initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -8 }} transition={{ duration: reduceMotion ? 0 : .24 }}>
          <span className="section-kicker">{activeIntro.label}</span><h3>{activeIntro.title}</h3><p>{activeIntro.text}</p>
        </motion.div>
      </AnimatePresence>
    </Reveal>
  </section>
}
