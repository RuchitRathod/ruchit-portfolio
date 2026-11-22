import { ArrowUpRight, Link2, Mail } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

export function Contact() {
  const reduceMotion = useReducedMotion()

  return <section className="contact-section section-shell" id="contact">
    <motion.div className="contact-card" initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : .5 }}>
      <div className="contact-card-copy"><span className="section-kicker">05 / LET’S CONNECT</span><h2>Have an idea?<br/><span>Let’s talk.</span></h2><p>Reach out to talk about opportunities, collaborations or building useful things.</p><div className="contact-actions"><a className="button button-primary" href="https://www.linkedin.com/in/ruchit-rathod-521266284" target="_blank" rel="noopener noreferrer"><Link2 size={16}/> Connect on LinkedIn <ArrowUpRight size={15}/></a><a className="button button-quiet" href="mailto:ruchitrathod.dev@gmail.com"><Mail size={16}/> Email me</a></div></div>
      <div className="contact-side"><span className="contact-orbit orbit-one"/><span className="contact-orbit orbit-two"/><span className="contact-orbit orbit-three"/><span className="contact-spark">✳</span><span className="contact-side-label">OPEN TO WHAT’S NEXT</span></div>
    </motion.div>
  </section>
}
