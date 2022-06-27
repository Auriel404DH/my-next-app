import Link from '../../node_modules/next/link';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import { MyPostProp } from '../../interfaces/posts';
import { NextPageContext } from '../../node_modules/next/dist/shared/lib/utils';

interface PostPropsPage {
  posts: MyPostProp[];
}

export default function Posts({ posts: serverPost }): PostPropsPage {
  const [posts, setPosts] = React.useState(serverPost);

  React.useEffect(() => {
    const load = async () => {
      const resp = await fetch(`${process.env.API_URL}/posts`);
      const json = await resp.json();
      setPosts(json);
    };

    if (!serverPost) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={'Posts'}>
      <h1>Posts NEXT!</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req, query }: NextPageContext) => {
  if (!req) {
    return {
      posts: null,
    };
  }
  const resp = await fetch(`${process.env.API_URL}/posts`);
  const posts: MyPostProp[] = await resp.json();

  return {
    posts,
  };
};
