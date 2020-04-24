import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Board } from './Board';
import { Timer } from './Timer';
import { Tally } from './Tally';
import { Splash } from './Splash';
import { Popup } from './Popup';

const GameCenter = styled.div`
  font-family: Verdana;
  font-color: black;
`;

const GameComponent = ({ displaySplash, inPlay }: ReturnType<typeof mapStateToProps>) => {
  return (
    <GameCenter>
      {displaySplash ? (
        <Splash />
      ) : (
        <>
          {inPlay ? (
            <div style={{ marginBottom: '5px' }}>
              <Popup />
              <Timer />
            </div>
          ) : (
            <Tally />
          )}
          <Board />
        </>
      )}
    </GameCenter>
  );
};

const mapStateToProps = ({ displaySplash, inPlay }: { displaySplash: boolean; inPlay: boolean }) => ({
  displaySplash,
  inPlay,
});

export const Game = connect(mapStateToProps)(GameComponent);
