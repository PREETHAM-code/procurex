'use client'

import { useState } from 'react'
import {
  Home,
  Landmark,
  Rocket,
  Sparkles,
  Info,
  LifeBuoy,
  ShieldCheck,
  X,
  Menu,
} from 'lucide-react'

const mainMenu = [
  { label: 'Home', icon: Home, active: true },
  { label: 'Government', icon: Landmark, active: false },
  { label: 'Startups', icon: Rocket, active: false },
  { label: 'Innovation Hub', icon: Sparkles, active: false },
]

const support = [
  { label: 'About', icon: Info },
  { label: 'Help', icon: LifeBuoy },
]

function SidebarContent() {
  return (
    <div className="flex h-full flex-col">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex size-11 items-center justify-center rounded-xl bg-brand font-bold text-brand-foreground">
          PX
        </div>
        <div className="leading-tight">
          <p className="text-base font-bold tracking-tight text-sidebar-foreground">
            PROCUREX
          </p>
          <p className="text-xs text-sidebar-foreground/60">Innovation Platform</p>
        </div>
      </div>

      <nav className="flex-1 px-4">
        <p className="px-3 pb-2 pt-4 text-[11px] font-semibold uppercase tracking-widest text-sidebar-foreground/45">
          Main Menu
        </p>
        <ul className="flex flex-col gap-1">
          {mainMenu.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                aria-current={item.active ? 'page' : undefined}
                className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-sidebar-foreground text-sidebar shadow-sm'
                    : 'text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                }`}
              >
                <item.icon className="size-[18px]" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="px-3 pb-2 pt-6 text-[11px] font-semibold uppercase tracking-widest text-sidebar-foreground/45">
          Support
        </p>
        <ul className="flex flex-col gap-1">
          {support.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/75 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <item.icon className="size-[18px]" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Secure badge */}
      <div className="p-4">
        <div className="flex items-center gap-3 rounded-xl bg-sidebar-accent px-4 py-3">
          <div className="flex size-8 items-center justify-center rounded-lg bg-chart-5/20 text-chart-5">
            <ShieldCheck className="size-[18px]" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-sidebar-accent-foreground">
              Secure
            </p>
            <p className="text-xs text-sidebar-foreground/60">Platform</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AppSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-sidebar px-4 py-3 lg:hidden">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-brand text-sm font-bold text-brand-foreground">
            PX
          </div>
          <span className="font-bold text-sidebar-foreground">PROCUREX</span>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 text-sidebar-foreground hover:bg-sidebar-accent"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 bg-sidebar lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside className="absolute inset-y-0 left-0 w-64 bg-sidebar">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-4 rounded-lg p-2 text-sidebar-foreground hover:bg-sidebar-accent"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  )
}
