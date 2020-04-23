import { TileType, ActionType } from '../types';
import { ACTIONS } from '../constants';
import { tilesToString, peek } from '../utils/tiles';
import { isWordAllowed, isTileAdjacent, isBackTrack, wasPreviouslySelected } from '../utils/board';

const initialState = {
  displaySplash: true, //  Whether to show the splash screen or not
  inPlay: false, // Is the game current in play? Only true when timer is running
  selecting: false, // Is the selection still being made? Touch is still active?
  coord: {
    // the coordinates of the touch
    x: 0,
    y: 0,
  },
  currentTiles: new Array<TileType>(), // What tile selection is currently in progress
  words: new Array<Array<TileType>>(), // Successfully selected words so far. I'm keeping this as TileTypes as in the future I may want to animate word selections
  seed: 'blah', // The starting seed
  nextSeed: '', // The next seed. I am storing this since I want to make a predictable sequence of new games
};

export const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ACTIONS.TOUCH_START:
      if (state.inPlay) {
        return { ...state, selecting: true, coord: action.coord };
      } else {
        return state;
      }

    case ACTIONS.TILE_SELECT:
      if (state.inPlay) {
        const last = peek(state.currentTiles);
        if (last !== null) {
          // There was at least one selection made earlier
          // The following checks have to be performed in the exact order
          if (last.id === action.current.id) {
            // current tile is the same as last tile, no change
            return state;
          } else if (isBackTrack(state.currentTiles, action.current)) {
            // If user back tracks to remove last selection
            const currentTiles = Array.from(state.currentTiles);
            currentTiles.pop();
            return {
              ...state,
              currentTiles,
            };
          } else if (wasPreviouslySelected(state.currentTiles, action.current)) {
            // should not be a previously currentTiles tile
            return state;
          } else if (isTileAdjacent(last, action.current)) {
            // need to check if the new tile is adjacent to the last one
            const currentTiles = Array.from(state.currentTiles);
            currentTiles.push(action.current);
            return {
              ...state,
              currentTiles,
            };
          } else {
            // Tile is not allowed
            return state;
          }
        } else {
          // First tile to be currentTiles, add to stack
          const currentTiles = Array.from(state.currentTiles);
          currentTiles.push(action.current);
          return {
            ...state,
            currentTiles,
          };
        }
      } else {
        return state;
      }

    case ACTIONS.TOUCH_END:
      if (state.inPlay) {
        const word = tilesToString(state.currentTiles);
        const { words } = state;
        if (
          isWordAllowed(
            word,
            words.map((x) => tilesToString(x))
          )
        ) {
          words.push(state.currentTiles);
        }
        return { ...state, selecting: false, currentTiles: new Array<TileType>(), words };
      } else {
        return state;
      }

    case ACTIONS.TIME_END:
      return { ...state, inPlay: false, selecting: false };

    case ACTIONS.NEW_GAME:
      var searchParams = new URLSearchParams(window.location.search);
      searchParams.set('seed', state.nextSeed);
      window.location.search = searchParams.toString();
      return { ...initialState, seed: state.nextSeed };

    case ACTIONS.SET_NEXT_SEED:
      return { ...state, nextSeed: action.seed };

    case ACTIONS.START_GAME:
      return { ...state, inPlay: true, displaySplash: false };

    default:
      return state;
  }
};
