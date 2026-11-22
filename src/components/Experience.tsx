import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { Reveal } from './Reveal'

export function Experience() {
  return <section className="content-section section-shell" id="experience">
    <div className="section-heading"><div><span className="section-kicker">04 / BACKGROUND</span><h2>Experience &<br/><span>education.</span></h2></div><p className="section-summary">What I’ve learned from work<br/>and formal study.</p></div>
    <div className="background-grid">
      <Reveal className="background-card"><div className="background-card-head"><span className="background-icon"><BriefcaseBusiness size={18}/></span><span className="section-kicker">WORK EXPERIENCE</span></div><div className="background-date">APRIL 2025 — JULY 2026</div><h3>IT Executive</h3><p className="background-org">Raichura Energy Pvt. Ltd.</p><ul><li>Provided IT support and troubleshooting.</li><li>Resolved ERP issues and supported purchase department operations.</li><li>Coordinated ERP migration from Octabees to Odoo.</li></ul></Reveal>
      <Reveal className="background-card" delay={.08}><div className="background-card-head"><span className="background-icon"><GraduationCap size={18}/></span><span className="section-kicker">EDUCATION</span></div><article className="education-entry"><span className="education-level">POSTGRADUATE</span><h3>Master of Computer Applications</h3><p className="background-org">Information Technology · Surendranagar University</p><div className="education-meta"><span>Graduated</span><span>CGPA <b>8.4</b></span></div></article><article className="education-entry"><span className="education-level">UNDERGRADUATE</span><h3>Bachelor of Computer Applications</h3><div className="education-meta"><span>CGPA <b>7.9</b></span></div></article></Reveal>
    </div>
  </section>
}
