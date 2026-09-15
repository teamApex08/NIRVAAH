import React from "react";
import { Card, CardBody, CardHeader } from "../ui/Card.jsx";
import { Pill } from "../ui/Pill.jsx";
import { cx } from "../../lib/formatters.js";
import { channelPreferences, notificationSettings } from "./settingsData.js";
import { SettingToggle } from "./SettingToggle.jsx";

const channelTone = {
  "Email + in-app": "blue",
  "In-app": "green",
  Email: "orange",
  Muted: "slate",
};

/**
 * Notification and delivery settings.
 *
 * High-priority rules come first so the page stays operational and easy to
 * scan for officers managing many project alerts.
 */
export function NotificationsPanel() {
  return (
    <Card className="min-w-0 border-l-4 border-l-[#d97706]">
      <CardHeader>
        <h2 className="text-lg font-black text-[#0b2545]">Notifications</h2>
        <p className="mt-1 text-sm leading-6 text-[#526276]">Choose how NIRVAAH informs you about risk, warnings and scheduled outputs.</p>
      </CardHeader>
      <CardBody className="grid gap-4">
        <div className="grid gap-3">
          {notificationSettings.map((setting) => {
            const Icon = setting.icon;

            return (
              <article className="grid gap-3 rounded-md border border-[#c9d6e2] bg-white p-4 sm:grid-cols-[40px_1fr_auto]" key={setting.title}>
                <span className="grid size-10 place-items-center rounded-md bg-[#fff7ed] text-[#b45309]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-sm font-black text-[#0b2545]">{setting.title}</strong>
                    <Pill tone={channelTone[setting.channel]}>{setting.channel}</Pill>
                  </div>
                  <p className="mt-1 text-sm font-semibold leading-6 text-[#526276]">{setting.description}</p>
                </div>
                <SettingToggle enabled={setting.enabled} label={setting.title} />
              </article>
            );
          })}
        </div>

        <section aria-labelledby="channels-title">
          <h3 className="text-sm font-black text-[#0b2545]" id="channels-title">
            Delivery Channels
          </h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {channelPreferences.map((channel) => {
              const Icon = channel.icon;

              return (
                <div className={cx("grid grid-cols-[36px_1fr_auto] items-center gap-3 rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-3")} key={channel.label}>
                  <span className="grid size-9 place-items-center rounded-md bg-white text-[#0b2545]">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-black text-[#0b2545]">{channel.label}</span>
                  <SettingToggle enabled={channel.enabled} label={channel.label} />
                </div>
              );
            })}
          </div>
        </section>
      </CardBody>
    </Card>
  );
}
