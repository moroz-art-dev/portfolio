import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as Ibm } from '../assets/ibm.svg';
import { ReactComponent as Meta } from '../assets/meta.svg';
import { ReactComponent as LinkedinIn } from '../assets/linkedinIn.svg';
import { ReactComponent as CodeWars } from '../assets/codewars.svg';

const Icon = ({ fortAwesome, icon, size, color }) => {
  let iconComponent;

  if (fortAwesome) {
    iconComponent = <FontAwesomeIcon icon={icon} size={size} color={color} />;
  } else if (icon === 'codewars') {
    iconComponent = <CodeWars />;
  } else if (icon === 'Ibm') {
    iconComponent = <Ibm />;
  } else if (icon === 'Meta') {
    iconComponent = <Meta />;
  } else if (icon === 'LinkedinIn') {
    iconComponent = <LinkedinIn />;
  }

  return iconComponent;
};

Icon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  fortAwesome: PropTypes.bool.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Icon;
