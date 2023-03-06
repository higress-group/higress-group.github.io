import React from 'react';
import { getLink } from '../../utils';

type CardEvent = {
  link: string;
  img: string;
  title: string;
  content: string;
  dateStr: string;
};

type Props = {
  event: CardEvent;
};

export const EventCard = (props: Props) => {
  const { event } = props;
  return (
    <div className="event-card">
      <a href={getLink(event.link)}>
        <img src={`${event.img}`} />
      </a>
      <div className="event-introduction">
        <h4>{event.title}</h4>
        <p>{event.content}</p>
        <a href={getLink(event.link)}>
          {event.dateStr}
          <img className="arrow" src={`/img/arrow_right.png`} />
        </a>
      </div>
    </div>
  );
};
