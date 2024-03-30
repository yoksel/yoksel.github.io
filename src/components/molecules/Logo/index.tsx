import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from '../../atoms/Link';

import styles from './styles.module.scss';

interface LogoProps {
  isMain: boolean;
  parent?: string;
}

interface LogoContentProps {
  itemClassName: string;
  isInHeader: boolean;
}
const LogoContent = ({ isInHeader, itemClassName }: LogoContentProps) => {
  if (!isInHeader) {
    return 'Про CSS';
  }

  const itemStyles = styles[itemClassName];
  const itemAboutStyles = styles[`${itemClassName}--about`];
  const itemCSSStyles = styles[`${itemClassName}--css`];

  return (
    <>
      <span className={classNames(itemStyles, itemAboutStyles)}>Про</span>&nbsp;
      <span className={classNames(itemStyles, itemCSSStyles)}>CSS</span>
    </>
  );
};

interface LogoContainerProps extends React.PropsWithChildren {
  containerClassName: string;
  theme?: string;
}

const LogoContainer = ({ containerClassName, theme, children }: LogoContainerProps) => {
  return (
    <div
      className={classNames(
        styles[containerClassName],
        theme && styles[`${containerClassName}--${theme}`],
      )}
    >
      {children}
    </div>
  );
};

const Logo = ({ isMain, parent = 'header' }: LogoProps) => {
  const containerClassName = `${parent}-logo`;
  const itemClassName = `${containerClassName}__item`;
  const contentClassName = `${containerClassName}__content`;
  const linkClassName = `${containerClassName}__link`;
  const isInHeader = parent === 'header';
  const themes = ['circle', 'rays'];
  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    if (!isInHeader) return;

    const randomIndex = Math.floor(Math.random() * themes.length);
    if (themes[randomIndex]) {
      setTheme(themes[randomIndex]);
    }
  }, []);

  if (isMain) {
    return (
      <LogoContainer
        containerClassName={containerClassName}
        theme={theme}
      >
        <span className={classNames(styles[contentClassName])}>
          <LogoContent
            itemClassName={itemClassName}
            isInHeader={isInHeader}
          />
        </span>
      </LogoContainer>
    );
  }

  return (
    <LogoContainer
      containerClassName={containerClassName}
      theme={theme}
    >
      <Link
        className={classNames(
          styles[contentClassName],
          styles[linkClassName],
          theme && styles[`${linkClassName}--${theme}`],
        )}
        href="/"
        dataName="Про CSS"
        ariaLabel="Про CSS"
      >
        <LogoContent
          itemClassName={itemClassName}
          isInHeader={parent === 'header'}
        />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
