import React from 'react';
import classnames from 'classnames';
import './index.scss';

export const Bone = (props: { type: string }) => {
  return (
    <div
      className={classnames({
        bone: true,
        [`bone-${props.type}`]: true,
      })}
    />
  );
};
