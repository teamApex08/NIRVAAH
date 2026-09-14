/**
 * Joins Tailwind class strings while ignoring false/empty values.
 *
 * This keeps conditional classes readable in JSX, for example:
 * cx("base-class", isActive && "active-class").
 */

export function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}
