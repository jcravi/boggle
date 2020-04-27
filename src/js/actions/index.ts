import React from 'react';

import { ACTIONS } from '../constants';
import { TileType } from '../types';

export const onPointerDownAction = (e: React.PointerEvent<HTMLDivElement>) => ({
  type: ACTIONS.SELECT_START,
});

export const onPointerMoveAction = (e: React.PointerEvent<HTMLDivElement>) => ({
  type: ACTIONS.SELECT,
  coord: { x: e.clientX, y: e.clientY },
});

export const onPointerUpAction = (e: React.PointerEvent<HTMLDivElement>) => ({
  type: ACTIONS.SELECT_END,
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
