interface LinkProps extends React.PropsWithChildren {
  href: string;
  className?: string;
  dataName?: string;
  title?: string;
}

const Link = ({ href, className, children, dataName, title }: LinkProps) => (
  <a
    href={href}
    className={className}
    data-name={dataName}
    rel={href.includes('http') ? 'noreferrer' : undefined}
    title={title}
  >
    {children}
  </a>
);

export default Link;
