import { ArrowUpRight, CodeXml, Network } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

export function Footer() {
  const reduceMotion = useReducedMotion()

  return <footer className="footer section-shell">
    <a className="brand" href="#home" aria-label="Ruchit Rathod, back to top">RR<span>.</span></a>
    <span className="footer-credit">DESIGNED & BUILT BY RUCHIT RATHOD</span>
    <div className="footer-actions"><a className="footer-email" href="mailto:ruchitrathod.dev@gmail.com">ruchitrathod.dev@gmail.com</a><div className="socials">
      <a className="social-link" href="https://github.com/RuchitRathod" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" title="GitHub" data-tooltip="GitHub"><CodeXml size={16}/><motion.span className="social-arrow" animate={{ x: 0, y: 0 }} whileHover={reduceMotion ? undefined : { x: 2, y: -2 }} transition={{ duration: .18 }}><ArrowUpRight size={10}/></motion.span></a>
      <a className="social-link" href="https://www.linkedin.com/in/ruchit-rathod-521266284" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" title="LinkedIn" data-tooltip="LinkedIn"><Network size={16}/><motion.span className="social-arrow" animate={{ x: 0, y: 0 }} whileHover={reduceMotion ? undefined : { x: 2, y: -2 }} transition={{ duration: .18 }}><ArrowUpRight size={10}/></motion.span></a>
    </div></div>
  </footer>
}
