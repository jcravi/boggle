import { TileType } from '../types';

// Converts an array of TileTypes to a string
export const tilesToString = (selection: Array<TileType>): string => {
  return selection.map((t) => t.value).join('');
};

// TODO: This is a very generic method, probably belongs in a different file
// Helper peek method that can tell us the last element in an array without removing it from the array
export const peek = <T>(array: Array<T>): T | null => {
  if (array.length > 0) {
    return array[array.length - 1];
  } else {
    return null;
  }
};
