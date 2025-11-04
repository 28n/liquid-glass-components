"use client";

import { useState } from "react";
import {
  LiquidBadge,
  LiquidButton,
  LiquidCard,
  LiquidInput,
  LiquidStat,
  LiquidToggle,
  liquidComponents,
} from "./components/liquid-components";

export default function Home() {
  const [email, setEmail] = useState("");
  const [autopilot, setAutopilot] = useState(true);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.35),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(192,132,252,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-sky-400/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-[140px]" />
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20 md:px-12">
        <header className="flex flex-col gap-6 text-balance md:max-w-3xl">
          <LiquidBadge tone="neutral">Liquid glass UI kit</LiquidBadge>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Prismatic surfaces and micro-interactions for immersive product teams.
          </h1>
          <p className="text-lg text-slate-200/80 md:text-xl">
            Drop these composable primitives into any Next.js project. Each piece is built with glassmorphism,
            gradient energy, and carefully tuned motion to keep experiences fluid and premium without requiring
            third-party dependencies.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <LiquidButton onClick={() => console.log("create account")}>Create account</LiquidButton>
            <LiquidButton pill={false} className="bg-gradient-to-br from-white/20 via-white/10 to-white/5 text-white">
              Download preset
            </LiquidButton>
          </div>
        </header>

        <LiquidCard
          title="Automation autopilot"
          subtitle="Zero-config flows across your product stack"
          href="https://nextjs.org/"
          ctaLabel="Preview workflows"
          className="max-w-3xl"
        >
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <LiquidInput
                label="Invite collaborator"
                placeholder="aria@liquid.studio"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                hint="Send an invite with one click"
              />
              <LiquidToggle
                label="Autopilot"
                pressed={autopilot}
                onPressedChange={setAutopilot}
              >
                {autopilot ? "Enabled • Optimizing in real time" : "Paused • Manual control"}
              </LiquidToggle>
            </div>
            <LiquidStat value="98.6%" label="Deployment confidence" trend="up" />
          </div>
        </LiquidCard>

        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Component showcase</h2>
            <p className="text-sm text-slate-200/70">
              Every component ships with gradients, frosted glass backdrops, and motion-driven hover states ready
              for reuse.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {liquidComponents.map((entry) => (
              <article key={entry.name} className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{entry.name}</h3>
                <p className="text-sm text-slate-200/70">{entry.description}</p>
                <div className="flex items-center justify-center">
                  {renderPreview(entry.name)}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function renderPreview(name: string) {
  switch (name) {
    case "LiquidCard":
      return (
        <LiquidCard title="Glass dashboard" subtitle="Radiant quick metrics" className="w-full">
          <div className="grid gap-3 text-sm text-slate-100/90">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <span>Realtime seats</span>
              <span className="font-semibold">24</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <span>Response time</span>
              <span className="font-semibold">148ms</span>
            </div>
          </div>
        </LiquidCard>
      );
    case "LiquidButton":
      return <LiquidButton>Primary action</LiquidButton>;
    case "LiquidInput":
      return (
        <LiquidInput
          label="Workspace name"
          placeholder="liquid-glass"
          hint="Seen by teammates"
        />
      );
    case "LiquidToggle":
      return (
        <LiquidToggle defaultPressed label="Notifications">
          Smart alerts enabled
        </LiquidToggle>
      );
    case "LiquidBadge":
      return (
        <div className="flex flex-wrap items-center gap-3">
          <LiquidBadge>Live</LiquidBadge>
          <LiquidBadge tone="positive">Success</LiquidBadge>
          <LiquidBadge tone="neutral">Beta</LiquidBadge>
        </div>
      );
    case "LiquidStat":
      return <LiquidStat value="72" label="Launch velocity" trend="steady" />;
    default:
      return null;
  }
}
