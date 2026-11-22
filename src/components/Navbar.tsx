import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Experience', '#experience']] as const

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return <header className="navbar"><div className="navbar-inner section-shell"><a className="brand" href="#home" onClick={closeMenu} aria-label="Ruchit Rathod, home">RR<span>.</span></a><nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}</nav><a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={14}/></a><button className="mobile-menu" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button></div></header>
}
