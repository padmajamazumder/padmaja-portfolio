export type CatPose = 'box' | 'keyboard' | 'loaf' | 'nap' | 'book' | 'cup';

export const catMoments: { pose: CatPose; description: string; note: string; caption: string }[] = [
  { pose: 'box', description: 'A smiling cat tucked into a cardboard box, with its paws over the edge.', note: 'if it fits, it sits.', caption: 'Thinking outside the box. From inside the box.' },
  { pose: 'keyboard', description: 'A cat resting its paws on a keyboard.', note: 'senior keyboard supervisor', caption: 'The code was fine. Then the cat added seven semicolons.' },
  { pose: 'loaf', description: 'An orange cat sitting like a little loaf, with its paws tucked away.', note: 'freshly baked, mostly asleep', caption: 'No thoughts. Just loaf.' },
  { pose: 'nap', description: 'An orange cat curled up asleep, with little sleep marks above it.', note: 'do not disturb the research', caption: 'Currently debugging a dream.' },
  { pose: 'book', description: 'A cat peeking over an open book, with its paws on the pages.', note: 'one more chapter…', caption: 'The plot thickens. The cat naps.' },
  { pose: 'cup', description: 'An orange cat sitting next to a warm cup, with a little heart above it.', note: 'a very important tea break', caption: 'A warm cup. A soft cat. A perfectly reasonable plan.' },
];
