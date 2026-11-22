import { ArrowDown, ArrowRight, Code2, CodeXml, Link2, MapPin } from 'lucide-react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef, type PointerEvent } from 'react'
import profileImage from '../assets/profile.jpg'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 95, damping: 24, mass: .7 })
  const smoothY = useSpring(pointerY, { stiffness: 95, damping: 24, mass: .7 })
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const portraitScroll = useTransform(scrollYProgress, [0, 1], [0, 24])

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse' || !window.matchMedia('(min-width: 768px) and (pointer: fine)').matches) return
    const bounds = heroRef.current?.getBoundingClientRect()
    if (!bounds) return
    pointerX.set(((event.clientX - bounds.left) / bounds.width - .5) * 12)
    pointerY.set(((event.clientY - bounds.top) / bounds.height - .5) * 10)
  }

  const handlePointerLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return <section ref={heroRef} className="hero section-shell" id="home" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
    <div className="hero-atmosphere" aria-hidden="true"><span/><span/><span/></div>
    <motion.div className="hero-intro" initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .6 }}>
      <span className="availability"><i/> PERSONAL PORTFOLIO</span>
      <span className="hero-location"><MapPin size={13}/> INDIA</span>
    </motion.div>
    <motion.div className="portrait-stage" style={{ y: reduceMotion ? 0 : portraitScroll }} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduceMotion ? 0 : .7 }}>
      <motion.div className="portrait-parallax" style={reduceMotion ? undefined : { x: smoothX, y: smoothY }}>
        <motion.div className="portrait-glow" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0, scale: .75 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduceMotion ? 0 : .9, ease: 'easeOut' }}/>
        <motion.div className="portrait-ring" initial={reduceMotion ? false : { clipPath: 'circle(0% at 50% 50%)', scale: .94 }} animate={{ clipPath: 'circle(50% at 50% 50%)', scale: 1 }} transition={{ duration: reduceMotion ? 0 : 1.1, delay: .08, ease: [0.22, 1, .36, 1] }}>
          <img src={profileImage} alt="Fictional generated portrait used as a temporary avatar" fetchPriority="high" />
        </motion.div>
        <span className="portrait-orbit orbit-a" aria-hidden="true"/><span className="portrait-orbit orbit-b" aria-hidden="true"/>
        <span className="portrait-stamp"><Code2 size={14}/> CURIOUS BY DESIGN</span>
      </motion.div>
    </motion.div>
    <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .26, duration: reduceMotion ? 0 : .65, ease: 'easeOut' }}>
      <p className="hero-role">FRONTEND DEVELOPER <span>·</span> CURRENTLY LEARNING FULL STACK</p>
      <h1>Ruchit Rathod<span>.</span></h1>
      <p className="hero-tagline">Building useful digital experiences,<br className="desktop-break"/> one project at a time.</p>
      <div className="hero-actions">
        <a className="button button-primary" href="https://www.linkedin.com/in/ruchit-rathod-521266284" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <Link2 size={16}/></a>
        <a className="button button-quiet" href="#projects">Explore projects <ArrowRight size={15}/></a>
      </div>
      <div className="hero-social"><a href="https://github.com/RuchitRathod" target="_blank" rel="noopener noreferrer"><CodeXml size={14}/> github.com/RuchitRathod</a><a href="#about">A LITTLE ABOUT ME <ArrowDown size={12}/></a></div>
    </motion.div>
    <a className="hero-scroll" href="#about" aria-label="Scroll to about section"><span>SCROLL TO EXPLORE</span><ArrowDown size={13}/></a>
  </section>
}
