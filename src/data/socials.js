import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as CodeWars } from '../assets/codewars.svg';

const socials = [
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
    icon: <CodeWars />,
    fortAwesome: false,
    url: 'https://www.codewars.com/users/moroz-art-dev',
  },
];

export default socials;
