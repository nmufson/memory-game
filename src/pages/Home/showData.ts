export interface Show {
  name: string;
  id: number;
  imageURL: string;
  theme: string;
}

export const shows: Show[] = [
  {
    name: 'The Wire',
    id: 179,
    imageURL:
      'https://static1.colliderimages.com/wordpress/wp-content/uploads/the-wire-title-logo-slice.jpg',
    theme: 'the-wire',
  },
  {
    name: 'Breaking Bad',
    id: 169,
    imageURL:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/cda64488-47d8-45fa-b15e-edb138fd8c37/d6fuvo2-334d2f3b-10f0-421a-9825-965e684a90c1.jpg',
    theme: 'breaking-bad',
  },
];
