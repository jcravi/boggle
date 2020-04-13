import React from 'react';
import styled from 'styled-components';

import { newBoard } from '../utils/board';
import { Tile } from './Tile';

const Tiles = styled.div`
  float: left;
  display: table;
  border-collapse: separate;
  border-spacing: 4px;
  background-color: #3366ff;
  border-radius: 20px;
`;

const TileRow = styled.div`
  display: table-row;
`;

export const Board = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const seedParam = urlParams.get('seed');

  const seed = seedParam ? seedParam : undefined;

  const board = newBoard(seed);
  return (
    <Tiles>
      {board.map((row, rIndex) => (
        <TileRow key={rIndex}>
          {row.map((value, index) => {
            const key = (rIndex + 1) * (index + 1);
            return <Tile key={key} value={value} />;
          })}
        </TileRow>
      ))}
    </Tiles>
  );
};
