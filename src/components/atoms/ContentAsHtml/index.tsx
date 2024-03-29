import classNames from 'classnames';

interface ContentAsHtmlProps {
  content: string;
  element?: 'div' | 'p' | 'h2';
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
