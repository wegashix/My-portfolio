import { lazy, Suspense, memo } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { useTranslation } from '@/i18n'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'
import { CustomCursor } from '@/components/ui/CustomCursor'

const About = lazy(() => import('@/components/sections/About'))
const Skills = lazy(() => import('@/components/sections/Skills'))
const Projects = lazy(() => import('@/components/sections/Projects'))
const Experience = lazy(() => import('@/components/sections/Experience'))
const Contact = lazy(() => import('@/components/sections/Contact'))

function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-20" aria-hidden="true">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)]" />
    </div>
  )
}

function App() {
  const { t } = useTranslation()

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
      </Helmet>

      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <BackToTop />
    </HelmetProvider>
  )
}

export default memo(App)
