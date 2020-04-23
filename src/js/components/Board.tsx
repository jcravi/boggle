import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { newBoard, getId } from '../utils/board';
import { Tile } from './Tile';
import { onTouchMoveAction, onTouchEndAction, setNextSeedAction } from '../actions';
import { useWindowDimensions } from '../utils/dimensions';
import { BOARD_DIMENSIONS } from '../constants';

const PlayTiles = styled.div`
  float: right;
  display: table;
  border-collapse: separate;
  border-spacing: 4px;
  background-color: #3366ff;
  border-radius: 20px;
  overflow: auto;
  overscroll-behavior: contain;
`;

const FixedTiles = styled.div`
  position: fixed;
  right: 5px;
  display: table;
  border-collapse: separate;
  border-spacing: 4px;
  background-color: #3366ff;
  border-radius: 4px;
`;

const TileRow = styled.div`
  display: table-row;
`;

interface BoardProps {
  inPlay: boolean; // redux
  stateSeed: string; // redux
  onTouchMove: (e: React.TouchEvent<HTMLDivElement>) => any; // redux
  onTouchEnd: () => any; // redux
  setNextSeed: (seed: string) => void; //redux
}

const BoardComponent = ({ inPlay, stateSeed, onTouchMove, onTouchEnd, setNextSeed }: BoardProps) => {
  // Get the seed from url or from state
  const urlParams = new URLSearchParams(window.location.search);
  const seedParam = urlParams.get('seed');
  const seed = seedParam ? seedParam : stateSeed;

  // Get the contents of the board
  const { board, nextSeed } = newBoard(seed);

  // Calculate the size of the board
  const { height, width } = useWindowDimensions();
  // Pick smaller of height and width
  const min = width < height ? width : height;
  // if width is smaller, don't add padding
  const diff = width < height ? 0 : 10;
  // Get the side of the board
  const size = min / BOARD_DIMENSIONS - diff;

  // If the timer has expired, move the board to the top right and fix it
  const Tiles = inPlay ? PlayTiles : FixedTiles;

  // set the next seed. Wasn't sure where to put this so put it here
  setNextSeed(nextSeed);

  return (
    <Tiles onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      {board.map((row, rIndex) => (
        <TileRow key={rIndex}>
          {row.map((value, index) => {
            const id = getId(index, rIndex);
            return <Tile key={id} tile={{ id, value }} size={size} />;
          })}
        </TileRow>
      ))}
    </Tiles>
  );
};

const mapStateToProps = ({ inPlay, seed }: { inPlay: boolean; seed: string }) => ({ inPlay, stateSeed: seed });

const mapDispatchToProps = {
  onTouchMove: onTouchMoveAction,
  onTouchEnd: onTouchEndAction,
  setNextSeed: setNextSeedAction,
};

export const Board = connect(mapStateToProps, mapDispatchToProps)(BoardComponent);
