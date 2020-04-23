import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { parseTimerProps } from '../utils/timer';
import { onTimerEndedAction } from './../actions';
import { GAME_TIME } from '../constants';

const StyledTimer = styled.div`
  font-family: 'Lucida Console', Monaco, monospace;
  font-weight: bold;
  position: fixed;
  top: 5px;
  right: 5px;
`;

const TimerComponent = ({ timerEnd }: { timerEnd: () => { type: string } }) => {
  const [seconds, setSeconds] = useState(GAME_TIME);
  useEffect(() => {
    let interval = 0;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds <= 0) {
      timerEnd();
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds, timerEnd]);

  const { display } = parseTimerProps(seconds);

  return <StyledTimer>{display}</StyledTimer>;
};

const mapDispatchToProps = { timerEnd: onTimerEndedAction };

export const Timer = connect(null, mapDispatchToProps)(TimerComponent);
