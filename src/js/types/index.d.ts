export type TileType = {
  id: string;
  value: string;
};

export type ActionType = {
  type: string;
  selecting: boolean;
  coord: {
    x: number;
    y: number;
  };
  current: TileType;
  seed: string;
};

export type FoundWords = {
  word: string;
  cancelled: boolean;
};
