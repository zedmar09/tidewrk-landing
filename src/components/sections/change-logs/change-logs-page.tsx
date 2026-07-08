"use client";

import { useState } from "react";
import { CalendarDays, CheckCircle2, FileText } from "lucide-react";

import type { ChangeLogEntry } from "@/constants/change-logs";

export function ChangeLogsPage({
  entries,
}: {
  entries: ChangeLogEntry[];
}) {
  const [activeEntryId, setActiveEntryId] = useState(entries[0]?.id ?? "");
  const activeEntry =
    entries.find((entry) => entry.id === activeEntryId) ?? entries[0];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02050a] px-5 py-10 text-white sm:px-8 lg:px-[6vw]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,63,114,0.48),transparent_34%),radial-gradient(ellipse_at_14%_76%,rgba(0,63,114,0.2),transparent_28%),radial-gradient(ellipse_at_88%_86%,rgba(0,63,114,0.18),transparent_30%),linear-gradient(180deg,#02050a_0%,#07111f_46%,#02050a_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#02050a] via-[#02050a]/88 to-transparent"
      />

      <div className="relative mx-auto flex w-full max-w-[1500px] flex-col gap-8 pt-12 lg:min-h-[calc(100vh-5rem)] lg:flex-row lg:pt-16">
        <aside className="lg:w-80 lg:shrink-0">
          <div className="sticky top-8 rounded-[1.35rem] border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs font-medium text-white/72">
              <span className="tidewrk-glow-badge rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em]">
                Hidden
              </span>
              Internal updates
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
              Change Logs
            </h1>
            <p className="mt-4 text-sm leading-6 text-white/58">
              Daily records for site updates, page changes, and rollout notes.
            </p>

            <div className="mt-8 space-y-2">
              {entries.map((entry) => {
                const isActive = entry.id === activeEntry.id;

                return (
                  <button
                    className={`flex w-full items-center gap-3 rounded-[1rem] border px-4 py-3 text-left transition ${
                      isActive
                        ? "border-[#003f72]/80 bg-[#003f72]/24 text-white shadow-[0_0_28px_rgba(0,63,114,0.38)]"
                        : "border-white/10 bg-white/[0.04] text-white/62 hover:border-white/18 hover:bg-white/[0.07] hover:text-white"
                    }`}
                    key={entry.id}
                    onClick={() => setActiveEntryId(entry.id)}
                    type="button"
                  >
                    <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
                    <span className="text-sm font-semibold">{entry.dateLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <section className="flex-1 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.076),rgba(255,255,255,0.032))] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm font-medium text-white/72">
            <span className="tidewrk-glow-badge rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
              {activeEntry.eyebrow}
            </span>
            {activeEntry.dateLabel}
          </div>

          <h2 className="mt-8 max-w-4xl text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-[4.9rem]">
            Site changes for{" "}
            <span className="tidewrk-glow-text">{activeEntry.dateLabel}</span>
          </h2>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/66 sm:text-2xl sm:leading-10">
            {activeEntry.summary}
          </p>

          <div className="mt-10 space-y-6">
            {activeEntry.pages.map((pageGroup) => (
              <div
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-4 sm:p-5"
                key={pageGroup.page}
              >
                <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#003f72]/60 bg-[#003f72]/24 text-white shadow-[0_0_20px_rgba(0,63,114,0.38)]">
                      <FileText className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold leading-tight text-white">
                        {pageGroup.page}
                      </h3>
                      <p className="mt-1 text-sm text-white/46">
                        {pageGroup.path}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/58">
                    {pageGroup.changes.length} change
                    {pageGroup.changes.length === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {pageGroup.changes.map((change) => (
                    <div className="flex gap-3" key={change}>
                      <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full border border-[#003f72]/50 bg-[#003f72]/18 text-white">
                        <CheckCircle2 className="size-3.5" aria-hidden="true" />
                      </span>
                      <p className="text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                        {change}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
