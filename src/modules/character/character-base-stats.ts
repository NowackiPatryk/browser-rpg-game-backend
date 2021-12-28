import { Character } from './character.entity';

export const characterBaseStats: Omit<Character, 'id' | 'nick' | 'user'> = {
  hp: 100,
  level: 1,
  currentExp: 0,
  expRequiredToNextLevel: 100,
  strength: 10,
  agility: 5,
  luck: 5,
};
