import Link from '../../atoms/Link';

interface OptionalLinkProps extends React.PropsWithChildren {
  slug?: string;
  href: string;
  className?: string;
}

const OptionalLink = ({ slug, href, className, children }: OptionalLinkProps) => {
  if (slug && href.includes(slug)) {
    return <span className={className}>{children}</span>;
  }

  return (
    <Link
      href={href}
      className={className}
    >
      {children}
    </Link>
  );
};

export default OptionalLink;
