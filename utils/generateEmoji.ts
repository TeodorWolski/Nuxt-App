import { emojis } from '../constants/emojis';

export const getRandomEmoji = (): string => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};
