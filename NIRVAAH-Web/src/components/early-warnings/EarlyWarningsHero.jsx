import React from "react";
import { Activity, ArrowRight, BellRing } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { PageHero } from "../ui/PageHero.jsx";

/**
 * Top page header for the Early Warnings route.
 *
 * The copy mirrors the reference screen, but the layout stays compact so the
 * warning queue remains the main working area.
 */
export function EarlyWarningsHero() {
  return (
    <PageHero
      eyebrow="Early Warnings"
      title="Early Warnings"
      titleId="early-warnings-title"
      description="Track newly detected, worsening, acknowledged and resolved warning signals across analysed infrastructure projects."
      tone="red"
    >
      <div className="grid min-w-0 gap-3 lg:w-[460px]">
        <Button type="button" variant="danger" className="w-full justify-center lg:w-fit">
          <BellRing className="size-4" aria-hidden="true" />
          Review New Warnings
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
        <aside className="rounded-md border border-[#c9d6e2] border-l-4 border-l-[#b91c1c] bg-white/90 p-4">
          <div className="grid gap-3 sm:grid-cols-[40px_1fr]">
            <span className="grid size-10 place-items-center rounded-md bg-[#fff7ed] text-[#b45309]">
              <Activity className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <strong className="block text-sm font-black text-[#0b2545]">
                NIRVAAH surfaces explainable warnings from analysed project trajectories.
              </strong>
              <span className="mt-1 block text-sm leading-6 text-[#263d59]">
                Use this page to prioritise review, acknowledge signals and generate intervention notes.
              </span>
            </div>
          </div>
        </aside>
      </div>
    </PageHero>
  );
}
