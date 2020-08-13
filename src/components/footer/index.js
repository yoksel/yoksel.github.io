import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Logo from '../logo';
import footerNavData from '../../data/meta/footer-nav.json';

import './styles.scss';

export default function Footer ({ slug, isMain }) {
  return (
    <footer className="page-footer">
      <nav className="page-footer__nav">
        <h2 className="visually-hidden">Нижняя навигация</h2>

        <div className="page-container page-footer__container">
          <Logo parent="footer" isMain={isMain}/>

          <ul className="page-footer__nav-list">
            {footerNavData.map(({ name, url }) => {
              if (slug && url.includes(slug)) {
                return (
                  <li
                    className="page-footer__nav-item"
                    key={nanoid()}
                  >
                    <span
                      className="page-footer__nav-text">{name}</span>
                  </li>
                );
              }

              if (url.includes('http')) {
                return (
                  <li
                    className="page-footer__nav-item"
                    key={nanoid()}
                  >
                    <a
                      href={url}
                      className="page-footer__nav-text">{name}</a>
                  </li>
                );
              }

              return (
                <li
                  className="page-footer__nav-item"
                  key={nanoid()}
                >
                  <Link
                    to={url}
                    className="page-footer__nav-text">{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </footer>
  );
}

Footer.propTypes = {
  slug: PropTypes.string,
  isMain: PropTypes.bool
};
