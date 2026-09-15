import { ArrowRight, ShieldAlert } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { PageHero } from "../ui/PageHero.jsx";

export function CommandHero() {
  return (
    <PageHero
      eyebrow="PAIMANA July 2026 · Risk model v0.3"
      title="Command Centre"
      titleId="command-title"
      description="Start here to understand portfolio health, what changed this cycle, and which infrastructure projects need intervention next."
      tone="navy"
    >
      <aside className="grid w-full gap-3 rounded-[8px] border border-[#c9d6e2] bg-white p-3 sm:min-w-[22rem] sm:grid-cols-[40px_1fr_auto] sm:items-center">
        <span className="grid size-10 place-items-center rounded-[6px] bg-[#fef2f2] text-[#b91c1c]">
          <ShieldAlert className="size-5" aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block text-[11px] font-black uppercase text-[#748397]">Immediate queue</span>
          <strong className="mt-1 block text-sm font-black text-[#0b2545]">7 critical interventions need owner review</strong>
        </span>
        <Button as="a" href="/nirvaah/early-warnings" variant="secondary" className="w-full sm:w-fit">
          Review
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </aside>
    </PageHero>
  );
}
