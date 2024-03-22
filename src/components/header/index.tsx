import React from 'react';

import styles from './styles.module.scss';
import Logo from '../Logo';

interface HeaderProps {
  isMain: boolean;
}

const Header = ({ isMain }: HeaderProps) => {
  const TitleElement = isMain ? 'h1' : 'div';

  return (
    <header className={styles['page-header']}>
      <TitleElement className={styles['page-header__title']}>
        <Logo
          parent="header"
          isMain={isMain}
        />
      </TitleElement>
    </header>
  );
};

export default Header;
