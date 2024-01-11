export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function parseDate(date: string): Date {
  return new Date(Date.parse(date));
}
