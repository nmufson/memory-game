export interface Character {
  id: number;
  name: string;
  imageURL: string;
}

export interface GameParams {
  showId: number | null;
  numOfCards: number | null;
}
