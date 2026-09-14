import React from "react";
import { ArrowLeft, Construction } from "lucide-react";
import { DashboardLayout } from "../../../components/layout/DashboardLayout.jsx";
import { Button } from "../../../components/ui/Button.jsx";
import { Card, CardBody } from "../../../components/ui/Card.jsx";

/**
 * Placeholder route for /projects.
 *
 * It keeps navigation links working while the full project list/detail module
 * is still being designed.
 */
function ProjectsPage() {
  return (
    <DashboardLayout activePath="/projects">
      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-3xl">
          <CardBody className="p-8 text-center">
            <span className="mx-auto grid size-14 place-items-center rounded-lg bg-[#e9f3fd] text-[#075db7]">
              <Construction className="size-7" aria-hidden="true" />
            </span>
            <h1 className="mt-5 text-3xl font-black text-[#052b63]">Projects workspace</h1>
            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#526276]">
              This route is reserved for the project list and detail workflows. It keeps Command Centre links usable
              while we build the next module.
            </p>
            <Button as="a" className="mt-6" href="/command-centre" variant="secondary">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Command Centre
            </Button>
          </CardBody>
        </Card>
      </main>
    </DashboardLayout>
  );
}

export default ProjectsPage;
