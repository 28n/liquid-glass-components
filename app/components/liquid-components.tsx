"use client";

import { forwardRef, useId, useState } from "react";
import type { ComponentType } from "react";
import Link from "next/link";

const cn = (...classes: Array<string | undefined | false | null>) =>
  classes.filter(Boolean).join(" ");

type LiquidComponentDescriptor = {
  name: string;
  description: string;
  Component: ComponentType<unknown>;
};

const surfaceClass =
  "group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 px-6 py-6 text-slate-100 shadow-[0_20px_45px_rgba(15,23,42,0.35)] backdrop-blur-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_35px_65px_rgba(15,23,42,0.45)]";

const surfaceAccentClass =
  "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),rgba(255,255,255,0)_65%)] before:opacity-80 before:transition-opacity before:duration-500 group-hover:before:opacity-100";

export interface LiquidCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  href?: string;
  ctaLabel?: string;
}

export const LiquidCard = forwardRef<HTMLDivElement, LiquidCardProps>(
  ({ title, subtitle, href, ctaLabel, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          surfaceClass,
          surfaceAccentClass,
          "bg-gradient-to-br from-white/15 via-white/5 to-transparent",
          "after:absolute after:-bottom-20 after:left-1/2 after:h-40 after:w-72 after:-translate-x-1/2 after:rounded-full after:bg-[radial-gradient(circle,rgba(56,189,248,0.35),rgba(192,132,252,0))] after:opacity-70 after:blur-3xl after:transition-opacity group-hover:after:opacity-100",
          className,
        )}
        {...props}
      >
        <div className="relative z-10 flex flex-col gap-4">
          {(title || subtitle) && (
            <header className="flex flex-col gap-1">
              {title && (
                <h3 className="text-lg font-semibold tracking-tight text-white drop-shadow-sm">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-sm text-slate-200/80">{subtitle}</p>
              )}
            </header>
          )}
          {children}
          {href && ctaLabel && (
            <Link
              href={href}
              className="group relative inline-flex w-fit items-center gap-2 self-start overflow-hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-inner transition-all duration-300 hover:scale-105 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            >
              <span className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),rgba(255,255,255,0))] opacity-70 transition-opacity group-hover:opacity-100" />
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    );
  },
);

LiquidCard.displayName = "LiquidCard";

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pill?: boolean;
}

export const LiquidButton = forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ pill = true, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-300/80 via-white/40 to-fuchsia-400/70 px-5 py-2 text-sm font-semibold text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_20px_35px_rgba(15,23,42,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 active:scale-95",
          pill ? "rounded-full" : "rounded-2xl",
          "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),rgba(255,255,255,0)_70%)] before:opacity-80 before:transition-opacity before:duration-300 hover:before:opacity-100",
          "after:absolute after:-inset-y-10 after:left-1/2 after:h-24 after:w-48 after:-translate-x-1/2 after:bg-[conic-gradient(from_90deg_at_50%_50%,rgba(59,130,246,0.25),rgba(236,72,153,0.25),rgba(59,130,246,0.25))] after:opacity-0 after:blur-3xl after:transition-opacity hover:after:opacity-100",
          className,
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  },
);

LiquidButton.displayName = "LiquidButton";

export interface LiquidInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
}

export const LiquidInput = forwardRef<HTMLInputElement, LiquidInputProps>(
  ({ label, hint, className, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <label htmlFor={inputId} className="flex w-full flex-col gap-2 text-sm text-slate-100">
        {label && <span className="pl-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200/80">{label}</span>}
        <div
          className={cn(
            "relative flex items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 shadow-[0_18px_40px_rgba(15,23,42,0.35)] transition-all duration-300 hover:border-white/30",
            "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-[linear-gradient(135deg,rgba(56,189,248,0.35),rgba(192,132,252,0.35))] before:opacity-60 before:transition-opacity before:duration-300 focus-within:before:opacity-100",
            className,
          )}
        >
          <input
            ref={ref}
            id={inputId}
            className="w-full bg-transparent py-3 text-base text-white placeholder:text-slate-200/60 focus:outline-none"
            {...props}
          />
          <span className="pointer-events-none absolute inset-y-0 right-4 my-auto h-8 w-[1px] bg-white/20" />
          <span className="pointer-events-none absolute inset-y-0 right-2 my-auto h-6 w-6 rounded-full bg-gradient-to-br from-white/60 to-white/10 opacity-80 blur-sm" />
        </div>
        {hint && <span className="pl-1 text-xs text-slate-200/70">{hint}</span>}
      </label>
    );
  },
);

LiquidInput.displayName = "LiquidInput";

export interface LiquidToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  label?: string;
}

