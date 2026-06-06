export function estimateReadingMinutes(html: string): number {
  const text = html.replace(/<[^>]*>/g, ' ');

  const words = text
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  return Math.max(1, Math.ceil(words.length / 180));
}