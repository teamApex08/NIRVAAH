import React from "react";
import { Activity, ArrowRight, BellRing } from "lucide-react";
import { Button } from "../ui/Button.jsx";

/**
 * Top page header for the Early Warnings route.
 *
 * The copy mirrors the reference screen, but the layout stays compact so the
 * warning queue remains the main working area.
 */
export function EarlyWarningsHero() {
  return (
    <section className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
      <div className="min-w-0">
        <p className="text-sm font-bold text-[#075db7]">Early Warnings</p>
        <h1 className="mt-1 text-3xl font-black leading-tight text-[#052b63] sm:text-4xl" id="early-warnings-title">
          Early Warnings
        </h1>
        <p className="mt-2 max-w-4xl text-base font-semibold leading-7 text-[#526276]">
          Track newly detected, worsening, acknowledged and resolved warning signals across analysed infrastructure projects.
        </p>
      </div>
      <Button type="button" className="w-full lg:w-auto">
        <BellRing className="size-4" aria-hidden="true" />
        Review New Warnings
        <ArrowRight className="size-4" aria-hidden="true" />
      </Button>
      <aside className="rounded-lg border border-[#b9ddff] bg-[#eaf6ff] p-4 lg:col-span-2">
        <div className="grid gap-3 sm:grid-cols-[40px_1fr]">
          <span className="grid size-10 place-items-center rounded-lg bg-white text-[#075db7]">
            <Activity className="size-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <strong className="block text-sm font-black text-[#052b63]">
              NIRVAAH surfaces explainable warnings from analysed project trajectories.
            </strong>
            <span className="mt-1 block text-sm leading-6 text-[#263d59]">
              Use this page to prioritise review, acknowledge signals and generate intervention notes.
            </span>
          </div>
        </div>
      </aside>
    </section>
  );
}
