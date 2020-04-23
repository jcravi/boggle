import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { startGameAction } from '../actions';
import { SPLASHES } from '../constants';

const StyledSplash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const SplashComponent = ({ startGame }: { startGame: () => { type: string } }) => {
  const [text, setText] = useState(SPLASHES.READY);
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    let interval = 0;
    if (seconds > 0) {
      if (seconds === 1.5) {
        setText(SPLASHES.STEADY);
      } else if (seconds === 0.5) {
        setText(SPLASHES.GO);
      }
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 0.5);
      }, 500);
    } else if (seconds <= 0) {
      clearInterval(interval);
      startGame();
    }
    return () => clearInterval(interval);
  }, [seconds, startGame, setText, setSeconds]);

  return <StyledSplash>{text}</StyledSplash>;
};

const mapDispatchToProps = { startGame: startGameAction };

export const Splash = connect(null, mapDispatchToProps)(SplashComponent);
