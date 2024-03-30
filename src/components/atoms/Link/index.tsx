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
}: LinkProps) => (
  <a
    href={href}
    className={className}
    data-name={dataName}
    rel={href.includes('http') ? 'noreferrer' : undefined}
    title={title}
    aria-label={ariaLabel}
    onMouseEnter={onMouseEnter}
  >
    {children}
  </a>
);

export default Link;
