import mongoose from "mongoose";

export function estimateReadingMinutes(html: string): number {
  if (!html) return 0;
  const text = html.replace(/<[^>]*>/g, ' ');

  const words = text
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  return Math.max(1, Math.ceil(words.length / 180));
}

export function getLookupQuery(idOrSlug: string) {
  if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
    return { $or: [{ _id: idOrSlug }, { slug: idOrSlug }] };
  }

  return { slug: idOrSlug };
}