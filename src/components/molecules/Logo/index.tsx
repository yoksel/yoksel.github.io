import React from 'react';
import classNames from 'classnames';
import Link from '../../atoms/Link';

import styles from './styles.module.scss';

interface LogoProps {
  isMain: boolean;
  parent?: string;
}

const Logo = ({ isMain, parent = 'header' }: LogoProps) => {
  const containerClassName = `${parent}-logo`;
  const itemClassName = `${containerClassName}__item`;
  const contentClassName = `${containerClassName}__content`;
  const containerStyles = styles[containerClassName];
  const itemStyles = styles[itemClassName];
  const itemAboutStyles = styles[`${itemClassName}--about`];
  const itemCSSStyles = styles[`${itemClassName}--css`];
  const contentStyles = styles[contentClassName];
  const linkStyles = styles[`${contentClassName}--link`];
  const notLinkStyles = styles[`${contentClassName}__not-link`];

  const logoContent = (
    <>
      <span className={classNames(itemStyles, itemAboutStyles)}>Про</span>&nbsp;
      <span className={classNames(itemStyles, itemCSSStyles)}>CSS</span>
    </>
  );

  if (isMain) {
    return (
      <div className={containerStyles}>
        <span className={classNames(contentStyles, notLinkStyles)}>{logoContent}</span>
      </div>
    );
  }

  return (
    <div className={containerStyles}>
      <Link
        className={classNames(contentStyles, linkStyles)}
        href="/"
        dataName="Про CSS"
      >
        {logoContent}
      </Link>
    </div>
  );
};

export default Logo;
