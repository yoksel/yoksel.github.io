import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import VisuallyHiddenText from '../../atoms/VisuallyHiddenText';
import OptionalLink from '../OptionalLink';
import classNames from 'classnames';
import { EventProps, WidgetItem } from '@src/types';

import styles from './styles.module.scss';

const Stars = ({ children }: React.PropsWithChildren) => {
  if (!children) return null;

  return (
    <span
      className={styles['widget__stars']}
      title="Звёзд на гитхабе"
    >
      <VisuallyHiddenText element="span">Звёзд на гитхабе:</VisuallyHiddenText>
      {children}
    </span>
  );
};

interface WidgetTitleProp extends React.PropsWithChildren {
  hideTitle?: boolean;
}

const WidgetTitle = ({ children, hideTitle }: WidgetTitleProp) => {
  if (hideTitle) {
    return <VisuallyHiddenText element="h3">{children}</VisuallyHiddenText>;
  }

  return <h3 className={styles['widget__title']}>{children}</h3>;
};

const Description = ({ desc }: { desc?: string }) => {
  if (!desc) return null;

  return (
    <div
      className={styles['widget__desc']}
      dangerouslySetInnerHTML={{ __html: desc }}
    />
  );
};

const Event = ({ event }: { event?: EventProps }) => {
  const { name, href, date } = event || {};

  if (!(name || href || date)) return null;

  return (
    <div className={styles['widget__desc']}>
      <a href={href}>{name}</a>, {date}
    </div>
  );
};

interface WidgetProps {
  id: string;
  title: string;
  items?: WidgetItem[];
  slug?: string;
  hideTitle?: boolean;
  footerContent?: string;
  layout?: 'grid';
}

const Widget = ({ id, title, items, slug, hideTitle, footerContent, layout }: WidgetProps) => {
  if (!items?.length) {
    return null;
  }
  const slugWithSlash = slug?.startsWith('/') ? slug : `/${slug}`;

  return (
    <div className={classNames(styles['widget'], styles[`widget--${id}`])}>
      <WidgetTitle hideTitle={hideTitle}>{title}</WidgetTitle>

      <ul
        className={classNames(
          styles['widget__list'],
          layout === 'grid' && styles['widget__list--grid'],
        )}
      >
        {items?.map((item) => {
          const { href, desc, stars, event } = item;
          const isCurrent = slug && href.endsWith(slugWithSlash);
          const text = 'text' in item ? item.text : undefined;
          const imageSrc = 'imageSrc' in item ? item.imageSrc : undefined;
          const imageAlt = 'alt' in item ? item.alt : undefined;

          return (
            <li
              className={classNames(
                styles['widget__item'],
                isCurrent && styles['widget__item--current'],
              )}
              key={uuidv4()}
            >
              <OptionalLink
                href={href}
                slug={slug}
                className={classNames(!isCurrent && styles['widget__link'])}
              >
                {imageSrc && (
                  <Image
                    src={imageSrc}
                    alt={imageAlt || ''}
                    loading="lazy"
                    width="200"
                    height="200"
                    unoptimized
                  />
                )}
                <span className={classNames(!isCurrent && styles['widget__link-text'])}>
                  {text}
                </span>
                <Stars>{stars}</Stars>
              </OptionalLink>
              <Description desc={desc} />
              {event && <Event event={event} />}
            </li>
          );
        })}
      </ul>

      {footerContent && (
        <footer
          className={styles['widget__footer']}
          dangerouslySetInnerHTML={{ __html: footerContent }}
        />
      )}
    </div>
  );
};

export default Widget;
