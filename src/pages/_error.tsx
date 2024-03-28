import { NextApiResponse } from 'next';
import Layout from '../components/molecules/Layout';
import ErrorMessage from '../components/atoms/ErrorMessage';

interface ErrorProps {
  statusCode?: string;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <Layout article={{ title: statusCode }}>
      <ErrorMessage message="Не удалось отобразить страницу" />
    </Layout>
  );
}

Error.getInitialProps = ({
  res,
  err,
}: {
  res: NextApiResponse;
  err: Error & { statusCode?: string };
}) => {
  const statusCode = res ? res.statusCode : err ? err?.statusCode : 404;
  return { statusCode };
};

export default Error;
