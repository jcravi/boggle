import React, { useState, useEffect } from 'react';
import { useWindowDimensions } from '../utils/dimensions';
import { RightTimer } from './RightTimer';
import { BottomTimer } from './BottomTimer';

const MAX_TIME = 120;

export const Timer = () => {
  const { height, width } = useWindowDimensions();
  const timerRight = width > height;
  const [seconds, setSeconds] = useState(MAX_TIME);
  useEffect(() => {
    let interval: number = 0;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds <= 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  const props = {
    seconds,
    maxSeconds: MAX_TIME,
  };

  const TimerComponent = timerRight ? RightTimer : BottomTimer;

  return <TimerComponent {...props} />;
};
