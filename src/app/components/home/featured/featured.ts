export interface Featured {
  id: number;
  image: string;
  tags: string[];
  description: string;
  date: string;
  comments: string;
}

export const featured = [
  {
    id: 1,
    image: '../../../../assets/featured/featured1.jpg',
    tags: ['Google', 'Trending', 'New'],
    title: 'Loudest à la Madison #1 (Lintegral)',
    description:
      'We focus on ergonomics and meeting you where you work. It is only a keystroke away.',
    date: '22 April 2021',
    connemts: '10 comments',
  },
  {
    id: 2,
    image: '../../../../assets/featured/featured2.jpg',
    tags: ['Google', 'Trending', 'New'],
    title: 'Loudest à la Madison #1 (Lintegral)',
    description:
      'We focus on ergonomics and meeting you where you work. It is only a keystroke away.',
    date: '22 April 2021',
    connemts: '10 comments',
  },
  {
    id: 3,
    image: '../../../../assets/featured/featured3.jpg',
    tags: ['Google', 'Trending', 'New'],
    title: 'Loudest à la Madison #1 (Lintegral)',
    description:
      'We focus on ergonomics and meeting you where you work. It is only a keystroke away.',
    date: '22 April 2021',
    connemts: '10 comments',
  },
];
