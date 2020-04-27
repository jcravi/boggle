export const ACTIONS = {
  SELECT_START: 'SELECT_START',
  SELECT: 'SELECT',
  SELECT_END: 'SELECT_END',
  TILE_SELECT: 'TILE_SELECT',
  TIME_END: 'TIME_END',
  NEW_GAME: 'NEW_GAME',
  SET_NEXT_SEED: 'SET_NEXT_SEED',
  START_GAME: 'START_GAME',
};

export const BOARD_DIMENSIONS = 4;

export const DOWN_SCALE = 0.4;

export const GAME_TIME = 120;

export const SEED = {
  SIZE: 4,
  BASE: '0123456789abcdefghijklmnopqrstuvwxyz',
};

// Using excel/sheets style
export const INDEX = {
  COLUMNS: ['a', 'b', 'c', 'd'],
  ROWS: ['1', '2', '3', '4'],
};

export const UNDERLINED = ['N', 'M', 'W', 'Z'];

export const SPLASHES = {
  READY: 'Ready?',
  STEADY: 'Steady ...',
  GO: 'GO!',
};
