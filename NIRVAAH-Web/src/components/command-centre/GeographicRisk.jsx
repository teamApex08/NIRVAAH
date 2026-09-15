import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { geographicRisk } from "./commandCentreData.js";

export function GeographicRisk() {
  return (
    <Card>
      <CardHeader>
        <h2 className="nirvaah-section-title">Geographic Risk Focus</h2>
        <p className="mt-1 text-sm leading-6 text-[#526276]">States where exposure and warning evidence should be reviewed first.</p>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="divide-y divide-[#e7eff7]">
          {geographicRisk.map((item) => (
            <li className="grid gap-2 p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center" key={item.state}>
              <span className="min-w-0">
                <strong className="block text-sm font-black text-[#0b2545]">{item.state}</strong>
                <span className="mt-1 block text-sm font-semibold leading-6 text-[#526276]">{item.driver}</span>
              </span>
              <span className="text-left sm:text-right">
                <strong className="block text-sm font-black text-[#b91c1c]">{item.attention}</strong>
                <span className="mt-1 block text-xs font-semibold text-[#748397]">{item.exposure}</span>
              </span>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}
