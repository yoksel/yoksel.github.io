import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import Logo from '../logo';

export default function Header ({ isMain }) {
  let pageTitle = <h1 className="page-header__title">
    <Logo parent="header" isMain={isMain} />
  </h1>;

  if (!isMain) {
    pageTitle = <div className="page-header__title">
      <Logo parent="header" isMain={isMain} />
    </div>;
  }

  return (
    <header className="page-header">
      {pageTitle}
    </header>
  );
}

Header.propTypes = {
  isMain: PropTypes.bool
};
