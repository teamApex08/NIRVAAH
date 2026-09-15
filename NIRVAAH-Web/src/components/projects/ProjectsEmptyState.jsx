import { ArrowLeft, Construction } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody } from "../ui/Card.jsx";
import { projectsPlaceholder } from "./projectsData.js";

export function ProjectsEmptyState() {
  return (
    <Card className="mx-auto max-w-3xl">
      <CardBody className="p-8 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-lg bg-[#f2f5f8] text-[#0b2545]">
          <Construction className="size-7" aria-hidden="true" />
        </span>
        <h1 className="mt-5 text-3xl font-black text-[#0b2545]">{projectsPlaceholder.title}</h1>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#526276]">{projectsPlaceholder.description}</p>
        <Button as="a" className="mt-6" href={projectsPlaceholder.ctaHref} variant="secondary">
          <ArrowLeft className="size-4" aria-hidden="true" />
          {projectsPlaceholder.ctaLabel}
        </Button>
      </CardBody>
    </Card>
  );
}
