import React from 'react';

import './Key.css';

type Props = {
  keyAction: () => void;
  keyType: string;
  keyValue: string;
};

const Key = (props: Props) => {
  const { keyAction, keyType, keyValue } = props;
  return (
    <div role="key" className={`key-container ${keyType}`}>
      <p className="key-value">
        {keyValue}
      </p>
    </div>
  );
};

export default Key;
