import Layout from '../components/molecules/Layout';
import ErrorMessage from '../components/atoms/ErrorMessage';

function Page404() {
  return (
    <Layout article={{ title: '404' }}>
      <ErrorMessage />
    </Layout>
  );
}

export default Page404;
