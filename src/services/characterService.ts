import { Character } from '../types';

export const fetchCharacters = async (
  showId: number,
  numCharacters: number
): Promise<Character[]> => {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${showId}/cast`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    const charInfo = data.map((item) => ({
      id: item.character.id,
      name: item.character.name,
      imageURL: item.character.image.original,
    }));
    console.log(data);
    const shortenedInfo = charInfo.slice(0, 20);

    return shortenedInfo;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Failed to fetch character info');
  }
};
