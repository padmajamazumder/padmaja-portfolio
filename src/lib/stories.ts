import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export async function getPublishedStories() {
  return (await getCollection('stories', ({ data }) => !data.draft)).sort((a, b) => {
    const byDate = (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0);
    return byDate || (a.data.order ?? Infinity) - (b.data.order ?? Infinity) || a.id.localeCompare(b.id);
  });
}

export function readingMinutes(story: CollectionEntry<'stories'>) {
  return story.data.readTimeMinutes ?? Math.max(1, Math.ceil((story.body ?? '').split(/\s+/).filter(Boolean).length / 180));
}

export function formatStoryDate(date: Date) {
  return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
