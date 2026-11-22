import { Reveal } from './Reveal'
import { ProjectCard } from './ProjectCard'
import { caDataDeskScreenshots, taskScreenshots } from '../data/projectScreenshots'

export function Projects() {
  return <section className="content-section section-shell" id="projects">
    <Reveal className="section-heading"><div><span className="section-kicker">02 / SELECTED WORK</span><h2>Projects with<br/><em>purpose.</em></h2></div><p className="section-summary">Explore the work, screenshots<br/>and details behind each project.</p></Reveal>
    <div className="project-list">
      <ProjectCard
        number="01"
        title="Task Management System"
        category="TEAM WORKFLOW"
        summary="Role-based admin and employee workspaces for managing tasks and tracking team progress."
        details={[
          'Admin dashboard for managing employees, assigning tasks and reviewing overall task progress.',
          'Employee dashboard for reviewing assignments and updating task status.',
          'Frontend demo persists its sample data in browser local storage; backend integration is future work.',
        ]}
        technologies={['React', 'JavaScript', 'Context API', 'Tailwind CSS', 'Vite', 'Local storage']}
        screenshots={taskScreenshots}
        repository="https://github.com/RuchitRathod/employee-management-system"
        caveat="Client-side demo authentication only; not production authentication."
      />
      <ProjectCard
        number="02"
        title="CA DataDesk"
        category="ACCOUNTING WORKFLOWS"
        summary="A workspace for Chartered Accountants to manage clients, documents and structured data workflows."
        details={[
          'Manage client information and documents in one workspace.',
          'Import CSV and Excel files, map columns, normalize fields and validate records.',
          'Support data reconciliation workflows for client records.',
        ]}
        technologies={['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma']}
        screenshots={caDataDeskScreenshots}
        caveat="Project details reflect the supplied summary; no source repository was available for implementation review."
        delay={.08}
      />
    </div>
  </section>
}
