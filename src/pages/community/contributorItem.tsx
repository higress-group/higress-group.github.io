import React from 'react';
import { getLink } from '../../utils';

export type ContributorData = {
  img: string;
  title: string;
  content: string | React.ReactElement;
};

type Props = {
  contributor: ContributorData;
};

export const ContributorItem = (props: Props) => {
  const { contributor } = props;
  const { img, title, content } = contributor;
  return (
    <div className="contributor-item">
      <img src={getLink(img)} />
      <div>{title}</div>
      <p>{content}</p>
    </div>
  );
};
