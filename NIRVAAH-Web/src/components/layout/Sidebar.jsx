import { NavLink } from "react-router-dom";
import { BrandMark } from "../shared/BrandMark.jsx";
import { dashboardNavItems } from "./dashboardNavItems.js";

function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-[#052b63] px-4 py-5 text-white lg:flex">
      
      {/* Logo */}
      <NavLink
        to="/nirvaah"
        className="rounded-lg bg-white/[0.08] p-3"
      >
        <BrandMark compact inverse />
      </NavLink>

      {/* Navigation */}
      <nav className="mt-6 flex flex-col gap-1">
        {dashboardNavItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                [
                  "flex min-h-11 items-center gap-3 rounded-md px-3",
                  "text-sm font-bold text-white/[0.78]",
                  "transition",
                  "hover:bg-white/10 hover:text-white",
                  isActive &&
                    "bg-[#075db7] text-white shadow-[0_12px_22px_rgba(0,0,0,0.18)]",
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className="size-4 shrink-0"
                    aria-hidden="true"
                  />

                  <span className="flex-1">
                    {item.label}
                  </span>

                  {/* Active indicator */}
                  {isActive && (
                    <span
                      className="h-2 w-2 rounded-full bg-white"
                      aria-hidden="true"
                    />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Card */}
      <div className="mt-auto rounded-lg border border-white/10 bg-white/[0.08] p-4">
        <strong className="block text-sm font-black">
          Viksit Bharat 2047
        </strong>

        <span className="mt-1 block text-xs text-white/[0.65]">
          People · Data · Progress
        </span>
      </div>
    </aside>
  );
}

export default Sidebar;