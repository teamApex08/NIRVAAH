import React from "react";
import { UserRound } from "lucide-react";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { profileDetails, rolePermissions } from "./settingsData.js";

/**
 * Officer profile and permission summary.
 *
 * This gives users confidence about the account and scope they are currently
 * working under before they adjust preferences.
 */
export function ProfileAccessPanel() {
  return (
    <Card className="min-w-0 border-l-4 border-l-[#0b2545]">
      <CardHeader className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-md bg-[#f2f5f8] text-[#0b2545]">
          <UserRound className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-black text-[#0b2545]">Profile & Access</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">Signed-in officer context and workspace permissions.</p>
        </div>
      </CardHeader>
      <CardBody className="grid gap-4">
        <div className="grid gap-3 sm:grid-cols-2">
          {profileDetails.map((item) => (
            <div className="rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-3" key={item.label}>
              <p className="text-xs font-black uppercase tracking-wide text-[#748397]">{item.label}</p>
              <strong className="mt-1 block text-sm font-black leading-5 text-[#0b2545]">{item.value}</strong>
            </div>
          ))}
        </div>
        <section aria-labelledby="role-permissions-title">
          <h3 className="text-sm font-black text-[#0b2545]" id="role-permissions-title">
            Role Permissions
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {rolePermissions.map((permission) => (
              <Pill key={permission} tone="blue">
                {permission}
              </Pill>
            ))}
          </div>
        </section>
      </CardBody>
    </Card>
  );
}
