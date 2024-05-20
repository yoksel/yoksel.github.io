import NextJsLink from 'next/link';

interface LinkProps extends React.PropsWithChildren {
  href: string;
  className?: string;
  dataName?: string;
  title?: string;
  ariaLabel?: string;
  onMouseEnter?: (event: React.MouseEvent) => void;
}

const Link = ({
  href,
  className,
  children,
  dataName,
  title,
  ariaLabel,
  onMouseEnter,
}: LinkProps) => {
  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        className={className}
        data-name={dataName}
        rel="noreferrer"
        title={title}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  return (
    <NextJsLink
      href={href}
      className={className}
      data-name={dataName}
      rel={href.includes('http') ? 'noreferrer' : undefined}
      title={title}
      aria-label={ariaLabel}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </NextJsLink>
  );
};

export default Link;
