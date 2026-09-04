const stats = [
  { value: '340+', prefix: '', label: 'Active challenges' },
  { value: '2,100+', prefix: '', label: 'Registered startups' },
  { value: '96', prefix: '', label: 'Government departments' },
  { value: '480 Cr', prefix: '₹', label: 'Innovation procured' },
]

export function StatsBar() {
  return (
    <section className="border-b border-border bg-card px-6 py-8 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {stat.prefix && <span className="font-sans">{stat.prefix}</span>}
              <span className="font-mono">{stat.value}</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
