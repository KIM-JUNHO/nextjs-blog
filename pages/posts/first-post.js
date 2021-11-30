import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Alert from '../../components/alert';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Alert type="success">success</Alert>
      <Alert type="error">error</Alert>
      <div className="bg-blue-400">tailwindcss</div>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
