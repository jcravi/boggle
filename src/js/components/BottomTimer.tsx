import React from 'react';
import styled from 'styled-components';
import { TimerProps } from '../utils/TimerInterface';
import { parseTimerProps } from '../utils/timer';

const FlexBreak = styled.div`
  flex-basis: 100%;
  height: 0;
`;

const StyledTimer = styled.div`
  margin-left: 10px;
  float: right;
  height: center;
  vertical-align: center;
`;

const Progress = styled.progress`
  transform: rotate(0deg);
`;

export const BottomTimer = (props: TimerProps) => {
  const {
    display,
    progress: { current, max },
  } = parseTimerProps(props);
  return (
    <>
      <FlexBreak />
      <StyledTimer>
        <Progress value={current} max={max}>
          {current}%
        </Progress>
        {display}
      </StyledTimer>
    </>
  );
};
