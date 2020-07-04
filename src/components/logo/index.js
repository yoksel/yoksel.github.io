import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './styles.scss';

export default function Logo ({ isMain, parent }) {
  const containerClassName = `${parent}-logo`;
  const itemClassName = `${containerClassName}__item`;
  const aboutClassName = `${itemClassName} ${itemClassName}--about`;
  const cssClassName = `${itemClassName} ${itemClassName}--css`;
  const contentClassName = `${containerClassName}__content`;
  const linkClassName = `${contentClassName} ${contentClassName}--link`;
  const notLinkClassName = `${contentClassName} ${contentClassName}__not-link`;

  const logoContent = <Fragment>
    <span className={aboutClassName}>Про</span>&nbsp;
    <span className={cssClassName}>CSS</span>
  </Fragment>;

  if (isMain) {
    return (
      <div className={containerClassName}>
        <span className={notLinkClassName}>
          {logoContent}
        </span>
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      <Link className={linkClassName} to="/" data-name="Про CSS">
        {logoContent}
      </Link>
    </div>
  );
}

Logo.propTypes = {
  isMain: PropTypes.bool,
  parent: PropTypes.string
};
