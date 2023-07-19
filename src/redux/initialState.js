import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const initialSocials = [
  {
    icon: faEnvelope,
    fortAwesome: true,
    url: 'mailto: moroz.art.dev@gmail.com',
  },
  {
    icon: faGithub,
    fortAwesome: true,
    url: 'https://github.com/moroz-art-dev',
  },
  {
    icon: faLinkedin,
    fortAwesome: true,
    url: 'https://www.linkedin.com/in/moroz-art-dev/',
  },
  {
    icon: 'codewars',
    fortAwesome: false,
    url: 'https://www.codewars.com/users/moroz-art-dev',
  },
];

export const initialContacts = { title: 'Contact me (Demo)' };

export const initialLinks = [
  {
    name: 'Projects',
    id: 'projects',
    url: '#projects',
  },
  {
    name: 'Certificates',
    id: 'certificates',
    url: '#certificates',
  },
  {
    name: 'Contact Me',
    id: 'contact',
    url: '#contact',
  },
];

export const initialLanding = {
  name: 'Artem Moroz',
  src: 'https://avatars.githubusercontent.com/u/88348091?v=4',
  introduction: 'React Developer',
  greeting:
    'Hello! I am Artem Moroz, a frontend developer specializing in React.',
  bio: `Welcome to my portfolio!
        Here you will find my projects, expertise, and articles related to React development.
        Join me to learn new things, share experiences, and ask questions.
        Welcome to the world of React!`,
};
