import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { nanoid } from 'nanoid';

import './styles.scss';

export default function Widget ({
  id,
  title,
  items,
  path,
  isTemplate,
  hideTitle,
  footerContent
}) {
  if ((!items || items.length) === 0 && !isTemplate) {
    return;
  }

  let widgetClass = `widget widget--${id}`;

  if (isTemplate) {
    widgetClass += ' hidden';
  }

  let titleClass = 'widget__title';

  if (hideTitle) {
    titleClass += ' visually-hidden';
  }

  const footerElement = footerContent
    ? <footer
      className="widget__footer"
      dangerouslySetInnerHTML={{ __html: footerContent }}
    />
    : null;

  return (
    <div className={widgetClass}>
      <h3 className={titleClass}>{title}</h3>

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
              className="widget__stars" title="Звёзд на гитхабе">
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

      {footerElement}
    </div>
  );
}

Widget.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array,
  path: PropTypes.string,
  isTemplate: PropTypes.bool,
  hideTitle: PropTypes.bool,
  footerContent: PropTypes.string
};
