import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''}  custom-button`}
    {...otherProps}
  >
    </button>
);

export default CustomButton;
