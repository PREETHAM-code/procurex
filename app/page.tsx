import { AppSidebar } from '@/components/app-sidebar'
import { Hero } from '@/components/hero'
import { StatsBar } from '@/components/stats-bar'
import { WorkspaceCards } from '@/components/workspace-cards'
import { HowItWorks } from '@/components/how-it-works'
import { FeaturedChallenges } from '@/components/featured-challenges'
import { CtaFooter } from '@/components/cta-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <main className="lg:pl-64">
        <Hero />
        <StatsBar />
        <WorkspaceCards />
        <HowItWorks />
        <FeaturedChallenges />
        <CtaFooter />
      </main>
    </div>
  )
}
