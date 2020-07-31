import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { nanoid } from 'nanoid';

import './styles.scss';

export default function Widget ({ title, items, path }) {
  if (items.length === 0) {
    return;
  }

  return (
    <div className="widget">
      <h3 className="widget__title">{title}</h3>

      <ul className='widget__list'>
        {items.map(({
          id, title, name,
          url, desc, stars,
          eventUrl, eventName, eventDate
}) => {
          title = <span className="widget__link-text">
            {title || name}
          </span>;
          id = id || nanoid();
          let itemClassName = 'widget__item';
          const starsElement = stars
            ? <span
              className="widget__stars">
                <span className="visually-hidden">Звёзд на гитхабе:</span>
                {stars}</span>
            : null;

          let link = (
            <Link className="widget__link" to={url}>
              {title}{starsElement}
            </Link>
          );

          if (url.includes('http')) {
            link = (
              <a className="widget__link" href={url}>
                {title}{starsElement}
              </a>
            );
          }

          if (url === path) {
            link = title;
            itemClassName += ' widget__item--current';
          }

          const descElement = desc
          ? <div
              className="widget__desc"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          : null;

          const eventDataElement = eventName
            ? <div
              className="widget__desc">
              <a href={eventUrl}>{eventName}</a>, {eventDate}
            </div>
            : null;

          return (
            <li className={itemClassName} key={id}>
              {link}
              {descElement}
              {eventDataElement}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Widget.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  path: PropTypes.string,
  listMod: PropTypes.string
};
