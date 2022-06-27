import { useRouter } from '../../node_modules/next/router';
import Link from '../../node_modules/next/link';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import { MyPostProp } from '../../interfaces/posts';
import { NextPageContext } from '../../node_modules/next/dist/shared/lib/utils';

interface PostPageProps {

}

export default function Posts({ post: serverPost }): PostPageProps {
  const router = useRouter();
  const [post, setPost] = React.useState(serverPost);

  React.useEffect(() => {
    async function load() {
      const resp = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const data = await resp.json();
      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h2>Пост №{post.id}</h2>
      <h1>{post.title}</h1>
      <br />
      <div>{post.body}</div>
      <br />
      <Link href={'/posts'}>
        <a> Обратно к постам... </a>
      </Link>
    </MainLayout>
  );
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Posts.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return { post: null };
  }
  const resp = await fetch(`${process.env.API_URL}/posts/${query.id}`);
  const post: MyPostProp = await resp.json();
  return {
    post,
  };
};

// export async function getServerSideProps({ query, req }) {
//   const resp = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await resp.json();

//   return {
//     props: { post },
//   };
// }
