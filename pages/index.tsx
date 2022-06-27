import Link from 'next/link';
import MainLayout from '../components/MainLayout';

export default function Index() {
  return (
    <MainLayout title={'Love Next'}>
      <h1>Hello NEXT!</h1>
      <h4>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
      </h4>
      <h4>
        <Link href={'/posts'}>
          <a>Posts</a>
        </Link>
      </h4>
      <h4>
        <Link href={'/about/author'}>
          <a>Author</a>
        </Link>
      </h4>
    </MainLayout>
  );
}
