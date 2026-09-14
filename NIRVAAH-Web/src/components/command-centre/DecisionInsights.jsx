import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { decisionInsights } from "./commandCentreData.js";

export function DecisionInsights() {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-black text-[#052b63]">Decision Insights</h2>
      </CardHeader>
      <CardBody className="grid gap-4">
        {decisionInsights.map((insight) => {
          // The icon component is stored in data so each insight can choose its own visual cue.
          const Icon = insight.icon;

          return (
            <article className="flex gap-3 border-l-4 border-[#075db7] pl-3" key={insight.title}>
              <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-lg bg-[#e9f3fd] text-[#075db7]">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div>
                <strong className="block text-sm font-black text-[#052b63]">{insight.title}</strong>
                <p className="mt-1 text-sm leading-6 text-[#526276]">{insight.text}</p>
              </div>
            </article>
          );
        })}
      </CardBody>
    </Card>
  );
}
