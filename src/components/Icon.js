import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as CodeWars } from '../assets/codewars.svg';
import { ReactComponent as Ibm } from '../assets/ibm.svg';
import { ReactComponent as LinkedIn } from '../assets/linkedIn.svg';
import { ReactComponent as Meta } from '../assets/meta.svg';
import { ReactComponent as Scrimba } from '../assets/scrimba.svg';

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
  } else if (icon === 'LinkedIn') {
    iconComponent = <LinkedIn />;
  } else if (icon === 'Scrimba') {
    iconComponent = <Scrimba />;
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
