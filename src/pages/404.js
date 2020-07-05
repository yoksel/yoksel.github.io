import React from 'react';
import LayoutBase from '../layouts/layout-base';
import { Link } from 'gatsby';

export default function Page404 () {
  const title = 'Страница не найдена';

  const metaData = {
    title,
    slug: '404'
  };
  return (
    <LayoutBase
      title={title}
      isSingle={true}
      metaData={metaData}
    >
      <p>
        Попробуйте вернуться на <Link to="/">главную</Link>
      </p>
    </LayoutBase>
  );
}
