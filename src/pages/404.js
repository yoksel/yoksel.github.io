import React from 'react';
import LayoutBase from '../layouts/layout-base';
import { Link } from 'gatsby';

export default function Page404 () {
  return (
    <LayoutBase title="404" isSingle={true}>
      <p>
        Ничего не найдено, попробуйте вернуться на <Link to="/">главную</Link>
      </p>
    </LayoutBase>
  );
}
