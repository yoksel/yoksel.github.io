interface LinkProps extends React.PropsWithChildren {
  href: string;
  className?: string;
  dataName?: string;
  title?: string;
  ariaLabel?: string;
}

const Link = ({ href, className, children, dataName, title, ariaLabel }: LinkProps) => (
  <a
    href={href}
    className={className}
    data-name={dataName}
    rel={href.includes('http') ? 'noreferrer' : undefined}
    title={title}
    aria-label={ariaLabel}
  >
    {children}
  </a>
);

export default Link;
