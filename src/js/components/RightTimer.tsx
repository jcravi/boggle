import React from 'react';
import styled from 'styled-components';
import { TimerProps } from '../utils/TimerInterface';
import { parseTimerProps } from '../utils/timer';

const StyledTimer = styled.div`
  margin-left: 10px;
  float: right;
  height: center;
  vertical-align: center;
`;

const Progress = styled.progress`
  margin-top: 200px;
  margin-left: -50%;
  transform: rotate(-90deg);
`;

export const RightTimer = (props: TimerProps) => {
  const {
    display,
    progress: { current, max },
  } = parseTimerProps(props);
  return (
    <StyledTimer>
      {display}
      <Progress value={current} max={max}>
        {current}%
      </Progress>
    </StyledTimer>
  );
};
