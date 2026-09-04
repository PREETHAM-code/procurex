import { Landmark, Rocket, ArrowRight, Check } from 'lucide-react'

const workspaces = [
  {
    index: '01',
    tag: 'Official Access',
    icon: Landmark,
    title: 'Government',
    role: 'Government Official',
    description:
      'Create public challenges, discover relevant startups, evaluate solutions and manage pilot programs — all from one procurement workspace.',
    features: [
      'Publish problem statements & RFPs',
      'AI-matched startup shortlists',
      'Structured evaluation & scoring',
      'Pilot tracking and procurement',
    ],
    accent: 'brand',
    cta: 'Enter Government Portal',
  },
  {
    index: '02',
    tag: 'Innovator Access',
    icon: Rocket,
    title: 'Startup / Company',
    role: 'Innovation Partner',
    description:
      'Discover government opportunities, submit solutions, showcase capabilities and participate in pilot programs to win public sector contracts.',
    features: [
      'Browse open government challenges',
      'Submit and track proposals',
      'Build a verified capability profile',
      'Run pilots & manage contracts',
    ],
    accent: 'innovate',
    cta: 'Enter Startup Portal',
  },
] as const

export function WorkspaceCards() {
  return (
    <section id="workspace" className="px-6 py-14 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Get Started
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
              Choose your workspace
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Select the space that matches your role in the PROCUREX ecosystem.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {workspaces.map((ws) => {
            const isBrand = ws.accent === 'brand'
            return (
              <div
                key={ws.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex items-center justify-between px-7 py-5 ${
                    isBrand ? 'bg-brand/8' : 'bg-innovate/8'
                  }`}
                >
                  <span className="font-mono text-sm font-bold text-muted-foreground">
                    {ws.index}
                  </span>
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-widest ${
                      isBrand ? 'text-brand' : 'text-innovate'
                    }`}
                  >
                    {ws.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div
                    className={`flex size-16 items-center justify-center rounded-2xl ${
                      isBrand
                        ? 'bg-brand/10 text-brand'
                        : 'bg-innovate/10 text-innovate'
                    }`}
                  >
                    <ws.icon className="size-8" />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
                    {ws.title}
                  </h3>
                  <p
                    className={`text-sm font-semibold ${
                      isBrand ? 'text-brand' : 'text-innovate'
                    }`}
                  >
                    {ws.role}
                  </p>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {ws.description}
                  </p>

                  <ul className="mt-6 flex flex-col gap-3">
                    {ws.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-foreground"
                      >
                        <span
                          className={`flex size-5 shrink-0 items-center justify-center rounded-full ${
                            isBrand
                              ? 'bg-brand/10 text-brand'
                              : 'bg-innovate/10 text-innovate'
                          }`}
                        >
                          <Check className="size-3" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                      isBrand
                        ? 'bg-brand text-brand-foreground'
                        : 'bg-innovate text-innovate-foreground'
                    }`}
                  >
                    {ws.cta}
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
