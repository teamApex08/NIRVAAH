import React from "react";
import { ArrowLeft, Construction } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody } from "../ui/Card.jsx";
import { projectsPlaceholder } from "./projectsData.js";

/**
 * Placeholder content for the Projects route.
 *
 * Keeping this outside src/pages/ProjectsPage.jsx lets the page stay thin and
 * makes future Projects components easy to add beside it.
 */
export function ProjectsEmptyState() {
  return (
    <Card className="mx-auto max-w-3xl">
      <CardBody className="p-8 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-lg bg-[#e9f3fd] text-[#075db7]">
          <Construction className="size-7" aria-hidden="true" />
        </span>
        <h1 className="mt-5 text-3xl font-black text-[#052b63]">{projectsPlaceholder.title}</h1>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#526276]">{projectsPlaceholder.description}</p>
        <Button as="a" className="mt-6" href={projectsPlaceholder.ctaHref} variant="secondary">
          <ArrowLeft className="size-4" aria-hidden="true" />
          {projectsPlaceholder.ctaLabel}
        </Button>
      </CardBody>
    </Card>
  );
}
