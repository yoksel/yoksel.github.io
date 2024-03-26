interface ContentAsHtmlProps {
  content: string;
  element?: 'div' | 'p' | 'h2';
  className?: string;
}

const ContentAsHtml = ({ content, className, element: Element = 'div' }: ContentAsHtmlProps) => {
  if (!content) return null;

  return (
    <Element
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default ContentAsHtml;
