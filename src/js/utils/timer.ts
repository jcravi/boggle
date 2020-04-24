// Converts seconds to minutes:seconds
// DateTimeFormat is overkill
export const parseTimerProps = (seconds: number) => {
  const s = ((seconds % 60) + '').padStart(2, '0');
  const m = Math.floor(seconds / 60);
  const display = m + ':' + s;
  return display;
};
