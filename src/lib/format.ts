export function formatDate(date: string): string {
  if (!date) {
    return "";
  }

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

export function createExcerpt(markdown: string, maxLength = 220): string {
  const plain = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/^#{1,6}\s+.*$/gm, " ")
    .replace(/[*_`>#-]/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

  if (!plain) {
    return "";
  }

  const sentences = plain.match(/[^.!?]+[.!?]+/g);
  const firstTwo = sentences ? sentences.slice(0, 2).join(" ").trim() : plain;

  if (firstTwo.length <= maxLength) {
    return firstTwo;
  }

  return `${firstTwo.slice(0, maxLength).trimEnd()}…`;
}
