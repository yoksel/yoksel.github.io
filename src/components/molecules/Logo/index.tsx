import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from '../../atoms/Link';
import { BrokenGlassFilter, FlameFilter, FireFilter, DistortionFilter } from './Filters';
import distortionFilterAnimationGetHandler from './Filters/distortionFilterAnimation';

import styles from './styles.module.scss';

interface LogoProps {
  isMain: boolean;
  parent?: string;
}

interface LogoContentProps {
  rootClassName: string;
  isInHeader: boolean;
}
const LogoContent = ({ isInHeader, rootClassName }: LogoContentProps) => {
  if (!isInHeader) {
    return 'Про CSS';
  }

  const itemClassName = `${rootClassName}__item`;
  const itemStyles = styles[itemClassName];
  const itemAboutStyles = styles[`${itemClassName}--about`];
  const itemCSSStyles = styles[`${itemClassName}--css`];

  return (
    <div className={styles[`${rootClassName}__content`]}>
      <div className={styles[`${rootClassName}__text`]}>
        <span className={classNames(itemStyles, itemAboutStyles)}>Про</span>&nbsp;
        <span className={classNames(itemStyles, itemCSSStyles)}>CSS</span>
      </div>
    </div>
  );
};

interface LogoContainerProps extends React.PropsWithChildren {
  rootClassName: string;
  theme?: string;
}

const LogoContainer = ({ rootClassName, theme, children }: LogoContainerProps) => {
  return (
    <div
      className={classNames(styles[rootClassName], theme && styles[`${rootClassName}--${theme}`])}
    >
      {children}
    </div>
  );
};

type Theme =
  | 'circle'
  | 'rays'
  | 'glass'
  | 'flame'
  | 'animated-rhombs'
  | 'fire'
  | 'distortion'
  | 'amanita';

type MouseEnterHandler = (event: React.MouseEvent) => void;

const Logo = ({ isMain, parent = 'header' }: LogoProps) => {
  const rootClassName = `${parent}-logo`;
  const containerClassName = `${rootClassName}__container`;
  const linkClassName = `${rootClassName}__link`;
  const isInHeader = parent === 'header';
  const themes = [
    'circle',
    'rays',
    'glass',
    'flame',
    'animated-rhombs',
    'fire',
    'distortion',
    'amanita',
  ];
  const [theme, setTheme] = useState<Theme>('amanita');
  const [distortionFilterAnimation, setDistortionFilterAnimation] = useState<MouseEnterHandler>();

  useEffect(() => {
    if (!isInHeader) return;

    const themeFromUrl = document.location.search?.replace('?', '');
    if (themes.includes(themeFromUrl)) {
      setTheme(themeFromUrl as Theme);
      return;
    }

    const randomIndex = Math.floor(Math.random() * themes.length);
    if (themes[randomIndex]) {
      setTheme(themes[randomIndex] as Theme);
    }
  }, []);

  useEffect(() => {
    if (theme === 'distortion') {
      setDistortionFilterAnimation(distortionFilterAnimationGetHandler);
    }
  }, [theme]);

  if (isMain) {
    return (
      <LogoContainer
        rootClassName={rootClassName}
        theme={theme}
      >
        <span className={classNames(styles[containerClassName])}>
          <LogoContent
            rootClassName={rootClassName}
            isInHeader={isInHeader}
          />
        </span>
      </LogoContainer>
    );
  }

  return (
    <LogoContainer
      rootClassName={rootClassName}
      theme={theme}
    >
      {theme === 'glass' && <BrokenGlassFilter />}
      {theme === 'flame' && <FlameFilter />}
      {theme === 'fire' && <FireFilter />}
      {theme === 'distortion' && <DistortionFilter />}
      <Link
        className={classNames(
          styles[containerClassName],
          styles[linkClassName],
          theme && styles[`${linkClassName}--${theme}`],
        )}
        href="/"
        dataName="Про CSS"
        ariaLabel="Про CSS"
        onMouseEnter={distortionFilterAnimation}
      >
        <LogoContent
          rootClassName={rootClassName}
          isInHeader={parent === 'header'}
        />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
