import { TimerProps } from './TimerInterface';

export const parseTimerProps = (props: TimerProps) => {
  const seconds = ((props.seconds % 60) + '').padStart(2, '0');
  const minutes = Math.floor(props.seconds / 60);
  const display = minutes + ':' + seconds;
  const current = Math.floor((100 * (props.maxSeconds - props.seconds)) / props.maxSeconds);
  const max = 100;
  return { display, progress: { current, max } };
};
