import React, { createRef, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { onTileSelectAction } from '../actions';
import { TileType } from '../types';
import { UNDERLINED, DOWN_SCALE } from '../constants';

const DieFace = styled.div<{ selected: boolean; inPlay: boolean; size: number }>`
  box-sizing: border-box;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  border: 1px solid black;
  border-radius: ${({ inPlay }) => (inPlay ? 20 : 20 * DOWN_SCALE)}px;
  background-color: ${({ selected }) => (selected ? 'yellow' : 'white')};
  width: ${({ inPlay, size }) => (inPlay ? size : size * DOWN_SCALE)}px;
  height: ${({ inPlay, size }) => (inPlay ? size : size * DOWN_SCALE)}px;
`;

const Text = styled.div<{ inPlay: boolean; size: number; underline: boolean }>`
  margin: 0 auto;
  width: 75%;
  height: 75%;
  font-size: ${({ inPlay, size }) => (inPlay ? size - 50 : (size - 50) * DOWN_SCALE)}px;
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
`;

type TileComponentType = {
  tile: TileType;
  size: number;
} & ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

// Check if the touch is over the current tile
const inCurrentTile = (el: HTMLDivElement, coord: { x: number; y: number }): boolean => {
  let inColumn = el.offsetLeft < coord.x && coord.x < el.offsetLeft + el.offsetWidth;
  let inRow = el.offsetTop < coord.y && coord.y < el.offsetTop + el.offsetHeight;
  return inColumn && inRow;
};

const TileComponent = ({ tile, size, coord, selecting, currentTiles, inPlay, tileSelect }: TileComponentType) => {
  const underline = UNDERLINED.includes(tile.value);

  // useful for getting co-ordinates of the selection area (Text)
  const textRef = createRef<HTMLDivElement>();

  const selected = inPlay ? currentTiles.map((x) => x.id).includes(tile.id) : false;

  useEffect(() => {
    const el = textRef.current;
    // If user is still selecting and the touch is over the tile
    if (selecting && el && inCurrentTile(el, coord)) {
      tileSelect(tile);
    }
  }, [coord, selecting, tile, tileSelect, textRef]);
  return (
    <DieFace size={size} selected={selected} inPlay={inPlay}>
      <Text ref={textRef} size={size} underline={underline} inPlay={inPlay}>
        {tile.value}
      </Text>
    </DieFace>
  );
};
const mapStateToProps = ({
  coord,
  selecting,
  currentTiles,
  inPlay,
}: {
  coord: {
    x: number;
    y: number;
  };
  selecting: boolean;
  currentTiles: Array<TileType>;
  inPlay: boolean;
}) => ({
  coord,
  selecting,
  currentTiles,
  inPlay,
});

const mapDispatchToProps = { tileSelect: onTileSelectAction };

export const Tile = connect(mapStateToProps, mapDispatchToProps)(TileComponent);
