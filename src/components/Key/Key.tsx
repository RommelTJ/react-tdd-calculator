import React from 'react';

type Props = {
  keyAction: () => void;
  keyType: string;
  keyValue: string;
};

const Key = (props: Props) => {
  const { keyAction, keyType, keyValue } = props;
  return <div className="key-container" />;
};

export default Key;
