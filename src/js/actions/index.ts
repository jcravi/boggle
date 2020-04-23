import React from 'react';
import { ACTIONS } from '../constants';
import { TileType } from '../types';

export const onTouchMoveAction = (e: React.TouchEvent<HTMLDivElement>) => ({
  type: ACTIONS.TOUCH_START,
  coord: { x: e.touches[0].clientX, y: e.touches[0].clientY },
});

export const onTouchEndAction = () => ({
  type: ACTIONS.TOUCH_END,
});

export const onTileSelectAction = (tile: TileType) => ({
  type: ACTIONS.TILE_SELECT,
  current: tile,
});

export const onTimerEndedAction = () => ({
  type: ACTIONS.TIME_END,
});

export const newGameAction = () => ({
  type: ACTIONS.NEW_GAME,
});

export const setNextSeedAction = (seed: string) => ({
  type: ACTIONS.SET_NEXT_SEED,
  seed,
});

export const startGameAction = () => ({
  type: ACTIONS.START_GAME,
});
