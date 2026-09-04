import { MapPin, Clock, Users, ArrowUpRight } from 'lucide-react'

const challenges = [
  {
    department: 'Ministry of Urban Affairs',
    status: 'Open',
    title: 'AI-driven traffic flow optimization for tier-2 cities',
    category: 'Smart Mobility',
    budget: '₹2.5 Cr',
    location: 'Pan-India',
    deadline: '18 days left',
    applicants: 42,
  },
  {
    department: 'Department of Health',
    status: 'Open',
    title: 'Early-warning system for rural disease outbreaks',
    category: 'HealthTech',
    budget: '₹1.8 Cr',
    location: 'Rajasthan',
    deadline: '9 days left',
    applicants: 67,
  },
  {
    department: 'Ministry of Agriculture',
    status: 'Piloting',
    title: 'Satellite crop-yield prediction for MSP planning',
    category: 'AgriTech',
    budget: '₹3.2 Cr',
    location: 'Punjab & Haryana',
    deadline: 'In pilot',
    applicants: 28,
  },
]

export function FeaturedChallenges() {
  return (
    <section className="px-6 py-14 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-innovate">
              Live Now
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
              Featured challenges
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
          >
            View all challenges
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {c.category}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                    c.status === 'Open' ? 'text-chart-5' : 'text-innovate'
                  }`}
                >
                  <span
                    className={`size-2 rounded-full ${
                      c.status === 'Open' ? 'bg-chart-5' : 'bg-innovate'
                    }`}
                  />
                  {c.status}
                </span>
              </div>

              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {c.department}
              </p>
              <h3 className="mt-1 text-base font-semibold leading-snug text-foreground">
                {c.title}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-brand">
                  <span className="font-sans">₹</span>
                  <span className="font-mono">{c.budget.replace('₹', '')}</span>
                </span>
                <span className="text-xs text-muted-foreground">budget</span>
              </div>

              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 shrink-0" />
                  {c.location}
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Clock className="size-4 shrink-0" />
                    {c.deadline}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="size-4 shrink-0" />
                    {c.applicants} applied
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
