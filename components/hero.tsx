import { Landmark, Rocket, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="border-b border-border px-6 py-12 md:px-10 lg:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand">
            Digital Innovation Platform
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Connecting Government <br className="hidden md:block" />
            with <span className="text-brand">Innovation.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            PROCUREX brings public sector challenges and startup solutions together —
            making it easier to discover, evaluate, pilot and procure innovation for
            public needs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#workspace"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Choose your workspace
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              How it works
            </a>
          </div>
        </div>

        {/* Connection diagram */}
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm md:gap-6 md:p-8">
          <div className="flex flex-col items-center gap-3">
            <div className="flex size-20 items-center justify-center rounded-2xl bg-brand/10 text-brand md:size-24">
              <Landmark className="size-9 md:size-11" />
            </div>
            <span className="text-sm font-semibold text-brand">Government</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-px w-12 border-t-2 border-dashed border-muted-foreground/40 md:w-16" />
            <ArrowRight className="mt-1 size-4 text-muted-foreground/60" />
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex size-20 items-center justify-center rounded-2xl bg-innovate/10 text-innovate md:size-24">
              <Rocket className="size-9 md:size-11" />
            </div>
            <span className="text-sm font-semibold text-innovate">Startups</span>
          </div>
        </div>
      </div>
    </section>
  )
}
