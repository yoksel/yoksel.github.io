import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { nanoid } from 'nanoid';

import './styles.scss';

export default function Widget ({ title, items, path, listMod }) {
  if (items.length === 0) {
    return;
  }

  let listClassName = 'widget__list';

  if (listMod) {
    listClassName += ` ${listClassName}--${listMod}`;
  }

  return (
    <div className="widget">
      <h4 className="widget__title">{title}</h4>

      <ul className={listClassName}>
        {items.map(({
          id, title, name,
          url, desc,
          eventUrl, eventName, eventDate
}) => {
          title = title || name;
          id = id || nanoid();
          let itemClassName = 'widget__item';
          let link = (
            <Link className="widget__link" to={url}>
              {title}
            </Link>
          );

          if (url.includes('http')) {
            link = (
              <a className="widget__link" href={url}>
                {title}
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