export const LiquidToggle = forwardRef<HTMLButtonElement, LiquidToggleProps>(
  (
    { pressed, defaultPressed = false, onPressedChange, label, className, children, ...props },
    ref,
  ) => {
    const [internalPressed, setInternalPressed] = useState(defaultPressed);
    const isControlled = pressed !== undefined;
    const isActive = isControlled ? pressed : internalPressed;

    const handleToggle = () => {
      const next = !isActive;
      if (!isControlled) {
        setInternalPressed(next);
      }
      onPressedChange?.(next);
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={isActive}
        onClick={(event) => {
          props.onClick?.(event);
          if (!event.defaultPrevented) {
            handleToggle();
          }
        }}
        className={cn(
          "group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-left text-sm text-white shadow-[0_18px_40px_rgba(15,23,42,0.35)] transition-all duration-300 ease-out",
          isActive
            ? "bg-gradient-to-br from-emerald-300/70 via-white/30 to-sky-400/70 hover:-translate-y-0.5"
            : "hover:-translate-y-0.5 hover:bg-white/15",
          "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),rgba(255,255,255,0)_70%)] before:opacity-70 before:transition-opacity before:duration-300 hover:before:opacity-100",
          className,
        )}
        {...props}
      >
        <span
          className={cn(
            "relative flex h-6 w-10 flex-shrink-0 items-center rounded-full border border-white/30 bg-white/20 px-1 transition-colors",
            isActive ? "border-emerald-200/70" : "border-white/40",
          )}
        >
          <span
            className={cn(
              "absolute inset-y-1 h-4 w-4 rounded-full bg-gradient-to-br from-white to-white/30 shadow-[0_6px_18px_rgba(15,23,42,0.35)] transition-transform duration-300",
              isActive ? "translate-x-4" : "translate-x-0",
            )}
          />
        </span>
        <span className="relative flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200/80">
            {label ?? "Status"}
          </span>
          <span className="text-sm text-slate-50">
            {children ?? (isActive ? "Enabled" : "Disabled")}
          </span>
        </span>
      </button>
    );
  },
);

LiquidToggle.displayName = "LiquidToggle";

export interface LiquidBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "positive" | "informative" | "neutral";
}

export const LiquidBadge = forwardRef<HTMLSpanElement, LiquidBadgeProps>(
  ({ tone = "informative", className, children, ...props }, ref) => {
    const toneClass =
      tone === "positive"
        ? "from-emerald-300/80 via-white/40 to-emerald-500/60 text-emerald-950"
        : tone === "neutral"
          ? "from-white/70 via-white/30 to-white/10 text-slate-900"
          : "from-sky-300/80 via-white/40 to-indigo-500/60 text-slate-900";

    return (
      <span
        ref={ref}
        className={cn(
          "relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 bg-gradient-to-br px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] shadow-[0_12px_24px_rgba(15,23,42,0.35)]",
          toneClass,
          "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),rgba(255,255,255,0)_75%)] before:opacity-80",
          className,
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </span>
    );
  },
);

LiquidBadge.displayName = "LiquidBadge";

export interface LiquidStatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  trend?: "up" | "down" | "steady";
}

export const LiquidStat = forwardRef<HTMLDivElement, LiquidStatProps>(
  ({ value, label, trend = "steady", className, ...props }, ref) => {
    const trendLabel =
      trend === "up" ? "Upward trend" : trend === "down" ? "Downward trend" : "No change";

    const trendColor =
      trend === "up"
        ? "text-emerald-300"
        : trend === "down"
          ? "text-rose-300"
          : "text-slate-200";

    const trendGlow =
      trend === "up"
        ? "bg-[radial-gradient(circle,rgba(16,185,129,0.4),transparent_70%)]"
        : trend === "down"
          ? "bg-[radial-gradient(circle,rgba(248,113,113,0.4),transparent_70%)]"
          : "bg-[radial-gradient(circle,rgba(148,163,184,0.35),transparent_70%)]";

    return (
      <div
        ref={ref}
        className={cn(
          surfaceClass,
          surfaceAccentClass,
          "relative flex flex-col gap-3 overflow-hidden",
          className,
        )}
        {...props}
      >
        <div className={cn("absolute inset-0 -z-10 blur-3xl", trendGlow)} />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200/80">
          {label}
        </span>
        <div className="flex items-end justify-between">
          <span className="text-4xl font-semibold leading-none text-white drop-shadow-sm">
            {value}
          </span>
          <span className={cn("text-sm font-medium", trendColor)}>{trendLabel}</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-200/70">
          <span className="inline-flex h-2 w-2 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
          <span>Auto-refresh enabled</span>
        </div>
      </div>
    );
  },
);

LiquidStat.displayName = "LiquidStat";

export const liquidComponents: LiquidComponentDescriptor[] = [
  {
    name: "LiquidCard",
    description: "A versatile glass surface for layouts, hero panels, or feature callouts.",
    Component: LiquidCard,
  },
  {
    name: "LiquidButton",
    description: "Primary action button with gradient sheen and hover micro-interactions.",
    Component: LiquidButton,
  },
  {
    name: "LiquidInput",
    description: "Frosted glass form control with animated gradient focus state.",
    Component: LiquidInput,
  },
  {
    name: "LiquidToggle",
    description: "Accessible toggle with built-in pressed state management.",
    Component: LiquidToggle,
  },
  {
    name: "LiquidBadge",
    description: "Chromatic badge for labeling or highlighting live states.",
    Component: LiquidBadge,
  },
  {
    name: "LiquidStat",
    description: "Metric display with contextual glow and stat trend messaging.",
    Component: LiquidStat,
  },
];

export type { LiquidComponentDescriptor };
