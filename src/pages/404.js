import React from 'react';
import LayoutBase from '../layouts/layout-base';
import { Link } from 'gatsby';

export default function Page404 () {
  const title = 'Страница не найдена';

  const pageData = {
    title,
    slug: '404',
    hideComments: true
  };

  return (
    <LayoutBase
      isSingle={true}
      pageData={pageData}
    >
      <p>
        Попробуйте вернуться на <Link to="/">главную</Link>
      </p>
    </LayoutBase>
  );
}
