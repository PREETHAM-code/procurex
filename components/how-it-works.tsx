import { FileText, Search, ClipboardCheck, Handshake } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: 'Publish the challenge',
    description:
      'Government departments define a public problem statement with scope, budget and evaluation criteria.',
  },
  {
    icon: Search,
    title: 'Discover solutions',
    description:
      'AI matches the challenge with relevant startups and surfaces qualified, verified innovators.',
  },
  {
    icon: ClipboardCheck,
    title: 'Evaluate & pilot',
    description:
      'Score proposals with a structured rubric, then run controlled pilots with shortlisted teams.',
  },
  {
    icon: Handshake,
    title: 'Procure with confidence',
    description:
      'Convert successful pilots into transparent, audit-ready procurement contracts.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how"
      className="border-y border-border bg-card px-6 py-14 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            The Process
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            From problem to procurement
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            A transparent, four-step pathway that turns public sector needs into
            deployed innovation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border bg-background p-6"
            >
              <span className="font-mono text-sm font-bold text-muted-foreground/50">
                Step {i + 1}
              </span>
              <div className="mt-3 flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <step.icon className="size-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
