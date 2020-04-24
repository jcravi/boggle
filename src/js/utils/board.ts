import seedrandom from 'seedrandom';

import { dies } from './../data/dies.json';
import { BOARD_DIMENSIONS, SEED, INDEX } from '../constants';
import { TileType } from '../types';

type DIES = {
  [key: string]: string[][];
};

// Returns a random sequence of dies to process
const getDieSequence = (random: seedrandom.prng): Array<number> => {
  // create array populated with numbers 0- DIM*DIM
  let array = Array.from(Array(BOARD_DIMENSIONS * BOARD_DIMENSIONS).keys());
  // https://javascript.info/task/shuffle
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  for (let i = array.length - 1; i > 0; i--) {
    let j = randomInt(random, i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Returns a random number up to specified max
const randomInt = (random: seedrandom.prng, max: number): number => {
  return Math.floor(random() * max);
};

// Get the next seed (for sharing)
const nextSeed = (random: seedrandom.prng): string => {
  let result = '';
  for (let i = 0; i < SEED.SIZE; i++) {
    result += SEED.BASE[randomInt(random, SEED.BASE.length)];
  }
  return result;
};

// Orchestrates creation of random generator and the board
// Also create the next seed based on the current one
export const newBoard = (seed: string) => {
  const lowerSeed = seed.toLowerCase();

  // https://github.com/davidbau/seedrandom
  const random = seedrandom.alea(lowerSeed);

  const sequence = getDieSequence(random);

  let board: string[][] = [];
  let seqIndex = 0;

  const currentDies = (dies as DIES)[`dies${BOARD_DIMENSIONS}`];

  // Populate the 4x4 board sequentially
  for (var i = 0; i < BOARD_DIMENSIONS; i++) {
    board[i] = [];
    for (var j = 0; j < BOARD_DIMENSIONS; j++) {
      const index = sequence[seqIndex++];
      const die = currentDies[index];
      const dieFaceIndex = randomInt(random, 6);
      const dieFace = die[dieFaceIndex];
      board[i][j] = dieFace;
    }
  }
  return { board, nextSeed: nextSeed(random) };
};

// Get the score for the given word
export const score = (word: string): number => {
  switch (word.length) {
    case 3:
    case 4:
      return 1;
    case 5:
      return 2;
    case 6:
      return 3;
    case 7:
      return 5;
    default:
      return 11;
  }
};

// Word should be valid per Boggle rules
// And should not have been entered before
export const isWordAllowed = (word: string, existingWords: string[]): boolean => {
  if (word.length < 3 || existingWords.includes(word)) {
    // Two letter words not allowed
    // Repeated words not allowed
    return false;
  } else {
    // Word allowed
    return true;
  }
};

// Check to see if the current tile is adjacent to the last one
// Is there a better looking way to do this?
export const isTileAdjacent = (last: TileType, current: TileType): boolean => {
  const { column: lastColumnIndex, row: lastRowIndex } = toId(last.id);
  const { column: currentColumnIndex, row: currentRowIndex } = toId(current.id);

  const allowedColumn = Math.abs(lastColumnIndex - currentColumnIndex) <= 1;
  const allowedRow = Math.abs(lastRowIndex - currentRowIndex) <= 1;

  return allowedColumn && allowedRow;
};

// helper method to convert a string id to the positional index on the board
const toId = (id: string): { column: number; row: number } => {
  const [columnValue, rowValue] = id.split('');

  const column = INDEX.COLUMNS.indexOf(columnValue);
  const row = INDEX.ROWS.indexOf(rowValue);

  return { column, row };
};

// I moved this here so that only one file understands how to construct/deconstruct the key/id
export const getId = (column: number, row: number): string => {
  return INDEX.COLUMNS[column] + INDEX.ROWS[row];
};

// Is the current tile the one before the latest one
// This will allow users to back track words
export const isBackTrack = (selection: Array<TileType>, current: TileType): boolean => {
  if (selection.length > 1) {
    // Has at least two elements
    const previous = selection[selection.length - 2];
    return previous.id === current.id;
  } else {
    return false;
  }
};

// Was the tile previously selected
export const wasPreviouslySelected = (selection: Array<TileType>, current: TileType): boolean => {
  return selection.map((x) => x.id).includes(current.id);
};
