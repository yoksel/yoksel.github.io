import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from '../../atoms/Link';
import VisuallyHiddenText from '../../atoms/VisuallyHiddenText';
import OptionalLink from '../OptionalLink';
import classNames from 'classnames';

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

interface Event {
  name: string;
  href: string;
  date: string;
}

const Event = ({ event }: { event?: Event }) => {
  const { name, href, date } = event || {};

  if (!(name || href || date)) return null;

  return (
    <div className={styles['widget__desc']}>
      <a href={href}>{name}</a>, {date}
    </div>
  );
};

export interface WidgetItem {
  text: string;
  href: string;
  desc?: string;
  excerpt?: string;
  stars?: number;
  event?: Event;
}

interface WidgetProps {
  id: string;
  title: string;
  items?: WidgetItem[];
  slug?: string;
  isTemplate?: boolean;
  hideTitle?: boolean;
  footerContent?: string;
}

const Widget = ({ id, title, items, slug, isTemplate, hideTitle, footerContent }: WidgetProps) => {
  if (!items?.length && !isTemplate) {
    return null;
  }

  return (
    <div className={classNames(styles['widget'], styles[`widget--${id}`], isTemplate && 'hidden')}>
      <WidgetTitle hideTitle={hideTitle}>{title}</WidgetTitle>

      <ul className={styles['widget__list']}>
        {items?.map(({ text, href, desc, stars, event }) => {
          return (
            <li
              className={classNames(
                styles['widget__item'],
                href === slug && styles['widget__item--current'],
              )}
              key={uuidv4()}
            >
              <OptionalLink
                href={href}
                slug={slug}
                className={classNames(href !== slug && styles['widget__link'])}
              >
                <span className={styles['widget__link-text']}>{text}</span>
                <Stars>{stars}</Stars>
              </OptionalLink>
              <Description desc={desc} />
              <Event event={event} />
            </li>
          );
        })}
      </ul>

      {footerContent && (
        <footer
          className="widget__footer"
          dangerouslySetInnerHTML={{ __html: footerContent }}
        />
      )}
    </div>
  );
};

export default Widget;
