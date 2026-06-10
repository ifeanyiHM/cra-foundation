export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(amount: number, symbol = "₦"): string {
  return `${symbol}${amount.toLocaleString("en-NG")}`;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function truncate(text: string, max: number): string {
  return text.length <= max ? text : text.slice(0, max).trimEnd() + "…";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getInitials(name: string, max = 2): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, max)
    .join("")
    .toUpperCase();
}

export function clamp(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max);
}

// export const slugify = (text: string): string => {
//   return text
//     .toLowerCase()
//     .trim()
//     .replace(/['"]/g, "") // remove quotes
//     .replace(/&/g, "and") // optional: make URLs readable
//     .replace(/[^a-z0-9\s-]/g, "") // remove special chars
//     .replace(/\s+/g, "-") // spaces → hyphens
//     .replace(/-+/g, "-"); // collapse multiple hyphens
// };
