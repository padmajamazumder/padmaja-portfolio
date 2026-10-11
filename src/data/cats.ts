export type CatPose = 'box' | 'keyboard' | 'loaf' | 'nap' | 'book' | 'cup';

export const catMoments: { pose: CatPose; description: string; note: string; caption: string }[] = [
  { pose: 'box', description: 'A smiling cat tucked into a cardboard box, with its paws over the edge.', note: 'if it fits, it sits.', caption: 'Why do cats love boxes? Great rooms. Absolutely no rent.' },
  { pose: 'keyboard', description: 'A cat resting its paws on a keyboard.', note: 'senior keyboard supervisor', caption: 'Why did the cat sit on my laptop? It was keeping an eye on the mouse.' },
  { pose: 'loaf', description: 'An orange cat sitting like a little loaf, with its paws tucked away.', note: 'freshly baked, mostly asleep', caption: 'Why did the cat open a bakery? It was already an expert loaf.' },
  { pose: 'nap', description: 'An orange cat curled up asleep, with little sleep marks above it.', note: 'do not disturb the research', caption: 'My cat has a five-year plan. It’s mostly naps.' },
  { pose: 'book', description: 'A cat peeking over an open book, with its paws on the pages.', note: 'one more chapter…', caption: 'Why did the cat join a book club? It heard there would be tails.' },
  { pose: 'cup', description: 'An orange cat sitting next to a warm cup, with a little heart above it.', note: 'a very important tea break', caption: 'I asked my cat to spill the tea. It knocked over the cup.' },
];
