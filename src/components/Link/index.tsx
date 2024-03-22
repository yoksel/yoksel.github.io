interface LinkProps extends React.PropsWithChildren {
  href: string;
  className?: string;
  dataName?: string;
}

const Link = ({ href, className, children, dataName }: LinkProps) => (
  <a
    href={href}
    className={className}
    data-name={dataName}
    rel={href.includes('http') ? 'noreferrer' : undefined}
  >
    {children}
  </a>
);

export default Link;
