import React from 'react';
import { Board } from './Board';
import { Timer } from './Timer';
import styled from 'styled-components';

const GameCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Game = () => {
  return (
    <GameCenter>
      <Board />
      <Timer />
    </GameCenter>
  );
};
