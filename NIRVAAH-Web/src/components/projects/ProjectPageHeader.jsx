import React from "react";
import { MapPin, Megaphone } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { PageHero } from "../ui/PageHero.jsx";

/**
 * Top introduction for the Projects page.
 *
 * It tells officers what the workspace is for and repeats the source of risk
 * scoring so the page feels transparent.
 */
export function ProjectPageHeader() {
  return (
    <PageHero
      eyebrow="Projects"
      title="All Infrastructure Projects"
      titleId="projects-title"
      description="Find, compare and investigate infrastructure projects by risk, ministry, sector, schedule condition and warning evidence."
      tone="green"
    >
      <div className="grid min-w-0 gap-3 lg:w-[460px]">
        <aside className="grid min-w-0 gap-3 rounded-[8px] border border-[#c9d6e2] bg-white p-3 sm:grid-cols-[40px_1fr]">
          <span className="grid size-10 place-items-center rounded-[6px] bg-[#ecfdf3] text-[#166534]">
            <Megaphone className="size-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <strong className="block text-sm font-black text-[#0b2545]">PAIMANA source data with NIRVAAH risk scoring.</strong>
            <span className="mt-1 block text-sm leading-6 text-[#263d59]">
              Current table is sorted by projects that need officer attention first.
            </span>
          </div>
        </aside>
        <Button type="button" variant="secondary" className="w-full justify-center lg:w-fit">
          <MapPin className="size-4" aria-hidden="true" />
          View on Map
        </Button>
      </div>
    </PageHero>
  );
}
