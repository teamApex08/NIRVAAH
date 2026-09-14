import { Card, CardBody, CardHeader } from "../ui/Card.jsx";

export function GeographicRisk() {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-black text-[#052b63]">Geographic Risk Distribution</h2>
      </CardHeader>
      <CardBody>
        {/* Tabs preview the different map layers the real version will support. */}
        <div className="flex flex-wrap gap-2">
          {["Risk", "Project Count", "Cost Exposure"].map((tab, index) => (
            <button
              className={`rounded-full px-3 py-1.5 text-xs font-black ${
                index === 0 ? "bg-[#075db7] text-white" : "bg-[#eef6ff] text-[#075db7]"
              }`}
              type="button"
              key={tab}
            >
              {tab}
            </button>
          ))}
        </div>
        <div
          className="mt-5 h-48 rounded-lg border border-[#d5e1ec] bg-[radial-gradient(circle_at_54%_36%,rgba(6,74,165,0.42)_0_12px,transparent_13px),radial-gradient(circle_at_44%_57%,rgba(7,95,196,0.32)_0_18px,transparent_19px),radial-gradient(circle_at_62%_63%,rgba(7,95,196,0.2)_0_14px,transparent_15px),linear-gradient(135deg,transparent_20%,#cde5fa_20%_68%,transparent_68%)]"
          aria-label="India risk map"
        />
      </CardBody>
    </Card>
  );
}
