import { useRef, useCallback, memo, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'
import { projects, type Project } from '@/data/portfolio'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionWrapper, SectionLabel, SectionHeading, SectionDescription } from '@/components/ui/SectionWrapper'
import { useTranslation } from '@/i18n'

const TILT_MAX = 5
const SPRING = { stiffness: 280, damping: 26, mass: 0.7 }
const isFine = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

const ProjectCard = memo(function ProjectCard({ project, index, featured }: { project: Project; index: number; featured: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const pt = t.projects.items[project.id]
  const statusLabel = t.projects.statuses[project.status] ?? project.status
  const statusColor = { Live: 'green' as const, 'In Progress': 'amber' as const, Archived: 'slate' as const }

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, SPRING)
  const springY = useSpring(rotateY, SPRING)

  const handleMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isFine) return
    const rect = ref.current.getBoundingClientRect()
    rotateX.set(((e.clientY - rect.top) / rect.height - 0.5) * -TILT_MAX * 2)
    rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * TILT_MAX * 2)
  }, [rotateX, rotateY])

  const onLeave = useCallback(() => { rotateX.set(0); rotateY.set(0) }, [rotateX, rotateY])

  return (
    <motion.article ref={ref}
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={isFine ? handleMove : undefined} onMouseLeave={isFine ? onLeave : undefined}
      style={isFine ? { rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' as const } : undefined}
      className={['group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]',
        'transition-[border-color,box-shadow] duration-200', 'hover:shadow-[var(--shadow-lg)] hover:border-[var(--accent)]/20',
        featured ? 'sm:col-span-2' : ''].join(' ')}>
      <div className={['relative overflow-hidden bg-[var(--surface-2)]', featured ? 'aspect-[2.2/1]' : 'aspect-video'].join(' ')}>
        {project.image ? (
          <img src={project.image} alt={pt?.title ?? project.title} loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]`}>
            <span className="text-4xl sm:text-5xl font-black text-[var(--text)]/[0.05] tracking-tighter select-none">{pt?.title ?? project.title}</span>
          </div>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-[var(--text)]/0 opacity-0 transition-all duration-300 group-hover:bg-[var(--text)]/50 group-hover:opacity-100"
            aria-label={`${t.projects.visitSite} — ${pt?.title ?? project.title}`}>
            <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-lg">
              {t.projects.visitSite} <ArrowUpRight size={14} />
            </span>
          </a>
        )}
        <div className="absolute right-3 top-3 z-10">
          <Badge color={statusColor[project.status]} dot={project.status === 'Live'} pulse={project.status === 'Live'}>{statusLabel}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
        <h3 className="text-base sm:text-lg font-bold text-[var(--text)] tracking-tight">{pt?.title ?? project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
          {featured ? (pt?.longDescription ?? project.longDescription) : (pt?.description ?? project.description)}
        </p>
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {project.stack.map(tech => (
            <span key={tech} className="rounded-md bg-[var(--surface-2)] px-2 py-0.5 text-[11px] font-mono font-medium text-[var(--text-muted)] border border-[var(--border)]">{tech}</span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 pt-3.5 border-t border-[var(--border)]">
          {project.liveUrl && (
            <Button variant="secondary" size="sm" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={13} />{t.projects.liveDemo}
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="ghost" size="sm" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={13} />{t.projects.code}
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  )
})

function ProjectsInner() {
  const { t } = useTranslation()
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <SectionLabel>{t.projects.label}</SectionLabel>
          <SectionHeading>{t.projects.heading}</SectionHeading>
          <SectionDescription>{t.projects.description}</SectionDescription>
        </SectionWrapper>
        <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} featured={project.featured && i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(ProjectsInner)
