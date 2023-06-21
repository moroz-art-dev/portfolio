import photo1 from '../assets/little_lemon_1.png';
import photo2 from '../assets/little_lemon_2.png';
import photo3 from '../assets/little_lemon_3.png';
import photo4 from '../assets/little_lemon_4.png';

const projects = {
  title: 'Featured Projects',
  list: [
    {
      title: 'Little Lemon',
      description:
        'The project includes a landing page and reservation form for a restaurant, providing essential information and enabling easy table bookings.',
      imagesSrc: [() => photo1, () => photo2, () => photo3, () => photo4],
      url: 'https://github.com/moroz-art-dev/little-lemon',
    },
  ],
};

export default projects;
