import { nanoid } from 'nanoid';

const itemsNavBar = [
  {
    id: nanoid(),
    text: 'Home',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Movies',
    link: '/movies',
  },
];

export default itemsNavBar;
