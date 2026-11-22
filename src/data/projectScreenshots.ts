import adminDashboard from '../assets/projects/task-admin-dashboard.jpg'
import employeeDashboard from '../assets/projects/task-employee-dashboard.jpg'
import employeeManagement from '../assets/projects/task-employee-management.jpg'
import taskWorkflow from '../assets/projects/task-workflow.jpg'

export type ProjectScreenshot = { label: string; src: string }

export const taskScreenshots: ProjectScreenshot[] = [
  { label: 'Admin dashboard', src: adminDashboard },
  { label: 'Employee dashboard', src: employeeDashboard },
  { label: 'Employee management', src: employeeManagement },
  { label: 'Task assignment workflow', src: taskWorkflow },
]

const caScreenshotFiles = import.meta.glob<string>('../assets/projects/ca-datadesk/*.png', {
  eager: true,
  import: 'default',
  query: '?url',
})

const caScreenshotLabels = [
  ['01-dashboard.png', 'Dashboard'],
  ['02-client-management.png', 'Client management'],
  ['03-document-management.png', 'Document management'],
  ['04-data-import.png', 'Data import & mapping'],
  ['05-data-reconciliation.png', 'Data reconciliation'],
] as const

export const caDataDeskScreenshots: ProjectScreenshot[] = caScreenshotLabels.flatMap(([filename, label]) => {
  const src = caScreenshotFiles[`../assets/projects/ca-datadesk/${filename}`]
  return src ? [{ label, src }] : []
})
