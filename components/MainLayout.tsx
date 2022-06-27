import Link from '../node_modules/next/link';
import Head from '../node_modules/next/head';

export default function MainLayout({ children, title = 'next Love' }) {
  return (
    <div>
      <Head>
        <title>{title} | Next The Best</title>
        <link rel="stylesheet" href="../styles/main.module.scss" />
        <meta name="keywords" content="Next,js,JavaScript,React,Junior" />
        <meta charSet="utf-8" />
        <meta name="description" content="This is description" />
      </Head>
      {title === 'Error' ? (
        ''
      ) : (
        <nav>
          <Link href={'/'}>
            <a>Home</a>
          </Link>
          <Link href={'/about'}>
            <a>About</a>
          </Link>
          <Link href={'/posts'}>
            <a>Posts</a>
          </Link>
        </nav>
      )}
      <main>{children}</main>
    </div>
  );
}
