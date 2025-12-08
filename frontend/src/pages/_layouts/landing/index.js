import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function LandingLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

LandingLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
