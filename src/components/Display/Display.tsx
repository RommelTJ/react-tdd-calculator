import React from 'react';

import './Display.css';

type Props = {
  displayValue?: string;
}

const Display = (props: Props) => {
  const { displayValue = '' } = props;
  return (
    <div className="display-container">
      <p className="display-value">
        {displayValue}
      </p>
    </div>
  );
};

export default Display;
