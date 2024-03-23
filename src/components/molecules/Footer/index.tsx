import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Logo from '../Logo';
import footerNavData from '../../../../data/meta/footer-nav.json';
import OptionalLink from '../OptionalLink';
import VisuallyHiddenText from '../../atoms/VisuallyHiddenText';

import styles from './styles.module.scss';

interface FooterProps {
  slug: string;
  isMain: boolean;
}

const Footer = ({ slug, isMain }: FooterProps) => {
  return (
    <footer className={styles['page-footer']}>
      <nav className={styles['page-footer__nav']}>
        <VisuallyHiddenText element="h2">Нижняя навигация</VisuallyHiddenText>

        <div className={styles['page-footer__container']}>
          <Logo
            parent="footer"
            isMain={isMain}
          />

          <ul className={styles['page-footer__nav-list']}>
            {footerNavData.map(({ name, url }) => {
              return (
                <li
                  className={styles['page-footer__nav-item']}
                  key={uuidv4()}
                >
                  <OptionalLink
                    href={url}
                    slug={slug}
                    className={styles['page-footer__nav-text']}
                  >
                    {name}
                  </OptionalLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
