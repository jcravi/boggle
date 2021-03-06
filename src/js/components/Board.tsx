import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { newBoard, getId } from '../utils/board';
import { Tile } from './Tile';
import { onPointerDownAction, onPointerMoveAction, onPointerUpAction, setNextSeedAction } from '../actions';
import { useWindowDimensions } from '../utils/dimensions';
import { BOARD_DIMENSIONS } from '../constants';

const PlayTiles = styled.div`
  display: table;
  margin: auto;
  border-collapse: separate;
  border-spacing: 4px;
  background-color: #3366ff;
  border-radius: 20px;
  touch-action: none;
`;

const FixedTiles = styled.div`
  cursor: pointer;
  position: fixed;
  top: 30px;
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

type BoardProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const BoardComponent = ({ inPlay, stateSeed, onPointerDown, onPointerMove, onPointerUp, setNextSeed }: BoardProps) => {
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
    <Tiles
      onPointerDown={onPointerDown}
      onPointerMove={(e) => {
        e.preventDefault();
        onPointerMove(e);
      }}
      onPointerUp={onPointerUp}
    >
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
  onPointerDown: onPointerDownAction,
  onPointerMove: onPointerMoveAction,
  onPointerUp: onPointerUpAction,
  setNextSeed: setNextSeedAction,
};

export const Board = connect(mapStateToProps, mapDispatchToProps)(BoardComponent);
