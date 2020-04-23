import { TileType } from '../types';

export const tilesToString = (selection: Array<TileType>): string => {
  return selection.map((t) => t.value).join('');
};

export const peek = <T>(array: Array<T>): T | null => {
  if (array.length > 0) {
    return array[array.length - 1];
  } else {
    return null;
  }
};
