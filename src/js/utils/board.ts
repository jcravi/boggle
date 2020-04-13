import seedrandom from 'seedrandom';
import { dies } from './../data/dies.json';

export const newBoard = (seed = 'blah') => {
  console.log('Creating new board with seed', seed);

  // https://github.com/davidbau/seedrandom
  const random = seedrandom.alea(seed);

  const sequence = getDieSequence(random);
  
  let board: string[][] = [];
  let seqIndex = 0;
  
  // Populate the 4x4 board sequentially
  for (var i = 0; i < 4; i++) {
    board[i] = [];
    for (var j = 0; j < 4; j++) {
      const index = sequence[seqIndex++];
      const die = dies[index];
      const dieFaceIndex = randomInt(random, 6)
      const dieFace = die[dieFaceIndex];
      board[i][j] = dieFace;
    }
  }
  return board;
};

// Returns a random sequence of dies to process
const getDieSequence = (random: seedrandom.prng): Array<number> => {
  // create array populated with numbers 0-15
  let array = Array.from(Array(16).keys());
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
