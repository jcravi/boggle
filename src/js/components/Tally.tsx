import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { TileType, FoundWords } from '../types';
import { tilesToString } from '../utils/tiles';
import { newGameAction } from '../actions';
import { score } from '../utils/board';

const Container = styled.div`
  float: left;
`;

const StyledWords = styled.ol``;

const StyledWord = styled.li<{ cancelled: boolean }>`
  font-size: 1.2em;
  margin: 0.5em 0;
  text-decoration: ${({ cancelled }) => (cancelled ? 'line-through' : 'none')};
`;

// Fancy button css from
// https://www.bestcssbuttongenerator.com/#/28
const Button = styled.button`
  margin-bottom: 1em;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #666666;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  :hover {
    background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
    background-color: #f6f6f6;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;

const toggle = (
  actualWords: FoundWords[],
  setActualWords: React.Dispatch<React.SetStateAction<FoundWords[]>>,
  index: number
): void => {
  // Need to create a copy to force the component to re-render,
  // since otherwise the state reference does not change
  const newWords = Array.from(actualWords);
  newWords[index].cancelled = !newWords[index].cancelled;
  setActualWords(newWords);
};

const tallyText = (total: number): string => {
  if (total === 0) {
    return ':( Better luck next time!';
  } else if (total > 0 && total < 10) {
    return 'Nice!';
  } else if (total >= 10 && total < 20) {
    return 'Oh look! Double digits';
  } else {
    return 'Respect!';
  }
};

type TallyType = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const TallyComponent = ({ words, newGame }: TallyType) => {
  // the initial state of words as string and default as none are cancelled
  const initState = words
    .map((x) => ({ word: tilesToString(x), cancelled: false } as FoundWords))
    .sort((a, b) => a.word.localeCompare(b.word));

  const [actualWords, setActualWords] = useState(initState);
  const [scoreVisible, setScoreVisible] = useState(false);

  // This doesn't need to be calculated until we choose to show the score
  // But okay for now
  const total = actualWords
    .filter((x) => !x.cancelled)
    .map((x) => score(x.word))
    .reduce((a, b) => a + b, 0);

  return (
    <Container>
      {actualWords.length > 0 && (
        <StyledWords>
          {actualWords.map((x, i) => (
            <StyledWord
              key={`word-${i}`}
              cancelled={x.cancelled}
              onClick={() => {
                if (!scoreVisible) {
                  toggle(actualWords, setActualWords, i);
                }
              }}
            >
              {x.word.toLowerCase()}
            </StyledWord>
          ))}
        </StyledWords>
      )}
      {scoreVisible ? (
        <>
          <div>Score: {total}</div>
          <div style={{ marginTop: '0.5em' }}>{tallyText(total)}</div>
          <Button autoFocus style={{ marginTop: '1em' }} onClick={newGame}>
            New Game
          </Button>
        </>
      ) : (
        <Button onClick={() => setScoreVisible(true)}>Tally</Button>
      )}
    </Container>
  );
};

const mapStateToProps = ({ words }: { words: Array<Array<TileType>> }) => ({ words });

const mapDispatchToProps = { newGame: newGameAction };

export const Tally = connect(mapStateToProps, mapDispatchToProps)(TallyComponent);
