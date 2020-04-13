import React from 'react';
import styled from 'styled-components';
import { useWindowDimensions } from '../utils/dimensions';

const underlined = ['N', 'M', 'W'];

const DieFace = styled.div<{ size: number }>`
  box-sizing: border-box;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  border: 1px solid black;
  border-radius: 20px;
  color: black;
  background-color: white;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

const DieText = styled.span<{ size: number; underline: boolean }>`
  font-family: verdana;
  font-size: ${(props) => props.size - 50}px;
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
`;

interface TileInterface {
  value: string;
}

export const Tile = (props: TileInterface) => {
  const { height, width } = useWindowDimensions();
  const max = width < height ? width : height;
  const diff = width < height ? 0 : 10;
  const size = max / 4 - diff;
  const underline = underlined.includes(props.value);
  //console.log('size', size);
  return (
    <DieFace size={size}>
      <DieText size={size} underline={underline}>
        {props.value}
      </DieText>
    </DieFace>
  );
};
