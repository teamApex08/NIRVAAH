import React from "react";
import { UsersRound } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { teamMembers } from "./settingsData.js";

/**
 * Compact access-management table.
 *
 * It keeps user management visible without turning Settings into a heavy admin
 * console before backend permissions are connected.
 */
export function TeamAccessTable() {
  return (
    <Card className="min-w-0 border-l-4 border-l-[#475569]">
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="mr-auto">
          <h2 className="text-lg font-black text-[#0b2545]">Team Access</h2>
          <p className="mt-1 text-sm leading-6 text-[#526276]">View people and groups connected to this workspace.</p>
        </div>
        <Button type="button" variant="secondary" className="w-full sm:w-auto">
          <UsersRound className="size-4" aria-hidden="true" />
          Manage Access
        </Button>
      </CardHeader>
      <CardBody className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="bg-[#f7f2e8] text-xs font-black text-[#0b2545]">
                <th className="border-b border-[#d5e1ec] px-4 py-3">Name</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">Role</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">Scope</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">Last Active</th>
                <th className="border-b border-[#d5e1ec] px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr className="text-sm text-[#263d59] transition hover:bg-[#fffdf8]" key={member.name}>
                  <td className="border-b border-[#e7eff7] px-4 py-3 font-black text-[#10233d]">{member.name}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{member.role}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{member.scope}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">{member.lastActive}</td>
                  <td className="border-b border-[#e7eff7] px-4 py-3">
                    <Pill tone={member.status === "Active" ? "green" : "orange"}>{member.status}</Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
