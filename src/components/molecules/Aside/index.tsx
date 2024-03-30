import React from 'react';

import projectsData from '../../../../data/meta/projects.json';
import Widget from '../Widget';
import VisuallyHiddenText from '../../atoms/VisuallyHiddenText';
import { WidgetItem } from '../../../types';
import PhotosWidget from '../PhotosWidget';

interface AsideProps {
  slug?: string;
  isMain: boolean;
  articleType?: string;
  posts?: WidgetItem[];
  pages?: WidgetItem[];
}

const Aside = ({ slug, isMain, articleType, posts, pages }: AsideProps) => {
  const articlesWidget = !isMain ? (
    <Widget
      id="articles"
      title="Статьи"
      items={posts}
      slug={slug}
    />
  ) : null;
  const pagesWidget = (
    <Widget
      id="pages"
      title="Страницы"
      items={pages}
      slug={slug}
    />
  );
  const projectsWidget = (
    <Widget
      id="projects"
      title="Проекты"
      slug={slug}
      items={projectsData}
    />
  );

  const widgetsOrder =
    articleType === 'page' ? (
      <>
        {pagesWidget}
        {articlesWidget}
        {projectsWidget}
      </>
    ) : slug === 'about' ? (
      <>
        {projectsWidget}
        <PhotosWidget />
        {articlesWidget}
        {pagesWidget}
      </>
    ) : slug === 'pages' ? (
      <>
        {articlesWidget}
        {projectsWidget}
      </>
    ) : slug === 'tags' ? (
      <>
        {pagesWidget}
        {projectsWidget}
      </>
    ) : isMain ? (
      <>
        {projectsWidget}
        {pagesWidget}
        <PhotosWidget />
      </>
    ) : (
      <>
        {articlesWidget}
        {pagesWidget}
        {projectsWidget}
      </>
    );

  return (
    <aside>
      <VisuallyHiddenText element="h2">Сайдбар</VisuallyHiddenText>

      {widgetsOrder}
    </aside>
  );
};

export default Aside;
