import classNames from 'classnames';

interface ContentAsHtmlProps {
  content: string;
  // P not allowed because of hydration issues if P inside P
  element?: 'div' | 'h2';
  className?: string;
}

const ContentAsHtml = ({ content, className, element: Element = 'div' }: ContentAsHtmlProps) => {
  if (!content) return null;

  return (
    <Element
      className={classNames(className, 'use-link-icons')}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default ContentAsHtml;
