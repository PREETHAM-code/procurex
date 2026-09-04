import { ArrowRight } from 'lucide-react'

export function CtaFooter() {
  return (
    <>
      <section className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-sidebar px-8 py-12 md:px-14 md:py-16">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-sidebar-foreground md:text-4xl">
                Ready to turn public challenges into deployed innovation?
              </h2>
              <p className="mt-3 text-pretty text-sidebar-foreground/70">
                Join departments and startups already collaborating on PROCUREX to
                solve problems that matter.
              </p>
            </div>
            <a
              href="#workspace"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-innovate px-6 py-3.5 text-sm font-semibold text-innovate-foreground transition-transform hover:-translate-y-0.5"
            >
              Get started
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-brand text-xs font-bold text-brand-foreground">
              PX
            </div>
            <span className="font-semibold text-foreground">PROCUREX</span>
          </div>
          <p>Connecting Government with Innovation.</p>
          <p>© {new Date().getFullYear()} PROCUREX. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
