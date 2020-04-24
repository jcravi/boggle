import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { TileType } from '../types';

const StyledContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledPopup = styled.span<{ show: boolean }>`
  padding-left: 10px;
  padding-right: 10px;
  background-color: #00ff99;
  border-radius: 10px;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity ${({ show }) => (show ? '0' : '1000')}ms linear;
`;

const PopupComponent = ({ word, words }: ReturnType<typeof mapStateToProps>) => {
  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState('Good Luck!');

  useEffect(() => {
    setShow(true);
    if (words.length === 0) {
      setDisplay('Good Luck!');
    } else {
      setDisplay(word);
    }
    const interval = setInterval(() => {
      setShow(false);
    }, 1000);
    return () => clearInterval(interval);
  }, [word, words]);

  return (
    <StyledContainer>
      <StyledPopup show={show}>{display}</StyledPopup>
    </StyledContainer>
  );
};

const mapStateToProps = ({ latestWord, words }: { latestWord: string; words: Array<Array<TileType>> }) => ({
  word: latestWord,
  words,
});

export const Popup = connect(mapStateToProps)(PopupComponent);
